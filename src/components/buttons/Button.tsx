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
				aria-busy={isLoading}
				aria-disabled={disabled}
				className={clsxm(
					"inline-flex items-center justify-center rounded-sm px-4 py-2 font-semibold",
					"focus:outline-none focus:ring-2 focus:ring-offset-2",
					"shadow-sm",
					"transition-all duration-200 ease-in-out",
					"transform active:scale-95",
					[
						variant === "primary" && [
							"bg-primary-600 text-white",
							"hover:bg-primary-500 hover:shadow-md",
							"focus:ring-primary-500",
							"active:bg-primary-700",
							"disabled:bg-primary-300 disabled:opacity-50",
						],
						variant === "outline" && [
							"text-primary-600 dark:text-primary-300",
							"border border-primary-600 dark:border-primary-300",
							"hover:bg-primary-50 dark:hover:bg-primary-900/20",
							"focus:ring-primary-500",
							"active:bg-primary-100 dark:active:bg-primary-800/30",
							"disabled:border-primary-300 disabled:text-primary-300",
							"dark:disabled:border-primary-600 dark:disabled:text-primary-600",
						],
						variant === "ghost" && [
							"text-primary-600 dark:text-primary-300",
							"shadow-none",
							"hover:bg-primary-50 dark:hover:bg-primary-900/20",
							"focus:ring-primary-500",
							"active:bg-primary-100 dark:active:bg-primary-800/30",
							"disabled:text-primary-300 dark:disabled:text-primary-600",
						],
						variant === "light" && [
							"bg-white text-gray-900",
							"border border-gray-300",
							"hover:bg-gray-50 hover:shadow-md",
							"focus:ring-gray-500",
							"active:bg-gray-100",
							"disabled:bg-gray-100 disabled:text-gray-400",
						],
						variant === "dark" && [
							"bg-gray-900 text-white",
							"border border-gray-700",
							"hover:bg-gray-800 hover:shadow-md",
							"focus:ring-gray-500",
							"active:bg-gray-700",
							"disabled:bg-gray-600 disabled:opacity-50",
						],
					],
					"disabled:transform-none disabled:cursor-not-allowed",
					isLoading && [
						"relative text-transparent hover:text-transparent",
						"disabled:cursor-wait",
					],
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
								"text-gray-900": ["light"].includes(variant),
								"text-primary-600": ["outline", "ghost"].includes(variant),
							},
						)}
						aria-hidden="true"
					>
						<ImSpinner2 className="animate-spin" size={16} />
					</div>
				)}
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

export default Button;
