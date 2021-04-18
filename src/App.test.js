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
const wrapper = setup();
const button = findByTestAttr(wrapper,'increment-button')
expect(button.length).toBe(1)
});


test('renders a counter-display', () => {
const wrapper = setup();
const counterDisplay = findByTestAttr(wrapper,'counter-display')
expect(counterDisplay.length).toBe(1)
});

test('counter starts at 0', () => {
  const wrapper=setup();
  const count = findByTestAttr(wrapper,'count').text();  
  expect(count).toEqual("0")
})

