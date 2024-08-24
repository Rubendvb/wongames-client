import { Meta, StoryObj } from '@storybook/react'

import Footer from '.'

const meta: Meta<typeof Footer> = {
  title: 'Footer',
  component: Footer,
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer />
    </div>
  )
}

export default meta

type Story = StoryObj<typeof Footer>

export const Default: Story = {}
