// __tests__/index.test.jsx

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "@/pages/index";

describe("<Home />", () => {
  it("renders home page successfully", () => {
    render(<Home countryCodes={[]} />);
  });
});
