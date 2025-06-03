"use client";

import type React from "react";
import { useState, useCallback, useRef, useEffect } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

import Button from "@/components/buttons/Button";
import type { CountryCodeProps } from "@/lib/fetcher/fetcher";
import clsxm from "@/lib/helpers/clsxm";

interface HomeContentProps {
	countryCodes: Array<CountryCodeProps>;
}

const HomeContent: React.FC<HomeContentProps> = ({ countryCodes }) => {
	const countryCodeList = countryCodes ?? [];
	const [waNum, setWANum] = useState<string>("");
	const [countryCode, setCountryCode] = useState<string>("62");
	const [message, setMessage] = useState<string>("");
	const [isCopied, setIsCopied] = useState<boolean>(false);
	const [copiedLink, setCopiedLink] = useState<string>("");
	const [errors, setErrors] = useState<{ phone?: string }>({});
	const [toastMessage, setToastMessage] = useState<string>("");
	const [isMac, setIsMac] = useState<boolean>(false);
	const [isMobile, setIsMobile] = useState<boolean>(false);

	// Refs for focus management
	const phoneInputRef = useRef<HTMLInputElement>(null);
	const generateButtonRef = useRef<HTMLButtonElement>(null);

	// Detect OS and device type
	useEffect(() => {
		const userAgent = navigator.userAgent;
		const isMacOS = /Mac|iPod|iPhone|iPad/.test(userAgent);
		const isMobileDevice =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				userAgent,
			) ||
			(typeof window !== "undefined" && window.innerWidth < 768);

		setIsMac(isMacOS);
		setIsMobile(isMobileDevice);
	}, []);

	// Show toast notification
	const showToast = useCallback((message: string) => {
		setToastMessage(message);
		setTimeout(() => setToastMessage(""), 2000);
	}, []);

	const isFormValid = waNum.length >= 10;

	const handleWANum = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = String(e.target.value);
			setWANum(value);

			// Clear error when user starts typing
			if (errors.phone && value.length >= 10) {
				setErrors((prev) => ({ ...prev, phone: undefined }));
			}
		},
		[errors.phone],
	);

	const handleCountryCode = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			return setCountryCode(e.target.value.replace("+", ""));
		},
		[],
	);

	const handleMessage = useCallback(
		(e: React.ChangeEvent<HTMLTextAreaElement>) => {
			return setMessage(encodeURIComponent(e.target.value));
		},
		[],
	);

	const validatePhone = useCallback(() => {
		if (waNum.length < 10) {
			setErrors({ phone: "Phone number must be at least 10 digits" });
			phoneInputRef.current?.focus();
			return false;
		}
		setErrors({});
		return true;
	}, [waNum]);

	const handleCopiedLink = useCallback(async () => {
		if (!validatePhone()) return;

		setCopiedLink("");
		setIsCopied(true);

		const link = `https://wa.me/${countryCode + waNum}${
			message.length > 0 ? `?text=${message}` : ""
		}`;

		setCopiedLink(link);

		try {
			await navigator.clipboard.writeText(link);
			// Announce to screen readers
			const announcement = document.createElement("div");
			announcement.setAttribute("aria-live", "polite");
			announcement.setAttribute("aria-atomic", "true");
			announcement.className = "sr-only";
			announcement.textContent = "WhatsApp link copied to clipboard";
			document.body.appendChild(announcement);
			setTimeout(() => document.body.removeChild(announcement), 1000);
		} catch (error) {
			console.error("Failed to copy to clipboard:", error);
		}

		setTimeout(() => {
			setIsCopied(false);
		}, 5000);
	}, [countryCode, waNum, message, validatePhone]);

	const openWAAPI = useCallback(() => {
		if (!validatePhone()) return;

		return window.open(
			`https://wa.me/${countryCode + waNum}${
				message.length > 0 ? `?text=${message}` : ""
			}`,
		);
	}, [countryCode, waNum, message, validatePhone]);

	const handleKeyDown = useCallback(
		(e: React.KeyboardEvent) => {
			// Handle form submission with Enter key
			if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
				e.preventDefault();
				if (isFormValid) {
					openWAAPI();
					showToast("🚀 Opening WhatsApp...");
				} else {
					showToast("❌ Please enter a valid phone number");
				}
			}
			// Handle copy shortcut
			if ((e.ctrlKey || e.metaKey) && e.key === "c" && e.shiftKey) {
				e.preventDefault();
				if (isFormValid) {
					handleCopiedLink();
					showToast("📋 Copying link...");
				} else {
					showToast("❌ Please enter a valid phone number");
				}
			}
		},
		[openWAAPI, handleCopiedLink, isFormValid, showToast],
	);

	// Add global keyboard event listeners
	useEffect(() => {
		const handleGlobalKeyDown = (e: KeyboardEvent) => {
			// Handle form submission with Enter key (global)
			if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
				e.preventDefault();
				if (isFormValid) {
					openWAAPI();
					showToast("🚀 Opening WhatsApp...");
				} else {
					showToast("❌ Please enter a valid phone number");
				}
			}
			// Handle copy shortcut (global)
			if ((e.ctrlKey || e.metaKey) && e.key === "c" && e.shiftKey) {
				e.preventDefault();
				if (isFormValid) {
					handleCopiedLink();
					showToast("📋 Copying link...");
				} else {
					showToast("❌ Please enter a valid phone number");
				}
			}
		};

		document.addEventListener("keydown", handleGlobalKeyDown);
		return () => document.removeEventListener("keydown", handleGlobalKeyDown);
	}, [openWAAPI, handleCopiedLink, isFormValid, showToast]);

	return (
		<main
			id="main-content"
			className="layout-container"
			onKeyDown={handleKeyDown}
		>
			{/* Header Section */}
			<section className="space-y-4 text-center">
				<h1 className="font-bold text-3xl md:text-4xl">WhatsApp Helper</h1>

				<p className="text-gray-600 text-lg md:text-xl dark:text-gray-300">
					A web app to save your time to directly chat without saving the phone
					number.
				</p>

				<div className="space-y-0.5 text-sm">
					<p className="font-semibold text-green-600 underline dark:text-green-400">
						This site does not collect any personal information.
					</p>

					<p className="text-gray-500 text-xs dark:text-gray-400">
						You can check the source code by yourself.
					</p>
				</div>
			</section>

			{/* Main Form */}
			<section className="mx-auto my-10 max-w-lg space-y-6 px-4 md:px-0">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						openWAAPI();
					}}
					aria-label="WhatsApp message form"
					noValidate
				>
					{/* Phone Number Section */}
					<div className="space-y-3">
						<div className="space-y-2">
							<label
								htmlFor="phoneNum"
								className="block font-medium text-sm after:ml-1 after:text-red-500 after:content-['*']"
							>
								Phone Number
							</label>

							<div className="flex gap-2" aria-labelledby="phone-group-label">
								<span className="sr-only" id="phone-group-label">
									Phone number with country code
								</span>

								<input
									type="tel"
									list="countryCode"
									name="code"
									id="code"
									defaultValue="62"
									className={clsxm(
										"base-form w-20",
										"focus:border-primary-500 focus:ring-2 focus:ring-primary-500",
										"transition-colors duration-200",
									)}
									onChange={handleCountryCode}
									aria-label="Country code"
									title="Select or enter country code"
								/>

								<datalist id="countryCode">
									{countryCodeList.map((code) => (
										<option
											value={code.dial_code}
											key={`${code.dial_code}-${code.code}-${code.name}`}
										>{`${code.dial_code} ${code.name}`}</option>
									))}
								</datalist>

								<div className="flex-1">
									<input
										ref={phoneInputRef}
										type="tel"
										name="phoneNum"
										id="phoneNum"
										placeholder="Example: 85285569094"
										className={clsxm(
											"base-form w-full",
											"focus:border-primary-500 focus:ring-2 focus:ring-primary-500",
											"transition-colors duration-200",
											"hover:border-gray-400 dark:hover:border-gray-500",
											errors.phone &&
												"border-red-500 focus:border-red-500 focus:ring-red-500",
										)}
										onChange={handleWANum}
										value={waNum}
										aria-invalid={!!errors.phone}
										aria-describedby={
											errors.phone ? "phone-error" : "phone-help"
										}
										required
									/>

									<div id="phone-help" className="sr-only">
										Enter phone number without country code
									</div>

									{errors.phone && (
										<p
											id="phone-error"
											className="mt-1 text-red-600 text-sm dark:text-red-400"
											role="alert"
											aria-live="polite"
										>
											{errors.phone}
										</p>
									)}
								</div>
							</div>
						</div>
					</div>

					{/* Message Section */}
					<div className="mt-4 space-y-2">
						<label htmlFor="message" className="block font-medium text-sm">
							Message (optional)
						</label>
						<div className="flex">
							<textarea
								name="message"
								id="message"
								className={clsxm(
									"base-form w-full",
									"focus:border-primary-500 focus:ring-2 focus:ring-primary-500",
									"transition-colors duration-200",
									"hover:border-gray-400 dark:hover:border-gray-500",
								)}
								rows={3}
								placeholder="Any message you want to send?"
								onChange={handleMessage}
								aria-describedby="message-help"
							/>
						</div>
						<p
							id="message-help"
							className="text-gray-500 text-xs dark:text-gray-400"
						>
							Optional message to include with your WhatsApp link
						</p>
					</div>

					{/* Action Buttons */}
					<div className="mt-6 flex justify-between gap-2">
						<Button
							ref={generateButtonRef}
							type="submit"
							className={clsxm(
								"grow justify-center",
								"focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
								"transition-all duration-200 hover:scale-105 active:scale-95",
								"disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
							)}
							disabled={!isFormValid}
							onClick={openWAAPI}
							aria-describedby="generate-help"
						>
							Generate & Open
						</Button>

						<div id="generate-help" className="sr-only">
							Opens WhatsApp with the specified phone number and message.
							Keyboard shortcut: {isMac ? "Cmd" : "Ctrl"}+Enter
						</div>

						<Button
							type="button"
							variant="outline"
							className={clsxm(
								"grow gap-2",
								"focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
								"transition-all duration-200 hover:scale-105 active:scale-95",
								"disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
							)}
							onClick={handleCopiedLink}
							isLoading={!!(copiedLink.length < 1 && isCopied)}
							disabled={!isFormValid}
							aria-describedby="copy-help"
						>
							<FaCopy size="16" aria-hidden="true" /> Copy Link
						</Button>

						<div id="copy-help" className="sr-only">
							Copies WhatsApp link to clipboard. Keyboard shortcut:{" "}
							{isMac ? "Cmd" : "Ctrl"}+Shift+C
						</div>
					</div>
				</form>

				{/* Keyboard shortcuts help - Hidden on mobile */}
				{!isMobile && (
					<div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-800 dark:bg-blue-900/20">
						<h3 className="mb-2 flex items-center gap-2 font-semibold text-blue-800 text-sm dark:text-blue-200">
							⌨️ Keyboard Shortcuts
						</h3>
						<div className="space-y-1 text-blue-700 text-xs dark:text-blue-300">
							<div className="flex items-center justify-between">
								<span>Toggle theme:</span>
								<kbd className="rounded bg-blue-100 px-2 py-1 font-mono text-xs dark:bg-blue-800">
									Alt + T
								</kbd>
							</div>
							<div className="flex items-center justify-between">
								<span>Generate & open:</span>
								<kbd className="rounded bg-blue-100 px-2 py-1 font-mono text-xs dark:bg-blue-800">
									{isMac ? "⌘" : "Ctrl"} + Enter
								</kbd>
							</div>
							<div className="flex items-center justify-between">
								<span>Copy link:</span>
								<kbd className="rounded bg-blue-100 px-2 py-1 font-mono text-xs dark:bg-blue-800">
									{isMac ? "⌘" : "Ctrl"} + Shift + C
								</kbd>
							</div>
						</div>
					</div>
				)}
			</section>

			{/* Success Feedback */}
			<section
				className={clsxm(
					"invisible mx-auto my-4 max-w-lg rounded-sm p-3",
					"bg-teal-200 dark:bg-teal-500",
					"transition-all duration-300",
					isCopied && copiedLink.length > 1 && "visible animate-pulse",
				)}
				aria-live="polite"
				aria-atomic="true"
			>
				<div className="inline-flex w-full items-center justify-between gap-2">
					<p className="text-xs">
						<span className="font-semibold">✅ Copied URL:</span>{" "}
						<span className="break-all font-bold italic">{copiedLink}</span>
					</p>

					<FaCheck
						size={16}
						aria-hidden="true"
						className="flex-shrink-0 text-green-600"
					/>
				</div>
			</section>

			{/* Toast Notification */}
			{toastMessage && (
				<div
					className={clsxm(
						"fixed top-20 right-4 z-50 rounded-lg p-3 shadow-lg",
						"bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900",
						"animate-slide-in-right transition-all duration-300",
						"max-w-xs border border-gray-700 dark:border-gray-300",
					)}
					role="alert"
					aria-live="polite"
				>
					<p className="font-medium text-sm">{toastMessage}</p>
				</div>
			)}
		</main>
	);
};

export default HomeContent;
