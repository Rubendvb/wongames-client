import { Meta, StoryObj } from '@storybook/react'

import Ribbon from '.'

const meta: Meta<typeof Ribbon> = {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
}

export default meta

type Story = StoryObj<typeof Ribbon>

export const Default: Story = {
  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}
