import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // verifica se o texto existe no documento
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    // renderiza o componente
    const { container } = render(<Main />)

    // verifica se p background color é #06092b
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
