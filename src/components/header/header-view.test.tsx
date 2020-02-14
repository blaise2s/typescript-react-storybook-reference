// src/components/header/header-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import Header from "./header-view";

test("renders header with title", () => {
  const { getByText } = render(<Header />);
  const titleElement = getByText(/Typescript React Storybook Reference Project/i);
  expect(titleElement).toBeInTheDocument();
});
