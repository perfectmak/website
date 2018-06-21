import React from 'react';
import { mount } from 'enzyme';
import CategorySelector from '@components/Blog/CategorySelector';

describe('<CategorySelector />', () => {
  const selectedCat = 'cat1';
  const categories = ['cat1', 'cat2', 'cat3'];
  function onSelectCat() { return 'success!'; }

  it('renders without crashing', () => {
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={onSelectCat} />);
    expect(c.exists());
  });

  it('renders 1 wrapper div', () => {
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={onSelectCat} />);
    expect(c.find('#root').length).toEqual(1);
  });

  it('renders the correct number of categories', () => {
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={onSelectCat} />);
    expect(c.find('#root').children().length).toEqual(categories.length + 3);
  });
  
  it('invokes props.onSelectCat function when an unselected <Category /> is clicked', () => {
    const mockOnSelectCat = jest.fn();
    const c = mount(<CategorySelector selectedCat={selectedCat} categories={categories} onSelectCat={mockOnSelectCat} />);

    const root = c.find('#root');

    const cat1 = root.childAt(3);
    const cat2 = root.childAt(4);
    const cat3 = root.childAt(5);

    cat1.simulate('click');
    cat2.simulate('click');
    cat3.simulate('click');

    expect(mockOnSelectCat.mock.calls.length).toEqual(2);
  });
});
