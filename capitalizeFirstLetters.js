const assert = require('assert')


const capitalizeFirstLetters = (input) => { 
    return input.length > 0
        ? input[0].toUpperCase() + input.slice(1)
        : '';

};

assert.strictEqual(capitalizeFirstLetters('yo les enfants'), 'Yo Les Enfants');
assert.strictEqual(capitalizeFirstLetters('y'), 'Y');
assert.strictEqual(capitalizeFirstLetters(''), '');
console.log('YEAH !!')

