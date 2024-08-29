import { screen } from '@testing-library/react'
import { renderWithRender } from '../../utils/tests/helpers'

import Highlight from '.'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  $backgroundImage: '/img/red-dead-img.jpg',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    renderWithRender(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = renderWithRender(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.$backgroundImage})`
    })
  })

  it('should render float image', () => {
    renderWithRender(<Highlight {...props} floatImage="/float-img.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-img.png'
    )
  })
})
