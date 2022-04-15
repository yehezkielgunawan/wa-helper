import React from "react";
import { GiPayMoney } from "react-icons/gi";
import { SiKofi } from "react-icons/si";

import clsxm from "@/lib/helpers/clsxm";

import UnderlineLink from "../links/UnderlineLink";

const FooterComponent = () => {
  return (
    <footer
      className={clsxm(
        "mx-auto max-w-4xl py-16 px-4 md:px-1",
        "flex flex-wrap items-center justify-center gap-2 sm:justify-between"
      )}
    >
      <UnderlineLink
        href="https://yehezgun.com"
        className="cursor-newtab font-semibold hover:underline"
      >
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </UnderlineLink>
      <div className="inline-flex gap-6">
        <UnderlineLink href="https://ko-fi.com/yehezgun" className="gap-1">
          <SiKofi size={20} /> Support me on Ko-fi
        </UnderlineLink>
        <UnderlineLink href="https://saweria.co/yehezgun" className="gap-1">
          <GiPayMoney size={20} /> Support me on Saweria
        </UnderlineLink>
      </div>
    </footer>
  );
};

export default FooterComponent;
