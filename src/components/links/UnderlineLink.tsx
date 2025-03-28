import React from "react";

import clsxm from "@/lib/helpers/clsxm";

import UnstyledLink, { type UnstyledLinkProps } from "./UnstyledLink";

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
	({ children, className, ...rest }, ref) => {
		return (
			<UnstyledLink
				ref={ref}
				{...rest}
				className={clsxm(
					"link-underline",
					"inline-flex items-center",
					"focus-visible:dashed focus:outline-hidden focus-visible:ring-3 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
					className,
				)}
			>
				{children}
			</UnstyledLink>
		);
	},
);

UnderlineLink.displayName = "UnderlineLink";

export default UnderlineLink;
