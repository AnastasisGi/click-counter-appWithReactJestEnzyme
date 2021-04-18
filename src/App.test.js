import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import EnzymeΑdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({adapter:new EnzymeΑdapter()})



const setup = ()=>{
  return shallow(<App/>)
}


const findByTestAttr = (wrapper,val)=> wrapper.find(`[data-test='${val}']`)

test('renders without error', () => {
const wrapper=setup();

const appComponent = findByTestAttr(wrapper,'component-app')
expect(appComponent.length).toBe(1)
});

test('renders a button', () => {
const wrapper = shallow(<App />)
const button = wrapper.find("[data-test='increment-button']")
expect(button.length).toBe(1)
});


test('renders a counter-display', () => {
const wrapper = shallow(<App />)
const counterDisplay = wrapper.find("[data-test='counter-display']")
expect(counterDisplay.length).toBe(1)
});


