const capitalize = require('./capitalize')

test('capitalizes the word cucumber', () => {
    expect(capitalize('cucumber')).toMatch(/Cucumber/)
})

test('capitalizes the word freedom', () => {
    expect(capitalize('freedom')).toMatch(/Freedom/)
})

test('capitalizes the word capital', () => {
    expect(capitalize('capital')).toMatch(/Capital/)
})