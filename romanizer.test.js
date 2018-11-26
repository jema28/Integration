var test = require('tape');
var romanizer = require('./romanizer.js');

test('Testing Tape is working', function (t) {
  var actual = 2;
  var expected = 1;
  t.equal(actual, expected, '2 should equal 2 ');
  t.end();
});

test('Testing romanizer function output I', function (t) {
  var actual = romanizer(1);
  var expected = 'I';
  t.equal(actual, expected, '1 should equal I');
  t.end();
});

test('Testing romanizer function output II', function (t) {
  var actual = romanizer(2);
  var expected = 'II';
  t.equal(actual, expected, '2 should equal II');
  t.end();
});

test('Testing romanizer function output III', function (t) {
  var actual = romanizer(3);
  var expected = 'III';
  t.equal(actual, expected, '3 should equal III');
  t.end();
});

test('Testing romanizer function output IV', function (t) {
  var actual = romanizer(4);
  var expected = 'IV';
  t.equal(actual, expected, '4 should equal IV');
  t.end();
});

test('Testing romanizer function output IV', function (t) {
  var actual = romanizer(5);
  var expected = 'V';
  t.equal(actual, expected, '5 should equal V');
  t.end();
});

test('Testing romanizer function output VI', function (t) {
  var actual = romanizer(6);
  var expected = 'VI';
  t.equal(actual, expected, '6 should equal VI');
  t.end();
});

test('Testing romanizer function output VII', function (t) {
  var actual = romanizer(7);
  var expected = 'VII';
  t.equal(actual, expected, '7 should equal VII');
  t.end();
});

test('Testing romanizer function output VIII', function (t) {
  var actual = romanizer(8);
  var expected = 'VIII';
  t.equal(actual, expected, '8 should equal VIII');
  t.end();
});

test('Testing romanizer function output IX', function (t) {
  var actual = romanizer(9);
  var expected = 'IX';
  t.equal(actual, expected, '9 should equal IX');
  t.end();
});

test('Testing romanizer function output X', function (t) {
  var actual = romanizer(10);
  var expected = 'X';
  t.equal(actual, expected, '10 should equal X');
  t.end();
});
