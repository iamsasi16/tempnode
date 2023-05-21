const file = require('fs')

fr = file.readFile  

fw = file.writeFile

fr('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    fr('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        fw(
        './content/resultaa.txt',
        `shit result here it is nah : ${first}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        }
        )
    })
})