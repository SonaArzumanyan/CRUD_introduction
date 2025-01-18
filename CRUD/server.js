// OZU-um pahpanvox
const http = require("http");
const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "db.json"); //db.json@ ajn fayln e, vortex petq e stexcvi mer object@;
const server = http.createServer((req, res) => {
 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method === 'POST'){
        let body = "";
        req.on('data', (chunk) => { //rec.on -ov stexcvum e biteri hosq
             body +=  chunk.toString(); 
        }); //lcrecinq body-i mej
        req.on("end", () => {
            if (body.trim() === "") {
                res.writeHead(400, {'Content-Type':'application/json'});
                return res.end(JSON.stringify({message:"Empty request body"}));
            }
             
        try {
            let parsedBody = JSON.parse(body);
            console.log(parsedBody, "this is parsed body");

            let db = [parsedBody];
            fs.writeFile(dbPath, JSON.stringify(db), (writeError) => {
                if(writeError){
                res.writeHead(500, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({
                    message: "Saving data error"
                }));
            }
            res.writeHead(200, {'Content-Type':'application/json'})
            res.end(JSON.stringify({
                message: "Data successfully saved"
            }));
            });
        } catch (error) {
         console.error(error);
         res.writeHead(400, { 'Content-Type': 'application/json' });
         res.end(JSON.stringify({ message: "Invalid JSON format" }));
        }
});
    }else{
        res.writeHead(405, {'Content-Type':'application/json'});
        res.end(JSON.strinfify({message:"Method not allowed"}));
    }
});

server.listen(3001, () => {
    console.log("Server listen on port 3001");
});
// nodemon run@ pahum a live vijakum real time applicaion