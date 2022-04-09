import type { NextPage } from "next";

import Layout from "@/components/layouts/Layout";

const Home: NextPage = () => {
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
      </main>
    </Layout>
  );
};

export default Home;
