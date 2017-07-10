const { spawn } = require('child_process')
const [ cmd, ...args ] = process.argv.slice(2)

function run (num, input, output) {
    return new Promise((resolve, reject) => {
        const proc = spawn(cmd, args.concat(input).map(v => v.toString()))
        let stdout = ''
        let stderr = ''

        proc.stdout.on('data', data => {
            stdout += data.toString('utf8')
        })
        proc.stderr.on('data', data => {
            stderr += data.toString('utf8')
        })
        proc.on('close', code => {
            if (code !== 0) {
                reject({
                    num,
                    input: input,
                    expected: output,
                    reason: 'Process failed with nonzero exit code',
                    code,
                    error: stderr
                })
            } else if (output !== stdout.trim()) {
                reject({
                    num,
                    input,
                    expected: output,
                    actual: stdout.trim(),
                    reason: 'Process did not produce expected output'
                })
            } else {
                resolve();
            }
        })
    })
}

const TEST_CASES = [
    [1,    'I'],
    [2,    'II'],
    [5,    'V'],
    [10,   'X'],
    [20,   'XX'],
    [50,   'L'],
    [100,  'C'],
    [200,  'CC'],
    [500,  'D'],
    [1000, 'M'],
    [2000, 'MM'],
    [4,    'IV'],
    [9,    'IX'],
    [40,   'XL'],
    [90,   'XC'],
    [400,  'CD'],
    [900,  'CM']
]

TEST_CASES.reduce((acc, test, i) => {
    return acc.then(() => run(i + 1, ...test)).then(() => {
        console.log(`Test ${i + 1}/${TEST_CASES.length} passed!`)
    })
}, Promise.resolve()).then(() => {
    console.log("All tests passed!")
}, e => {
    console.log("Tests failed")
    console.log(e)
})