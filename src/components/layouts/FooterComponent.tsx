/* eslint-disable @next/next/no-img-element */
import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";
import UnstyledLink from "../links/UnstyledLink";

const FooterComponent = () => {
  return (
    <footer className={clsxm("fixed bottom-0 w-full px-4 md:px-1")}>
      <div
        className={clsxm(
          "flex flex-wrap items-center justify-center gap-2 sm:justify-between",
          "mx-auto my-4 max-w-4xl"
        )}
      >
        <div
          className={clsxm(
            "flex flex-wrap items-end justify-center",
            "gap-6 md:justify-start"
          )}
        >
          <UnderlineLink
            href="https://yehezgun.com"
            className="cursor-newtab font-semibold hover:underline"
          >
            {new Date().getFullYear()} | Yehezkiel Gunawan
          </UnderlineLink>
          <UnstyledLink href="https://www.producthunt.com/posts/wa-helper?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-wa&#0045;helper">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=341899&theme=light"
              alt="WA&#0032;Helper - Send&#0032;the&#0032;WhatsApp&#0032;message&#0032;without&#0032;saving&#0032;the&#0032;phone&#0032;number | Product Hunt"
              className="w-32 md:w-40"
            />
          </UnstyledLink>
        </div>
        <div className="inline-flex gap-6">
          <UnderlineLink href="https://ko-fi.com/yehezgun" className="gap-1">
            <SiKofi size={20} /> Support me on Ko-fi
          </UnderlineLink>
          <UnderlineLink href="https://saweria.co/yehezgun" className="gap-1">
            <GiPayMoney size={20} /> Support me on Saweria
          </UnderlineLink>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
