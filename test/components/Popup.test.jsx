import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-static';
import telegram from '@images/telegram.svg';

import Popup, {
  PopupArt,
  PopupText,
  PopupButton,
  PopupButtonText,
  PopupClose
} from '../../src/components/Popup';

describe('<Popup />', () => {
  it('renders null if telegramDisplay is false', () => {
    const component = shallow(<Popup />);
    expect(component.getElement()).to.be.null;
  });

  it('renders Popup content if telegramDisplay is true', () => {
    const component = shallow(<Popup />);
    component.setState({ telegramDisplay: true });
    expect(component.find(PopupArt)).to.have.length(1);
    expect(
      component
        .find(PopupText)
        .render()
        .html()
    ).to.equal('Chat with us.');
    expect(component.find(Link).props().to).to.equal(
      'https://t.me/Market_Protocol_Chat'
    );
    expect(component.find(PopupButton).props().type).to.equal('primary');
    expect(
      component
        .find(PopupButtonText)
        .render()
        .text()
    ).to.equal('Join our Telegram.');
    expect(component.find('img').props().src).to.equal(telegram);
  });

  it('sets telegramDisplay to true on componentDidMount after a timeout', () => {
    jest.useFakeTimers();
    const component = shallow(<Popup />);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    jest.runAllTimers();
    expect(component.state().telegramDisplay).to.equal(true);
    jest.useRealTimers();
  });

  it('sets telegramDisplay to false on click of PopupClose', () => {
    const component = shallow(<Popup />);
    component.setState({ telegramDisplay: true });
    const PopupCloseComponent = component.find(PopupClose);
    PopupCloseComponent.simulate('click');
    expect(component.state().telegramDisplay).to.equal(false);
  });
});
