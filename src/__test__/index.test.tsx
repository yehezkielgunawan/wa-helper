import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Home from "@/pages/index";

// Replace window.alert with a mock implementation
window.alert = jest.fn();

describe("Home Page", () => {
	test("Renders home page successfully", () => {
		render(<Home countryCodes={[]} />);
		expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
	});

	test("Initiates with base values", () => {
		render(<Home countryCodes={[]} />);
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		const countryCode = screen.getByDisplayValue("62") as HTMLInputElement;
		expect(phoneNumber.value).toBe("");
		expect(countryCode.value).toBe("62");
	});

	test("Disables generate button if phone number is not valid", async () => {
		render(<Home countryCodes={[]} />);
		const user = userEvent.setup();
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		const generateButton = screen.getByText("Generate");

		await user.type(phoneNumber, "812432");
		expect(generateButton).toBeDisabled();
	});

	test("Enables generate button if phone number is valid", async () => {
		render(<Home countryCodes={[]} />);
		const user = userEvent.setup();
		// Fix the selector - use proper accessibility attributes
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		// Use a test-id instead of role for better accessibility
		const generateButton = screen.getByText("Generate") as HTMLButtonElement;

		await user.type(phoneNumber, "85285569293");
		expect(generateButton).not.toBeDisabled();
	});

	test("Disables copy button if phone number is invalid", async () => {
		render(<Home countryCodes={[]} />);
		const user = userEvent.setup();
		// Fix the selector to use a proper attribute
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		const copyLinkButton = screen.getByText("Copy Link") as HTMLButtonElement;

		await user.type(phoneNumber, "84234451");
		expect(copyLinkButton).toBeDisabled();
	});

	test("Enables copy button if phone number is valid", async () => {
		render(<Home countryCodes={[]} />);
		const user = userEvent.setup();
		// Fix the selector to use a proper attribute
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		const copyLinkButton = screen.getByText("Copy Link") as HTMLButtonElement;

		await user.type(phoneNumber, "85285569095");
		expect(copyLinkButton).not.toBeDisabled();
	});

	test("Shows copy confirmation when copy button is clicked", async () => {
		// Mock clipboard API properly
		const mockClipboard = {
			writeText: jest.fn().mockImplementation(() => Promise.resolve()),
		};

		// Use jest.spyOn instead of Object.assign
		jest
			.spyOn(navigator.clipboard, "writeText")
			.mockImplementation(mockClipboard.writeText);

		render(<Home countryCodes={[]} />);
		const user = userEvent.setup();

		// Fix the selector to use a proper attribute
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		const copyLinkButton = screen.getByText("Copy Link") as HTMLButtonElement;

		await user.type(phoneNumber, "85285569095");
		await user.click(copyLinkButton);

		// Use a more flexible assertion - your component might show "Copied!" or similar
		expect(screen.getByText(/copied/i)).toBeInTheDocument();
	});

	test("Completes the entire flow successfully", async () => {
		const user = userEvent.setup();

		// Mock clipboard API properly
		const mockClipboard = {
			writeText: jest.fn().mockImplementation(() => Promise.resolve()),
		};

		// Use jest.spyOn instead of Object.assign
		jest
			.spyOn(navigator.clipboard, "writeText")
			.mockImplementation(mockClipboard.writeText);

		render(<Home countryCodes={[]} />);

		// Get the phone input and enter a valid number
		const phoneNumber = screen.getByPlaceholderText(
			"Example: 85285569094",
		) as HTMLInputElement;
		await user.type(phoneNumber, "85285569095");

		// Click the copy button
		const copyButton = screen.getByText("Copy Link");
		await user.click(copyButton);

		// Verify copy confirmation appears
		expect(screen.getByText(/copied/i)).toBeInTheDocument();

		// Verify clipboard was called
		expect(navigator.clipboard.writeText).toHaveBeenCalled();
	});
});
