import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionDetailsContainer from './QuestionDetailsContainer';
import QuestionDetails from './QuestionDetails';
import { Provider } from "react-redux";
import { store } from '../../store';

Enzyme.configure({ adapter: new Adapter() });

describe('Question Details Container And Question Details Component', () => {
    it('Should render the QuestionDetailsContainer component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <QuestionDetailsContainer />
            </Provider>);
        expect(wrapper.find(QuestionDetailsContainer).length).toBe(1);
    })

    it('should render the QuestionDetail Widget component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <QuestionDetails />
            </Provider>);
        expect(wrapper.find(QuestionDetails).length).toEqual(1);
    })

    it('renders Question Details widget by passing required props from QuestionDetailsContainer component', () => {
        const component = mount(
            <Provider store={store} >
                <QuestionDetailsContainer isFetching={false} match={{params: {id: 1}}} questionDetails={{question: "Books"}}/>
            </Provider>);
         expect(component.find(QuestionDetails).length).toEqual(1);
    })

    it('renders Back to Home link', () => {
        const component = mount(
            <Provider store={store} >
                <QuestionDetailsContainer match={{params: {id: 1}}} questionDetails={{question: "Books"}}/>
            </Provider>);
        const wrapper = component.find('.ButtonPrimary').first();
        expect(wrapper.text() == "Back To Home");
    })

})