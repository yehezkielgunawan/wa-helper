// __tests__/index.test.jsx

import { render } from "@testing-library/react";

import "@testing-library/jest-dom";
import Home from "@/pages/index";

describe("Render Main Page Successfully", () => {
  it("Renders Home Page Successfully", () => {
    render(<Home countryCodes={[]} />);
  });
});
