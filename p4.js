process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const splitData = data.split('\n');
  const arr = splitData[1].split(' ').map(v => v * 1)
  let max = 0
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === 1) {
      if(max < count) max = count
      count = 0
    }
    else count++
  }
  let result = 0
  if(max%2 === 0) result = Math.floor(max/2)
  else result = Math.floor(max/2) + 1
  console.log(result)
})
