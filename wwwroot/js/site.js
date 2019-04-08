// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function RandomPass() {
    var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
        if (request.readyState === 4) { // 成功完成
            // 判断响应结果:
            if (request.status === 200) {
                // 成功，通过responseText拿到响应的文本:
                document.getElementById("pass").innerHTML =request.responseText;
            } else {
                // 失败，根据响应码判断失败原因:
                return fail(request.status);
            }
        } else {
            // HTTP请求还在继续...
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