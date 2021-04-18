import React from 'react'
import Enzyme, {shallow} from 'enzyme';
import EnzymeΑdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({adapter:new EnzymeΑdapter()})


test('renders without error', () => {
const wrapper = shallow(<App />)
});




