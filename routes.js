const fs = require("fs");

const requestHandler = ((req,res)=>{
    res.setHeader("Content-Type","text/html")

    if(req.url=="/"){
        res.end(
            `
           <form action="/message" method="POST">
            <label>Name:</label>
            <input type="text" name="username"></input>
            <button type="submit">Add</button> 
           </form>
           `
        )
    }else{
        if(req.url =="/message"){
            res.setHeader("Content-Type","text/html");

            let dataChunks = [];
            req.on("data",(chunks)=>{
                console.log(chunks);
                dataChunks.push(chunks);
            })

            req.on("end",()=>{
                let combinedBuffer = Buffer.concat(dataChunks);
                console.log(combinedBuffer.toString());
                let value = combinedBuffer.toString().split("=")[1];
                console.log(value);
                fs.writeFile("formValues.txt",value,(err)=>{
                   res.statusCode = 302
                   res.setHeader("location","/read")
                   res.end();   
                })
    
            })
        }
        else{
            if(req.url=="/read"){
                fs.readFile("formValues.txt",(err,data)=>{
                    console.log(data.toString());

                    res.end(
                        `
                        <h1>${data.toString()}</h1>
                        `
                    )
                })
            }
        }
    }
})

module.exports = requestHandler;