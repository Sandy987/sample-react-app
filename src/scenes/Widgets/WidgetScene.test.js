import React from 'react';
import { shallow } from 'enzyme';
import WidgetScene from './WidgetScene';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const widgets = [
    { id: '1', description: 'widget one' },
    { id: '2', description: 'widget two' },
  ];
  shallow(
    <WidgetScene
      widgets={widgets}
      fetchWidgets={() => {}}
      makeWidget={() => {}}
    />,
    div
  );
});
