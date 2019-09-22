process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const splitData = data.split('\n')
  const maxInput = splitData[0].split(' ').map(v => v * 1)
  const input = splitData[1].split(' ').map(v => v * 1)
  const time = input[0] + input[1]
  let count = input[0] * input[1]

  const countXY = (x, y) => {
    if(x == 0 || y == 0) return 0
    return countXY(x - 1, y) + countXY(x, y - 1)
  }

  if(input[0] < 0 || input[1] < 0 || input[0] > maxInput[0] || input[1] > maxInput[1]) {
    console.log('fail')
  } else {
    console.log(time)
    console.log(count)
  }
})
