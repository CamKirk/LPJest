import React from 'react';
import UnpopularOpinions from './UnpopularOpinions';
import renderer from 'react-test-renderer';

test('UnpopularOpinion ', ()=>{
    let fakestate = true;
    const clickHandle = () => fakestate = !fakestate;

    const component = renderer.create(
        <UnpopularOpinions 
        text={fakestate ? "Peanut Butter" : "Banana"}
        clickHandler={clickHandle} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log(tree.props)
    tree.props.onClick();
    tree=component.toJSON();
    expect(tree).toMatchSnapshot();
    
})