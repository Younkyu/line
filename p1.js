class Consumer {
  constructor(){
    this.messageSize = 0
  }
}

class Consume{
  constructor(count){
    this.list = []
    for (let i = 0; i < count; i++) {
      this.list.push(new Consumer())
    }
    this.time = 0
  }
}

process.stdin.setEncoding('utf8')
process.stdin.on('data', data => {
  const input = data.replace( /\n/gi, ' ').split(' ')
  const consumerCount = input[1] * 1
  input.shift()
  input.shift()
  const dataArr = input.map(v => v * 1)

  const consume = new Consume(consumerCount)
  while (dataArr.length > 0) {
    consume.list.forEach(consumer => {
      if(consume.time === consumer.messageSize) {
        consumer.messageSize += dataArr.shift()
      }
    })
    consume.time = consume.list.reduce((p, v) => p.messageSize > v.messageSize ? v : p).messageSize
  }

  const result = consume.list.reduce((p, v) => p.messageSize > v.messageSize ? p : v).messageSize

  console.log(result)
})
