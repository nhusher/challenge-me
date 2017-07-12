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

// Using a reducer:
const numeralize1 = number => 
  mapping.reduce(({ output, number }, [divisor, notation]) => ({
    number: number % divisor,
    output: output + repeat(notation, floor(number / divisor))
  }), { number, output: '' }).output

// Using recursion:
const numeralize2 = (n, o = "", [x, ...xs] = mapping) => 
  n === 0
  ? o
  : numeralize2 (n % x[0], o + repeat(x[1], floor(n / x[0])), xs)

console.log(numeralize2(+process.argv[2]))