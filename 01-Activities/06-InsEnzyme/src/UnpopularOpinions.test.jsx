import React from 'react';
import UnpopularOpinions from './UnpopularOpinions';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

class FakeContainer extends React.Component {
    state = {
        testState: true
    }

    clickHandle = () => {
        this.setState({ testState: !this.state.testState })
    }

    render() {
        return(
        <UnpopularOpinions
            text={this.state.testState ? "Peanut Butter" : "Banana"}
            clickHandler={this.clickHandle} />)
    }
}


test('text changes on clicks ', () => {

    const enzymeWrapper = mount(<FakeContainer />);

    expect(enzymeWrapper.text()).toBe("Peanut Butter");
    console.log(enzymeWrapper.text())
    enzymeWrapper.find('h1').prop('onClick')()
    console.log(enzymeWrapper.text())
    expect(enzymeWrapper.find('h1').text()).toBe("Banana");


})