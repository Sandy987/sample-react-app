import React from 'react';
import { shallow } from 'enzyme';
import Widget from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const widget = { id: '1', description: 'widget one' };
  shallow(<Widget widget={widget} />, div);
});
