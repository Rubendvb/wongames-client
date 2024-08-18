import { Meta, StoryObj } from '@storybook/react'

import Menu from '.'

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {}
