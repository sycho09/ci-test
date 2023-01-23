import { render, screen } from "@testing-library/react";
import Greet from "./greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet lastname="Lewis" />);
  const textElement = screen.getByText(/Lewis/i);
  expect(textElement).toBeInTheDocument();
});
