// src/components/app/app-view.test.tsx

import React from "react";
import { render } from "@testing-library/react";
import App from "./app-view";

test("renders header", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Typescript React Storybook Reference Project/i);
  expect(titleElement).toBeInTheDocument();
});
