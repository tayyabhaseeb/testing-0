import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("can receive a new user and show it on the list", () => {
  render(<App />);

  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");

  userEvent.click(nameInput);
  userEvent.keyboard("tayyab");

  userEvent.click(emailInput);
  userEvent.keyboard("tayyabhaseeb5@gmail.com");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const nameRow = screen.getByRole("cell", { name: "tayyab" });
  const emailRow = screen.getByRole("cell", {
    email: "tayyabhaseeb5@gmail.com",
  });

  expect(nameRow).toBeInTheDocument();
  expect(emailRow).toBeInTheDocument();
});

// test run ==> node
// fake browser is created and html is rendered on it ==> screen.
