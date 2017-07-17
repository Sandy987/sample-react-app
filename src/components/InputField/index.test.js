import React from 'react';
import { shallow } from 'enzyme';
import InputField from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<InputField />, div);
});
