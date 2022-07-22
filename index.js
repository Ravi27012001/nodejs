 const http = require("http");

 const handler = function(req,res){
   res.write("hello web dvelopers") ;
   res.end();
}

const server = http.createServer(handler);
server.listen(9090,function(){
    console.log("server is running");
});