// 1 there should be two inputs and one button
// 2 when we click the btn the function should be called
// test() is provided by the test runner which is  jest

import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";
import userEvent from "@testing-library/user-event";

test("it shows two inputs and a button", () => {
  // Step-1 Render the component
  render(<UserForm />);
  // Step-2 Manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Step-3 Assertion-make sure the component is doing what we expect it to do

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

//////////////////////////////////

// Test 2 (Not the best practice)

// test("Checking the addUser function is called", () => {
//   // Not the best practice
//   const argList = [];

//   const callBack = (...args) => {
//     argList.push(args);
//   };

//   // Try to render the component
//   render(<UserForm addUser={callBack} />);
//   // Find the two inputs
//   const [name, email] = screen.getAllByRole("textbox");
//   // Simulate typing in name
//   userEvent.click(name);
//   userEvent.keyboard("tayyab");
//   //  Simulate typing in email
//   userEvent.click(email);
//   userEvent.keyboard("tayyabhaseeb5@gmail.com");
//   // Find the button
//   const button = screen.getByRole("button");
//   // Simulate Clicking the button
//   userEvent.click(button);
//   // Assertion to make sure addUser function is called
//   expect(argList).toHaveLength(1);
//   expect(argList[0][0]).toEqual({
//     name: "tayyab",
//     email: "tayyabhaseeb5@gmail.com",
//   });
// });

// Best solution with  mock functions
// it doesn't do any thing
// keep the record of arguments and  when it is called

test("Checking the addUser function is called", () => {
  const mock = jest.fn();
  // Try to render the component
  render(<UserForm addUser={mock} />);
  // Find the two inputs
  const name = screen.getByLabelText("Name");
  const email = screen.getByLabelText("Email");

  // Simulate typing in name
  userEvent.click(name);
  userEvent.keyboard("tayyab");
  //  Simulate typing in email
  userEvent.click(email);
  userEvent.keyboard("tayyabhaseeb5@gmail.com");
  // Find the button
  const button = screen.getByRole("button");
  // Simulate Clicking the button
  userEvent.click(button);
  // Assertion to make sure addUser function is called
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({
    name: "tayyab",
    email: "tayyabhaseeb5@gmail.com",
  });
});
