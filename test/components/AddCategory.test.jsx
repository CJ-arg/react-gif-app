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
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    fireEvent.submit(form);
    screen.debug()
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('should not call onNewCatgory if it has ""  value ', () => {

    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={onNewCategory} />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })


})