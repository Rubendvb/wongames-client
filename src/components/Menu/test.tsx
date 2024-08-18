import { render, screen } from '@testing-library/react'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Menu />)

    // verifica se o texto existe no documento
    expect(
      screen.getByRole('heading', { name: /Menu/i })
    ).toBeInTheDocument()

    // gerar o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
