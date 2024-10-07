import { render, screen } from '@testing-library/react'

import Slider from '.'

describe('<Slider />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Slider />)

    // verifica se o texto existe no documento
    expect(
      screen.getByRole('heading', { name: /Slider/i })
    ).toBeInTheDocument()

    // gerar o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
