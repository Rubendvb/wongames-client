import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Heading />)

    // verifica se o texto existe no documento
    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()

    // gerar o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
