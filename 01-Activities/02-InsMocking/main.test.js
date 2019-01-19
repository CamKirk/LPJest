const applyOperatorTiny = require('./main');

const mockCb = jest.fn( (x) => 1.05*x.randomState + Math.pow(x.value,2) );

const testArray = [
    {
        "value":21
    },
    {
        "value":2
    },
    {
        "value":12
    },
    {
        "value":11
    }
];

test('should return appropriate behavior for testArray',()=>{
    applyOperatorTiny(testArray, mockCb);

    expect(mockCb).toBeCalledWith(
        expect.objectContaining({
            value: 12,
            randomState: expect.any(Number)
        })
    );

    //difference from above: toEqual expects EXACTLY the result, where objectContaining can have other properties on teh object.
    expect(mockCb.mock.calls[2][0]).toEqual({
        value: 12,
        randomState: expect.any(Number)
    });

    expect(mockCb).toBeCalledTimes(4);

    expect(mockCb.mock.results[1].value).toBeTruthy();

  
});

test('should throw too large for a big array',()=>{
    expect(()=>{
        applyOperatorTiny([1,2,3,4,5,6,7,8,9,10,11],()=>{})
    }).toThrow("too large");
});