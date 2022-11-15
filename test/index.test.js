const index = require('../src')

test('Should say hello', () => {
    const result = index.sayHello("World");
    expect(result).toEqual("Hello World!");
})

test('Should say bye', () => {
    const result = index.sayHello("World");
    expect(result).toEqual("Bye, World!");
})