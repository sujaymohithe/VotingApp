import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

it('renders Header Component', () => {
    const component = shallow(< Header/>);
    const wrapper = component.find('header').find(`[data-test='Logo']`);
    expect(wrapper.text() == "UNIVERSAL VOTER");
})