import React from 'react';
import { shallow } from 'enzyme';
import WidgetList from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const widgets = [
    { id: '1', description: 'widget one' },
    { id: '2', description: 'widget two' },
  ];
  shallow(<WidgetList widgets={widgets} />, div);
});
