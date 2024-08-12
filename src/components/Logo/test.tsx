import { render, screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Logo />)

    // verifica se o texto existe no documento
    expect(
      screen.getByRole('heading', { name: /Logo/i })
    ).toBeInTheDocument()

    // gerar o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
