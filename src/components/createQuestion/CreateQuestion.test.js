import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateQuestionContainer from './CreateQuestionContainer';
import { Provider } from "react-redux";
import { store } from '../../store';

Enzyme.configure({ adapter: new Adapter() });

describe('Create Question Component', () => {
    it('Should render the CreateQuestionContainer component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <CreateQuestionContainer />
            </Provider>);
        expect(wrapper.find(CreateQuestionContainer).length).toBe(1);
    })

    it('renders Back to Home link', () => {
        const component = mount(
            <Provider store={store} >
                <CreateQuestionContainer/>
            </Provider>);
        const wrapper = component.find('.ButtonPrimary').first();
        expect(wrapper.text() == "Back To Home");
    })

    it('renders TextArea to enter question and answer', () => {
        const component = mount(
            <Provider store={store} >
                <CreateQuestionContainer/>
            </Provider>);
        const wrapper = component.find('textarea');
        expect(wrapper.length).toEqual(2);
    })

    it('Create Question button click should work', () => {
        const wrapper = mount(
            <Provider store={store} >
                <CreateQuestionContainer/>
            </Provider>);
        wrapper.find('#CreateQA').simulate('click');
        expect(wrapper.find('#CreateQA').text()).toEqual("Create"); 
    })

})