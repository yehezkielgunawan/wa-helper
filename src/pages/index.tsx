import { FaCopy } from "react-icons/fa";

import Button from "@/components/buttons/Button";
import Layout from "@/components/layouts/Layout";
import { CountryCodeProps, getCountryCodes } from "@/lib/fetcher/fetcher";
import clsxm from "@/lib/helpers/clsxm";

export async function getStaticProps() {
  const countryCodes = await getCountryCodes();
  return {
    props: {
      countryCodes,
    },
    revalidate: 60,
  };
}

const Home = ({ countryCodes }: { countryCodes: Array<CountryCodeProps> }) => {
  const countryCodeList = countryCodes ?? [];

  return (
    <Layout>
      <main className="layout-container">
        <section className="space-y-4 text-center">
          <h1>Whatsapp Helper</h1>
          <h4>
            A Whatsapp helper to save your time to directly chat without saving
            the phone number.
          </h4>
          <div className="space-y-0.5">
            <p className="text-base font-semibold underline">
              This site does not collect any personal information.
            </p>
            <p className="text-xs">
              You can check the source code by yourself.
            </p>
          </div>
        </section>
        <section className="my-4 mx-auto max-w-lg space-y-2 px-4 md:px-0">
          <div className="space-y-2">
            <label htmlFor="phoneNum">Phone Number</label>
            <div className="flex gap-2">
              <input
                type="tel"
                list="countryCode"
                name="code"
                id="code"
                defaultValue="+62"
                className={clsxm("w-20 dark:bg-slate-600 dark:text-zinc-100")}
              />
              <datalist id="countryCode">
                {countryCodeList.map((code, index) => (
                  <option
                    value={code.dial_code}
                    key={index}
                  >{`${code.code} ${code.name}`}</option>
                ))}
              </datalist>
              <input
                type="tel"
                name="phoneNum"
                id="phoneNum"
                className="w-full dark:bg-slate-600 dark:text-zinc-100"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message">Message (optional)</label>
            <div className="flex">
              <textarea
                name="message"
                id="message"
                className="w-full dark:bg-slate-600 dark:text-zinc-100 dark:placeholder:text-zinc-300"
                rows={3}
                placeholder="Any message?"
              />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <Button className="grow">Generate</Button>
            <Button variant="outline" className="grow gap-2">
              <FaCopy size="16" /> Copy Link
            </Button>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;
