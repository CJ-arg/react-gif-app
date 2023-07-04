import { render, screen } from "@testing-library/react"
import GifItem from "../../src/components/GifItem"
import React from "react"

describe('pruebas en GIFTITEM', () => {
  const title = 'Clarian'
  const url = 'https: //clarian.com'
  test('should match snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()

  });
  test('should show the image url and alt ', () => {
    render(<GifItem title={title} url={url} />)
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(alt)
  })
  test('should show a title in the component ', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  })
})