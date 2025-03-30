import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";


test('renders empty todo list on first render', () => {
  const { queryByRole } = render(<Todo />);
  const listElement = queryByRole('list');
  expect(listElement.children.length).toBe(0);
});

test('add new items to todo list', () => {
  const { queryByRole, queryByLabelText } = render(<Todo />);
  const listElement = queryByRole('list');
  const inputElement = queryByLabelText(/add new todo/i);
  expect(listElement.children.length).toBe(0);

  fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
  fireEvent.submit(inputElement);

  expect(listElement.children.length).toBe(1);
  expect(listElement.firstChild.textContent).toContain("Walk the dog");
});

test('mark todo items as complete', () => {
  const { queryByRole, queryByLabelText, getByText, getByTestId } = render(<Todo />);
  const listElement = queryByRole('list');
  const inputElement = queryByLabelText(/add new todo/i);
  
  expect(listElement.children.length).toBe(0);
  
  fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
  fireEvent.submit(inputElement);
  
  expect(listElement.children.length).toBe(1);
  expect(listElement.firstChild.textContent).toContain("Walk the dog");
  
  const completedElement = getByTestId("completed");
  expect(completedElement.textContent).toBe("Completed: No");
  const completeButton = getByTestId("complete-btn");
  fireEvent.click(completeButton);
  expect(completedElement.textContent).toBe("Completed: Yes");
});

test('delete a todo', () => {
  const { queryByRole, queryByLabelText, getByText, getByTestId } = render(<Todo />);
  const listElement = queryByRole('list');
  const inputElement = queryByLabelText(/add new todo/i);
  
  expect(listElement.children.length).toBe(0);
  
  fireEvent.change(inputElement, { target: { value: "Walk the dog" } });
  fireEvent.submit(inputElement);
  
  expect(listElement.children.length).toBe(1);
  expect(listElement.firstChild.textContent).toContain("Walk the dog");
  
  const deleteButton = getByTestId("delete-btn");
  fireEvent.click(deleteButton);
  expect(listElement.children.length).toBe(0);
});
