// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// isPhoneNumber true test 1
test('attempt with a simple mock number', () => {
    const phone = functions.isPhoneNumber('123-123-1234');
    expect(phone).toBe(true);
});

// isPhoneNumber true test 2
test('attempt with a more complex mock number', () => {
    const phone = functions.isPhoneNumber('858-867-5309');
    expect(phone).toBe(true);
});

// isPhoneNumber false test 1
test('attempt with a non-string non-dashed integer', () => {
    const phone = functions.isPhoneNumber(0);
    expect(phone).toBe(false);
});

// isPhoneNumber false test 2
test('attempt with an undashsed phone number', () => {
    const phone = functions.isPhoneNumber('1231231234');
    expect(phone).toBe(false);
});


// isEmail true test 1
test('attempt with a simple mock email', () => {
    const mail = functions.isEmail('steven@ucsd.edu');
    expect(mail).toBe(true);
});

// isEmail true test 2
test('attempt with an unusual email', () => {
    const mail = functions.isEmail('z@z.zz');
    expect(mail).toBe(true);
});

// isEmail false test 1
test('attempt with an email lacking the @ sign', () => {
    const mail = functions.isEmail('stevenucsd.edu');
    expect(mail).toBe(false);
});

// isEmail false test 2
test('attempt with an email with an oversized domain', () => {
    const mail = functions.isEmail('steven@ucsd.education');
    expect(mail).toBe(false);
});


// isStrongPassword true test 1
test('attempt with the most common, yet still valid, password', () => {
    const pw = functions.isStrongPassword('qwerty');
    expect(pw).toBe(true);
});

// isStrongPassword true test 2
test('attempt with a more confusing, yet valid, password', () => {
    const pw = functions.isStrongPassword('sts_stss___');
    expect(pw).toBe(true);
});

// isStrongPassword false test 1
test('attempt with a password that begins with a number', () => {
    const pw = functions.isStrongPassword('1steven1');
    expect(pw).toBe(false);
});

// isStrongPassword false test 2
test('attempt with a password that is too long', () => {
    const pw = functions.isStrongPassword('abcdefghijklmnop');
    expect(pw).toBe(false);
});


// isDate true test 1
test('attempt with the first AD date', () => {
    const date = functions.isDate('01/01/0001');
    expect(date).toBe(true);
});

// isDate true test 2
test('attempt with a non-existant, yet syntactically valid date', () => {
    const date = functions.isDate('99/99/2021');
    expect(date).toBe(true);
});

// isDate false test 1
test('attempt using a year shorthand', () => {
    const date = functions.isDate('11/14/21');
    expect(date).toBe(false);
});

// isDate false test 2
test('attempt without using the delimiter', () => {
    const date = functions.isDate('111421');
    expect(date).toBe(false);
});


// isHexColor true test 1
test('attempt with a regular 6-character hex', () => {
    const color = functions.isHexColor('#ABC123');
    expect(color).toBe(true);
});

// isHexColor true test 2
test('attempt with a simplified 3-character hex without the hash', () => {
    const color = functions.isHexColor('aB2');
    expect(color).toBe(true);
});

// isHexColor false test 1
test('attempt with invalid characters', () => {
    const color = functions.isHexColor('#$_p');
    expect(color).toBe(false);
});

// isHexColor false test 2
test('attempt with an incorrectly shortened hash value', () => {
    const color = functions.isHexColor('#AFF2');
    expect(color).toBe(false);
});