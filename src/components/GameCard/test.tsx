import { screen } from '@testing-library/react'
import { renderWithRender } from '../../utils/tests/helpers'

import GameCard from '.'
import theme from '../../styles/theme'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  price: 'R$ 235,00'
}
describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithRender(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithRender(<GameCard {...props} />)

    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText(props.price)).toHaveStyle({
      backgroundColor: theme.colors.secondary
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithRender(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
