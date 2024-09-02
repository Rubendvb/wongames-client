import { Meta, StoryObj } from '@storybook/react'

import Banner from '.'

const meta: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  render: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  ),
  args: {
    img: 'https://plus.unsplash.com/premium_photo-1724151998262-75576ac2b098?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {}

export const WithRibbon: Story = {
  args: {
    ribbon: '20% OFF',
    ribbonSize: 'normal',
    ribbonColor: 'primary'
  }
}
