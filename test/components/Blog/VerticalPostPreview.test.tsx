import React from 'react'
import Moment from 'react-moment'
import { mount } from 'enzyme'
import VerticalPostPreview from '@components/Blog/VerticalPostPreview'
import { cropContent } from '@helpers/cropContent'

describe('<VerticalPostPreview />', () => {
  const samplePost = {
    data: {
      title: 'The Title',
      author: 'Mary Jane',
      category: 'Development',
      published_at: '2018-06-09T05:00:00-05:00',
      medium_link: 'http://medium.com/',
      thumbnail: 'path/to/thumbnail',
      slug: 'slug',
      readtime: 5,
    },
    content: 'The content.',
  }

  it('renders without crashing', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    expect(c.exists())
  })

  it('renders nothing if post prop is undefined', () => {
    const c = mount(<VerticalPostPreview post={undefined} />)
    expect(c.render().text()).toEqual('')
  })

  it('renders the publish date', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    const m = mount(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>)
    const publishDateC = c.children().find(Moment)
    expect(publishDateC.render().text()).toEqual(m.render().text())
  })

  it('renders the thumbnail', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    const thumbnailC = c.children().find('img')
    expect(thumbnailC.prop('src')).toEqual(samplePost.data.thumbnail)
  })

  it('wrapps component with the link to the post', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    const linkC = c.children().find('a')
    expect(linkC.prop('href')).toEqual(`/blog/post/${samplePost.data.slug}`)
  })

  it('renders the category', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    expect(c.render().text()).toContain(samplePost.data.category.toUpperCase())
  })

  it('renders the post title', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    expect(c.render().text()).toContain(samplePost.data.title)
  })

  it('renders content preview and does not crop content, if it is shorter than crop length is provided', () => {
    const c = mount(<VerticalPostPreview post={samplePost} />)
    expect(c.render().text()).toContain(cropContent(samplePost.content))
  })

  const longContent =
    'The content. goes on forever and never ever stops and will it crop it or not noone knows keep on going and going and going go go og'

  it('crops content correctly with no crop length provided', () => {
    expect(cropContent(longContent)).toBe(
      'The content. goes on forever and never ever stops and will it crop it or not noone knows keep on'
    )
  })

  it('crops content correctly with by amount of crop length provided', () => {
    expect(cropContent(longContent, 2)).toBe('The content.')
  })

  it('if content undefined, retuns backup phrase', () => {
    expect(cropContent(undefined)).toBe('Coming soon')
  })
})
