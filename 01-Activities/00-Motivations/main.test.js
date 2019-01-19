const goldberg = require('./main');


test('should throw an error if given a non-number', ()=>{
    expect(()=>{
        goldberg(2, "banana")
    }).toThrow("type");
});

test('should throw an error if given a zero as an input', ()=>{
    expect(()=>{
        goldberg(2,0);
    }).toThrow("zero");
});

test('should return an array', ()=>{
    expect(goldberg(23,45)).toEqual(expect.any(Array));
});

test('should correctly calculate result vector for (23,45)', ()=>{
    let expectedResult = [ [ 368, 1008 ], [ 720, 928 ] ];
    expect(goldberg(23,45)).toEqual(expect.arrayContaining(expectedResult));
});
