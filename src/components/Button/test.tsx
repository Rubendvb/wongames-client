import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    // renderiza o componente
    const { container } = render(<Button />)

    // verifica se o texto existe no documento
    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    // gerar o snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
