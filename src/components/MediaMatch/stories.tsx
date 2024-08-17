import { Meta, StoryObj } from '@storybook/react'

import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import MediaMatch from '.'

const meta: Meta<typeof MediaMatch> = {
  title: 'MediaMatch',
  component: MediaMatch,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'desktop'
    }
  }
}

export default meta

type Story = StoryObj<typeof MediaMatch>

export const Desktop: Story = {
  render: () => <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
}

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex'
    }
  },

  render: () => <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
}
