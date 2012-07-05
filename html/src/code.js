var ws;

function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}

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
        var arrbuff = [10, 20, 30, 40];

        var bytearray = new Uint8Array(arrbuff.length);
        for (var i=0;i<arrbuff.length ;i++) {
            bytearray[i] = arrbuff[i];
        }
        console.log(bytearray);
        ws.send(bytearray.buffer);
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
        alert("WebSocket is supported by your Browser!");
        ws = new WebSocket("ws://localhost:8081/");
        ws.binaryType = "arraybuffer";
        ws.onopen = function()
        {
            var arrbuff = [10, 20, 30, 40];

            var bytearray = new Uint8Array(arrbuff.length);
            for (var i=0;i<arrbuff.length ;i++) {
                bytearray[i] = arrbuff[i];
            }
            ws.send(bytearray.buffer);
            //alert("Message is sent...");
        };
        ws.onmessage = function (event)
        {

            if(event.data instanceof ArrayBuffer)
            {
                var mField = document.getElementById("messageField");
                var value;
                var bytearray = new Uint8Array(event.data);
                for (var i=0;i<4;i++) {
                    //bytearray[i] = event.data[i];
                    alert(bytearray[i]);
                }
                //mField.value = ab2str(bytearray);
                /* */
/*
                for (var i=0;i<event.data.length ;i++) {
                    bytearray[i] = event.data[i];
                    alert(event.data[i].toString());
                }
*/

                //alert(bytearray.toString());


            }

            /*var received_msg = evt.data;
            var mField = document.getElementById("messageField");*/

        };
        ws.onclose = function()
        {
            setTimeout(function(){start(websocketServerLocation)}, 5000);
        };
    }
    else
    {
        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
}