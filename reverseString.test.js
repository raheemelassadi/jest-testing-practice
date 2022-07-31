const reverseString = require('./reverseString')

test('converts the string something into gnihtemos', () => {
    expect(reverseString('something')).toMatch(/gnihtemos/)
})

test('converst molten into netlom', () => {
    expect(reverseString('molten')).toMatch(/netlom/)
})

test('converts airway into yawria', () => {
    expect(reverseString('airway')).toMatch(/yawria/)
})