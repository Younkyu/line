process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const splitData = data.split('\n');
  splitData.shift()
  const toiletData = splitData.map(v => v.split(' ').map(v => v * 1)).sort((a, b) => {
    if(a[0] !== b[0]) return a[0] - b[0]
    return a[1] - b[1]
  })
  let result = 0
  let priorityQ = []
  while (toiletData.length > 0) {
    const data = toiletData.shift()
    const time = data[0]
    priorityQ = priorityQ.filter(v => v[1] > time)
    priorityQ.push(data)
    if(result < priorityQ.length) result = priorityQ.length
  }
  console.log(result)
})
