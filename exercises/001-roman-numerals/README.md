# Roman numerals

Write a program that takes an integer and returns a string of the roman numeral representation of that integer. Inputs will always be integers in the language of choice. Results are expected to conform to standard numeral formats, where `IV` represents `4`, `IX` is `9`, `XL` is `40`, `CM` is `900`, etc. You may use any language you wish. Because roman numerals cannot represent negative numbers, zero, or very large numbers, inputs will be between 1 and 10,000.

Program inputs will be integers represented as strings, and it expects the program to print the result to stdout and return with a zero exit code. The test harness is written in node.

Bonus points for writing something that reads roman numerals and produces an integer representation.

### Running the tests:

There's a self-contained test runner written in node in this directory. To run the tests, simply run the JS and pass the command to run the program:

```sh
$ node tests node solution-node
```

Or:

```sh
$ node tests lein run
```