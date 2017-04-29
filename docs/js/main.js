var Message = (function () {
    function Message(str) {
        var div = document.createElement("message");
        document.body.appendChild(div);
        div.innerHTML = str;
    }
    return Message;
}());
var Main = (function () {
    function Main() {
        var mOne = new Message("Hello");
        var mTwo = new Message("World");
    }
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
//# sourceMappingURL=main.js.map