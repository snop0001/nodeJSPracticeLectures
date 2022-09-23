function myLogger(req,res,next){
    // console.log('My Logger is working!');
    if (req.query) {
      console.log(`I found these params: ${Object.keys(req.query)}`);
    }
    next();
  }

function sayMyName(req,res,next){
    console.log('myname!');
    res.json('myName');
    next();
 }

 export {myLogger, sayMyName};