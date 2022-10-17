import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";
import Home from "@/pages/index";

test("Render home page successfully", () => {
  render(<Home countryCodes={[]} />);
});

test("Initiate base value", async () => {
  render(<Home countryCodes={[]} />);
  const phoneNumber = screen.getByPlaceholderText(
    "Example: 85285569094"
  ) as HTMLInputElement;
  const countryCode = screen.getByDisplayValue("62") as HTMLInputElement;
  expect(phoneNumber.value).toBe("");
  expect(countryCode.value).toBe("62");
});

test("Disable generate button if the number is not valid", async () => {
  render(<Home countryCodes={[]} />);
  const phoneNumber = screen.getByPlaceholderText(
    "Example: 85285569094"
  ) as HTMLInputElement;
  const generateButton = screen.getByText("Generate");
  await userEvent.type(phoneNumber, "812432");
  expect(generateButton).toBeDisabled();
});

test("The button can be clicked if the phone number is valid", async () => {
  render(<Home countryCodes={[]} />);
  const phoneNumber = screen.getByAltText("phoneNum") as HTMLInputElement;
  const generateButton = screen.getByRole(
    "generateButton"
  ) as HTMLButtonElement;
  await userEvent.type(phoneNumber, "85285569293");
  expect(generateButton).toBeEnabled();
});

test("The copy button disabled if the phone number is invalid", async () => {
  render(<Home countryCodes={[]} />);
  const phoneNumber = screen.getByAltText("phoneNum") as HTMLInputElement;
  const copyLinkButton = screen.getByText("Copy Link") as HTMLButtonElement;
  await userEvent.type(phoneNumber, "84234451");
  expect(copyLinkButton).toBeDisabled();
});

test("The copy button is enabled if the phone number is valid", async () => {
  render(<Home countryCodes={[]} />);
  const phoneNumber = screen.getByAltText("phoneNum") as HTMLInputElement;
  const copyLinkButton = screen.getByText("Copy Link") as HTMLButtonElement;
  await userEvent.type(phoneNumber, "85285569095");
  expect(copyLinkButton).toBeEnabled();
});

test("The copy button can be clicked if the phone number is valid", async () => {
  render(<Home countryCodes={[]} />);
  const phoneNumber = screen.getByAltText("phoneNum") as HTMLInputElement;
  const copyLinkButton = screen.getByText("Copy Link") as HTMLButtonElement;
  await userEvent.type(phoneNumber, "85285569095");
  await userEvent.click(copyLinkButton);
  expect(screen.getByText("Copied URL", { exact: false }));
});
