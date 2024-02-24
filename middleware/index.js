const fs = require('fs');

const logReqRes = (filename)=>{
    return (req, resp, next)=> {
      fs.appendFile(
        filename,
        `\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
        (err, data)=>{
            next();
        }
      );
    };
}


module.exports ={logReqRes};