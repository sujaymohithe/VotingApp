import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import QuestionListHome from './QuestionListContainer';
import Question from './Question';
import { Provider } from "react-redux";
import {store} from '../../store';
import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

describe('Question List Container And Question Widget Component', () => {
    it('Should render the QuestionListContainer component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <QuestionListHome />
            </Provider>);
        expect(wrapper.find(QuestionListHome).length).toBe(1);
    })

    it('should render the Question Widget component', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Question />
            </Provider>);
        expect(wrapper.find(Question).length).toEqual(1);
    })

    it('Should render no Question widget in Question List Home Page on Initial Load', () => {
        const wrapper = mount(
            <Provider store={store} >
                <App />
            </Provider>);
        console.log(wrapper.debug());
        expect(wrapper.find('.Boxwidget').length).toEqual(0);
    })
})