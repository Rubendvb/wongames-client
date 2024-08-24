import { Meta, StoryObj } from '@storybook/react'

import Banner from '.'

const meta: Meta<typeof Banner> = {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
}

export default meta

type Story = StoryObj<typeof Banner>

export const Default: Story = {}
