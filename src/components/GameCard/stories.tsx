import { Meta, StoryObj } from '@storybook/react'

import GameCard from '.'

const meta: Meta<typeof GameCard> = {
  title: 'GameCard',
  component: GameCard,
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://images.unsplash.com/photo-1531547977107-a5f0f32d6d87?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
}

export default meta

type Story = StoryObj<typeof GameCard>

export const Default: Story = {}

export const WithRibbon: Story = {
  args: {
    ribbon: '20% OFF',
    ribbonColor: 'primary',
    ribbonSize: 'small'
  }
}
