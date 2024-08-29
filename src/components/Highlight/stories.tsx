import { Meta, StoryObj } from '@storybook/react'

import Highlight from '.'

const meta: Meta<typeof Highlight> = {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rd-next'
  }
}

export default meta

type Story = StoryObj<typeof Highlight>

export const Default: Story = {}
