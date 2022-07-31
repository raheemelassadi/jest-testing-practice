const calculator = require('./calculator')

test('multiply 5 * 5 and equal 25', () => {
    expect(calculator.multiply(5, 5)).toEqual(25)
}) 

test('mutiply 10 * 10 to equal 100', () => {
    expect(calculator.multiply(10, 10)).toEqual(100)
})