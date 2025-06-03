"use client";

import clsx from "clsx";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

import clsxm from "@/lib/helpers/clsxm";

import Button from "../buttons/Button";
import ButtonLink from "../buttons/ButtonLink";

const HeaderComponent = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);
	const [isMac, setIsMac] = useState<boolean>(false);

	const handleChangeTheme = useCallback(() => {
		return setTheme(theme === "light" ? "dark" : "light");
	}, [theme, setTheme]);

	const handleKeyDown = (e: React.KeyboardEvent) => {
		// Handle keyboard shortcuts for theme toggle
		if (e.altKey && e.key === "t") {
			e.preventDefault();
			handleChangeTheme();
		}
	};

	useEffect(() => {
		setMounted(true);

		// Detect if user is on Mac
		const userAgent = navigator.userAgent;
		const isMacOS = /Mac|iPod|iPhone|iPad/.test(userAgent);
		setIsMac(isMacOS);

		// Add global keyboard event listener
		const handleGlobalKeyDown = (e: KeyboardEvent) => {
			if (e.altKey && e.key === "t") {
				e.preventDefault();
				handleChangeTheme();
			}
		};

		document.addEventListener("keydown", handleGlobalKeyDown);
		return () => document.removeEventListener("keydown", handleGlobalKeyDown);
	}, [handleChangeTheme]);

	if (!mounted) return null;

	return (
		<>
			{/* Skip to main content link for keyboard navigation */}
			<a
				href="#main-content"
				className="sr-only rounded-md bg-primary-600 px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
			>
				Skip to main content
			</a>

			<header className="fixed top-0 z-50 w-full bg-white p-0.5 opacity-90 dark:bg-gray-700">
				<nav
					className={clsx(
						"flex items-center justify-between",
						"mx-auto h-14 max-w-4xl px-2 md:px-1",
					)}
					aria-label="Main navigation"
				>
					<div className="inline-flex items-center gap-1">
						<FaWhatsapp
							size={24}
							aria-hidden="true"
							className="text-green-600 dark:text-green-400"
						/>
						<span className="font-bold text-black text-lg dark:text-white">
							WhatsApp Helper
						</span>
					</div>

					<div className="inline-flex items-center gap-1 md:gap-3">
						<ButtonLink
							variant="ghost"
							href="https://github.com/yehezkielgunawan/wa-helper"
							className={clsxm(
								"gap-2 text-lightgray-900 dark:text-lightgray-400",
								"hover:bg-daviesgrey-100 dark:hover:bg-daviesgrey-400",
								"focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
								"transition-all duration-200 focus:outline-none",
								"hover:scale-105 active:scale-95",
							)}
							aria-label="View source code on GitHub (opens in new tab)"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub size={28} aria-hidden="true" />
							<span className="hidden sm:block">GitHub Repo</span>
						</ButtonLink>

						<Button
							variant="outline"
							className={clsxm(
								"dark:border-white dark:text-white dark:hover:bg-daviesgrey-400",
								"hover:cursor-pointer hover:border-daviesgrey-400 hover:bg-daviesgrey-200",
								"border-daviesgrey-700 p-2 text-black",
								"rounded-full transition-all duration-200",
								"focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
								"hover:scale-110 focus:outline-none active:scale-95",
							)}
							onClick={handleChangeTheme}
							onKeyDown={handleKeyDown}
							aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode (Alt+T)`}
							title={`Switch to ${theme === "dark" ? "light" : "dark"} mode (Alt+T)`}
						>
							{theme === "dark" ? (
								<FiSun size={20} aria-hidden="true" />
							) : (
								<FiMoon size={20} aria-hidden="true" />
							)}
						</Button>
					</div>
				</nav>
			</header>
		</>
	);
};

export default HeaderComponent;
