import { Meta, StoryObj } from '@storybook/react'

import Slider from '.'
import { Settings } from 'react-slick'
import styled from 'styled-components'

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  component: Slider
}

export default meta

type Story = StoryObj<typeof Slider>

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story = {
  render: () => (
    <Slider settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = {
  render: () => (
    <Slider settings={verticalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
    </Slider>
  )
}
