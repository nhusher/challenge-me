const mapping = [
  [1000,  'M'],
  [900,  'CM'],
  [500,   'D'],
  [400,  'CD'],
  [100,   'C'],
  [50,    'L'],
  [40,   'XL'],
  [10,    'X'],
  [9,    'IX'],
  [5,     'V'],
  [4,    'IV'],
  [1,     'I']
]

const floor = Math.floor

const repeat = (c, n) => {
  let r = ''
  while (n--) r += c    
  return r
}

const romanNumeralize = number => 
  mapping.reduce(({ output, number }, [divisor, notation]) => ({
    number: number % divisor,
    output: output + repeat(notation, floor(number / divisor))
  }), { number, output: '' }).output

console.log(romanNumeralize(+process.argv[2]))