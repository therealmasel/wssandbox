var ws;
window.onload = function () {
    var button = document.getElementById("shakeButton");
    button.textContent = "Shaker button";
    WebSocketTest();
    //button.innerText = "Shaker button";
    button.onclick = function() {
        var mField = document.getElementById("messageField");
        //ws.send(mField.value);
        //var d = mField.value;
        //alert(d);
        ws.send(mField.value);
    }
    /*var form = document.getElementById("shakeForm");
    shakeForm.onsubmit = function() {
        return alert("yeye");
    }*/

}
function WebSocketTest()
{
    if ("WebSocket" in window)
    {
        alert("WebSocket is s upported by your Browser!");
        ws = new WebSocket("ws://localhost:8081/");
        ws.onopen = function()
        {
            // Web Socket is connected, send data using send()
            ws.send("Message to send");
            //alert("Message is sent...");
        };
        ws.onmessage = function (evt)
        {
            var received_msg = evt.data;
            var mField = document.getElementById("messageField");
            mField.value = received_msg;
        };
        ws.onclose = function()
        {
            // websocket is closed.
            alert("Connection is closed...");
        };
    }
    else
    {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
}