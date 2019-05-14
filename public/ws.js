const wsUri = "ws://localhost:8080/";
const status = document.getElementById("status");
const output = document.getElementById("output");

function init() {
    ws = new WebSocket(wsUri);
    ws.onopen = function (evt) { onOpen(evt) };
    ws.onclose = function (evt) { onClose(evt) };
    ws.onmessage = function (evt) { onMessage(evt) };
    ws.onerror = function (evt) { onError(evt) };
}

function onOpen(evt) {
    setStatus("Connected");
    document.getElementById("input").disabled = false;
    document.getElementById("btnSend").disabled = false;
}

function onClose(evt) {
    setStatus("Disconnected");
}

function onMessage(evt) {
    writeToScreen(evt.data);
    //ws.close();
}

function onError(evt) {
    writeToScreen(`<span style="color: red;">${evt.data}</span>`);
}

function doSend(message) {
    writeToScreen(`${message}`);
    ws.send(`${message}`);
}

function setStatus(message) {
    status.innerHTML = message;
}

function writeToScreen(message) {
    var pre = document.createElement("p");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = format(message);
    output.appendChild(pre);
    updateScroll();
}

window.addEventListener("load", init, false);

document.getElementById('btnSend').addEventListener('click', function () {
    if (!document.getElementById('input').value.trim()) {
        document.getElementById('input').value = "";
        return;
    }
    doSend(document.getElementById('input').value);
    document.getElementById('input').value = "";
});

document.getElementById('input').addEventListener('keydown', (function (e) {
    if (e.keyCode === 13) {
        if (!document.getElementById('input').value.trim()) {
            document.getElementById('input').value = "";
            return;
        }
        doSend(document.getElementById('input').value);
        document.getElementById('input').value = "";
    }
}));

function updateScroll() {
    var element = document.getElementById("output");
    element.scrollTop = element.scrollHeight;
}