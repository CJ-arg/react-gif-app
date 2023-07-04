import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('pruebas en <AddCategory/>', () => {

  test('should change textbox value ', () => {
    render(<AddCategory onNewCategory={() => { }} />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value: 'Casa' } });

    expect(input.value).toBe('Casa');
  });
  test('should call onNewCatgory if it has a value ', () => {
    const inputValue = 'Homer'
    render(<AddCategory onNewCategory={() => { }} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    fireEvent.submit(form);
    screen.debug()
    expect(input.value).toBe('');
  })



})