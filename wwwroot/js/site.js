// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function RandomPass() {
    var request = new XMLHttpRequest(); 
    request.onreadystatechange = function () { 
        if (request.readyState === 4) { 
           
            if (request.status === 200) {
                
                // xmlDoc = request.responseXML;
                // x = request.responseXML.documentElement.getElementsByTagName("count");
                // console.log(x);
                // // txt = "";
                // // x = xmlDoc.getElementsByTagName("count");
                let data = JSON.parse(request.response);
                let count = document.getElementById("count");
                count.innerText = data.count;
                document.getElementById("pass").innerHTML = data.passcode;
                console.log('response', request.response);
                console.log('count', data['count']);
                console.log('innertext', count.innerText);
            } else {
                
                return fail(request.status);
            }
        } else {
           
        }
    }
   
    // xmlhttp.onreadystatechange = function () {
    //     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //         document.getElementById("pass").innerHTML = @ViewBag.passcode;
    //     }
    // }
    request.open("GET", "/getpass", true);
    request.send();
}