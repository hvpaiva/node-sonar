const index = require('../index')
test('Should say hello', () => {
    const result = index.sayHello("World");
    expect(result).toEqual("Hello World!");
})