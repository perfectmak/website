import React from 'react';
import { mount, shallow } from 'enzyme';
import Perks, { ImageContainer, JobPerksText } from '@components/Jobs/Perks'

describe('<Perks />', () => {
  const props = {
    imgURL : 'image.svg',
    alt: 'alt text'
  }
  const text = 'description text'
  let component = typeof Perks

  beforeEach(() => {
    component = mount(<Perks {...props}>{text}</Perks>)
  })

  it('renders without crashing', () => {
    expect(component.exists())
  })

  it('renders children as description', () => {
    expect(component.props().children).to.equal(text)
  })

  it('renders an <ImageContainer /> component', () => {
    expect(component.find(ImageContainer).length).toEqual(1)
  })

  it('renders an image,', () => {
    expect(component.find('img').length).toEqual(1)
  })

})