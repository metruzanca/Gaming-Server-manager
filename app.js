const express = require('express')
const proc = require('child_process')
const WebSocket = require('ws')
const app = express()
const port = 80
const wsPort = 8080
const serverJar = 'spigot-1.14.1.jar'
const command = ["java", ['-Xms1G', '-Xmx3G', '-jar', serverJar, 'nogui'], {cwd:"D:/Metruzanca/Desktop/Minecraft-Servers/1.14.1"}]

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.listen(port, () => {
    console.log(`Express app listening on port ${port}!`)
});

app.use(express.static('public'));


const wss = new WebSocket.Server({ port: wsPort });
console.log(`WebSocket app listening on port ${wsPort}!`);

let serverOnline = false;
let child;

wss.on('connection', function connection(ws) {
    ws.send('Connected.');
    if (!serverOnline) {
        ws.send('Loading...');
        serverOnline = true;
        child = proc.spawn(...command);
    }
    ws.on('message', function incoming(message) {
        if (serverOnline) {
            console.log(`Command: ${message}`);
            child.stdin.write(`${message}\r`);
        } else{
            ws.send(`Server Offline.`)
        }
    });

    child.stdout.on('data', (data) => {
        ws.send(data.toString());
    })
    child.on('exit', function () {
        ws.send(`Server shutdown complete.`);
        console.log('Server Shutdown');
        serverOnline = false;
    });
});