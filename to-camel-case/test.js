var test = require('tape');
var pack = require('./package.json');
var toCamelCase = require('./' + pack.main);


test('amp-to-camel-case', function (t) {
    t.equal(toCamelCase(' hi world'), 'hiWorld');
    t.equal(toCamelCase('_hi_world'), 'hiWorld');
    t.equal(toCamelCase(' _ hi--world'), 'hiWorld');
    t.equal(toCamelCase(' _ hi2--world'), 'hi2World');
    t.equal(toCamelCase([]), '');
    t.equal(toCamelCase({}), '');
    t.equal(toCamelCase(1), '');
    t.end();
});