const file = require('fs')

frs = file.readFileSync  

fws = file.writeFileSync

const first = frs('./content/first.txt' , 'utf8')
const second = frs('./content/second.txt', 'utf8')

fws('./content/result.txt', `shit result here it is nah : ${first}`,{flag: 'a'})

console.log(first,second);