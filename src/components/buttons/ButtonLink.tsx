import React from "react";

import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink, { UnstyledLinkProps } from "../links/UnstyledLink";

enum ButtonVariant {
  "primary",
  "outline",
  "ghost",
  "light",
  "dark",
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, className, variant = "primary", ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "inline-flex items-center rounded px-4 py-2 font-semibold",
          "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
          "shadow-sm",
          "transition-colors duration-75",
          //#region  //*=========== Variants ===========
          [
            variant === "primary" && [
              "bg-primary-500 text-white",
              "border border-primary-600",
              "hover:bg-primary-600 hover:text-white",
              "active:bg-primary-500",
              "disabled:bg-primary-400 disabled:hover:bg-primary-400",
            ],
            variant === "outline" && [
              "text-primary-500 dark:text-primary-200",
              "border border-primary-500",
              "hover:bg-primary-300 active:bg-primary-100 disabled:bg-primary-100",
              "dark:hover:bg-primary-500",
            ],
            variant === "ghost" && [
              "text-primary-700 dark:text-primary-200",
              "shadow-none",
              "hover:bg-primary-200 active:bg-primary-100 disabled:bg-primary-100 dark:hover:bg-primary-500",
            ],
            variant === "light" && [
              "text-dark bg-white ",
              "border border-gray-300",
              "hover:text-dark hover:bg-gray-100",
              "active:bg-white/80 disabled:bg-gray-200",
            ],
            variant === "dark" && [
              "bg-gray-900 text-white",
              "border border-gray-600",
              "hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700",
            ],
          ],
          //#endregion  //*======== Variants ===========
          "disabled:cursor-not-allowed",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default ButtonLink;
