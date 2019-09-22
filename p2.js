process.stdin.setEncoding('utf8')
process.stdin.on('data', data => {
  let input = data.replace( /\n/gi, ' ').split(' ').map(v => v * 1)
  let find = input.pop()
  let numArr = input.sort((a, b) => a - b)
  let result = ''

  const factorial = (n) => n > 1 ? n * factorial(n - 1) : n
  let count = numArr.length
  while (count > 1) {
    count = count - 1
    const divisionNum = factorial(count)
    let pick = numArr[ Math.floor((find - 1)/divisionNum)]
    numArr = numArr.filter(v => v !== pick)
    result += pick
    find = find%divisionNum
  }

  result += numArr[0]

  console.log(result)

})
