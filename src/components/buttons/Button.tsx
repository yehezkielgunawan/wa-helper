import React from "react";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/lib/helpers/clsxm";

type ButtonVariant = "primary" | "outline" | "ghost" | "light" | "dark";

type ButtonProps = {
	isLoading?: boolean;
	variant?: ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			className,
			disabled: buttonDisabled,
			isLoading,
			variant = "primary",
			...rest
		},
		ref,
	) => {
		const disabled = isLoading || buttonDisabled;
		return (
			<button
				ref={ref}
				type="button"
				disabled={disabled}
				className={clsxm(
					"inline-flex items-center justify-center rounded-sm px-4 py-2 font-semibold",
					"focus:outline-hidden focus-visible:ring-3 focus-visible:ring-primary-500",
					"shadow-xs",
					"transition duration-200 ease-in",
					[
						variant === "primary" && [
							"bg-primary-600 text-white",
							"hover:bg-primary-400 hover:text-white",
							"active:bg-primary-500",
							"disabled:bg-primary-200",
						],
						variant === "outline" && [
							"text-primary-500 dark:text-primary-300",
							"border border-primary-600",
							"active:bg-primary-100",
							"disabled:text-primary-200 dark:disabled:text-primary-700",
							"dark:hover:bg-primary-500 dark:disabled:hover:bg-daviesgrey-700",
							"hover:bg-primary-50 disabled:hover:bg-lightgray-100",
						],
						variant === "ghost" && [
							"text-primary-500",
							"shadow-none",
							"hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
						],
						variant === "light" && [
							"bg-white text-dark ",
							"border border-gray-300",
							"hover:text-dark",
							"active:bg-white/80 disabled:bg-gray-200",
						],
						variant === "dark" && [
							"bg-gray-900 text-white",
							"border border-gray-600",
							"active:bg-gray-700 disabled:bg-gray-700",
						],
					],
					"disabled:cursor-not-allowed",
					isLoading &&
						"relative text-transparent hover:text-transparent disabled:cursor-wait",
					className,
				)}
				{...rest}
			>
				{isLoading && (
					<div
						className={clsxm(
							"-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2",
							{
								"text-white": ["primary", "dark"].includes(variant),
								"text-black": ["light"].includes(variant),
								"text-primary-500": ["outline", "ghost"].includes(variant),
							},
						)}
					>
						<ImSpinner2 className="animate-spin" />
					</div>
				)}
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

export default Button;
