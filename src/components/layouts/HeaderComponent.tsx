import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

import clsxm from "@/lib/helpers/clsxm";

import Button from "../buttons/Button";

const HeaderComponent = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const handleChangeTheme = () => {
    return setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full bg-white p-0.5 opacity-90 dark:bg-gray-700">
      <div
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-2 md:px-1"
        )}
      >
        <h5 className="font-bold text-black dark:text-white">
          Whatsapp Helper
        </h5>
        <Button
          variant="outline"
          className={clsxm(
            "dark:border-white dark:text-white dark:hover:bg-gray-500",
            "hover:border-black hover:bg-gray-200",
            "border-black p-2 text-black",
            "rounded-full"
          )}
          onClick={() => handleChangeTheme()}
        >
          {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
        </Button>
      </div>
    </header>
  );
};

export default HeaderComponent;
