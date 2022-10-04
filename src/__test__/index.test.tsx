// __tests__/index.test.jsx

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "@/pages/index";

describe("<Home />", () => {
  it("renders home page successfully", () => {
    render(<Home countryCodes={[]} />);
  });
});

describe("Generate WA Link", () => {
  it("Initiate base value", async () => {
    render(<Home countryCodes={[]} />);
    const phoneNumber = screen.getByPlaceholderText(
      "Example: 85285569094"
    ) as HTMLInputElement;
    const countryCode = screen.getByDisplayValue("62") as HTMLInputElement;
    expect(phoneNumber.value).toBe("");
    expect(countryCode.value).toBe("62");
  });

  it("Disable generate button if the number is not valid", async () => {
    render(<Home countryCodes={[]} />);
    const phoneNumber = screen.getByPlaceholderText(
      "Example: 85285569094"
    ) as HTMLInputElement;
    const generateButton = screen.getByText("Generate");
    await waitFor(() => {
      fireEvent.change(phoneNumber, { target: { value: "812342" } });
    });
    expect(generateButton).toBeDisabled();
  });

  it("The button can be clicked if the phone number is valid", async () => {
    render(<Home countryCodes={[]} />);
    const phoneNumber = screen.getByAltText("phoneNum") as HTMLInputElement;
    const generateButton = screen.getByText("Generate");
    await waitFor(() => {
      fireEvent.change(phoneNumber, { target: { value: "85285569293" } });
    });
    expect(generateButton).toBeEnabled();
  });
});
