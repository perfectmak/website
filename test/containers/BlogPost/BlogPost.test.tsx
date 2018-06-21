import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link } from 'react-static'
import Moment from 'react-moment'
import Waypoint from 'react-waypoint'
import Markdown from 'react-markdown'
import ProgressBar from '@components/Blog/ProgressBar'
import BlogPost, {CategoryContainer} from '@containers/BlogPost/BlogPost'
import VerticalPostPreview from '@components/Blog/VerticalPostPreview'
import MarketSubscriberForm from '@components/MarketSubscriberForm'

describe('<BlogPost />', () => {
  let component = typeof BlogPost
  let samplePost = {
    data: {
      title: 'Post Title',
      author: 'Mary Jane',
      category: 'The Category',
      published_at: '2018-06-09T05:00:00-05:00',
      medium_link: 'http://medium.com/',
      thumbnail: 'path/to/thumbnail',
      slug: '/slug',
      readtime: 5,
    },
    content: 'The content.',
  }

  let sampleData = {
    posts: [
      {
        data: {
          author: "Brady Cheredone",
          category: "Crash Courses",
          medium_link: "http://bradysheridan.com/",
          published_at:"2018-06-10T02:34:00-05:00",
          readtime: 2,
          slug:"sample-post-4",
          thumbnail:"/uploads/unadjustednonraw_thumb_749.jpg",
          title:"Sample Post 4",
        }
      },
      {
        data: {
          author: "Brady Cheredone",
          category: "Crash Courses",
          medium_link: "http://bradysheridan.com/",
          published_at:"2018-06-10T02:34:00-05:00",
          readtime: 2,
          slug:"sample-post-4",
          thumbnail:"/uploads/unadjustednonraw_thumb_749.jpg",
          title:"Sample Post 4",
        }
      },
    ]
  }


  beforeEach(() => {
    component = shallow(<BlogPost post={samplePost} blogData={sampleData}/>)
  })

  it('renders without crashing', () => {
    expect(component.exists())
  })

  describe('header', () => {
    it('renders a <ProgressBar />', () => {
      expect(component.find(ProgressBar).length).toEqual(1)
    })

    it('renders the title', () => {
      let observed = {
        title: component
          .find('.header-wrap')
          .find('#title')
          .first()
          .render()
          .text(),
      }

      expect(observed.title).toEqual(samplePost.data.title)
    })

    it('renders twitter/medium links', () => {
      expect(
        component
          .find('.header-wrap')
          .find('#links-header')
          .children().length
      ).toEqual(2)
    })
  })

  it('renders a <Waypoint />', () => {
    expect(component.find(Waypoint).length).toEqual(1)
  })

  it('renders a <MarketSubscriberForm />', () => {
    expect(component.find(MarketSubscriberForm).length).toEqual(1)
  })

  it('renders a <VerticalPostPreview />', () => {
    expect(component.find(VerticalPostPreview).length).toEqual(2)
  })


  it('renders BlogImage thumbnail component', () => {
    expect(component.find({ src: samplePost.data.thumbnail }).length).toEqual(1);
  });

  it('renders correct src for BlogImage thumbnail component', () => {
    expect(component.find({ src: samplePost.data.thumbnail }).prop('src')).toEqual(samplePost.data.thumbnail);
  });

  it('renders category', () => {
    expect(component.find('.category').render().text()).toContain(samplePost.data.category.toUpperCase())
  })

  it('renders title', () => {
    expect(component.find('.titled').render().text()).toContain(samplePost.data.title)
  })

  it('renders readtime', () => {
    expect(component.find('.readtime').render().text()).toContain(`Reading time: ${samplePost.data.readtime} minutes`)
  })

  it('renders the publish date', () => {
    const m = mount(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>)
    const publishDateC = component.children().find(Moment)
    expect(publishDateC.render().text()).toEqual(m.render().text())
  })

  it('renders the markdown content', () => {
    let markdown = component.find(Markdown)
    expect(markdown.props().source).toEqual(samplePost.content)
  })

  it('renders Telegram button', () => {
    expect(component.find('.btntelegram').length).toEqual(1)
  })

  it('renders a Subscribe button', () => {
    expect(component.find('.btnsubscribe').length).toEqual(1)
  })

  it('renders Readers also enjoy block', () => {
    expect(component.find('.readersenjoy').render().text()).toContain(`Readers also enjoyed`)
  })

    it('toggles the visiblity of the <Header /> with showHeader and hideHeader functions', () => {
      let instance = component.instance();
      instance.showHeader();
      expect(component.state().headerIsVisible).toEqual(true);
      instance.hideHeader();
      expect(component.state().headerIsVisible).toEqual(false);
    });

    it('renders the correctly styled twitter/medium links depending on whether they are being rendered in header or body', () => {
      let instance = component.instance();
      let headerLinks = instance.renderSocialButtons('header');
      let bodyLinks = instance.renderSocialButtons('body');
      expect(headerLinks.props.id).toEqual('links-header');
      expect(bodyLinks.props.id).toEqual('links-body');
    });

    it('filters the posts correctly', () => {
      let instance = component.instance();
      expect(instance.filterPosts(sampleData, undefined, 3)).toBeUndefined()
      expect(instance.filterPosts(sampleData.posts, samplePost, 3).length).toBeLessThanOrEqual(3)
      expect(instance.filterPosts(sampleData.posts, samplePost, 2).length).toEqual(2)

    });

    it('toggles the visiblity of the <Header /> with showHeader and hideHeader functions', () => {
      expect(component.state().subscriptionPopUpVisible).toEqual(false);
    })
  });
})
