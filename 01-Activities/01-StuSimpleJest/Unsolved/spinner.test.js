const spinner = require('./spinner');

test('spinner should return red, green, or blue by default', ()=>{
    expect(["red", "green", "blue"]).toContain(spinner());
});

test('if passed an empty array, should return null', ()=>{
    expect(spinner([])).toBe(undefined);
});