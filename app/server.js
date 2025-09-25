const http = require('http');
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    //handle routing to index.html as default
    if (req.url === "/") {
        req.url = "/index.html";
    }
    else if (req.url === "/about") {
        req.url = "/about.html";
    }
    else if (req.url === "/contact") {
        req.url = "/contact-me.html";
    }
    else{
        req.url = "/404.html";
    }
    //serve static files from public directory
    const fs = require("fs");
    const path = require("path");

    const filePath = path.join(__dirname+"/view", req.url);
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.writeHead(500);
            res.end("Error loading file");
        }
        res.end(data);
    }) 
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});