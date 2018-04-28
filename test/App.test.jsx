import React from 'react';
import { mount } from 'enzyme';
import App from '../src/App.tsx';

it('render without crash', () => {
  mount(<App />);
})

it('test chai expect', () => {
  expect("Hello Jest!").to.be.a('string');
}) 
