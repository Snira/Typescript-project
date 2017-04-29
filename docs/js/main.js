var Message = (function () {
    function Message() {
        this.div = document.createElement("message");
        document.body.appendChild(this.div);
        this.div.innerHTML = "<h4>Visual Studio Code startproject</h4>\n                              <ul>\n                                <li>DIST folder bevat de website : html, css en javascript</li>\n                                <li>DEV folder bevat de typescript files</li>\n                                <li>tsconfig.json bevat instellingen voor het compileren naar javascript</li>\n                                <li>tasks.json bevat het 'build' commando. Dit voer je uit met CMD+SHIFT+B</li>\n                              </ul>\n                              <p>\n                              <a href='https://github.com/HR-Programming/PRG04-Startproject'>Project op github</a><br>\n                              <a href='https://code.visualstudio.com'>Download Visual Studio Code</a><br>\n                              <a href='http://www.typescriptlang.org/docs/tutorial.html'>Installeer Typescript</a></p>";
    }
    return Message;
}());
var Main = (function () {
    function Main() {
        var demomessage = new Message();
    }
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
//# sourceMappingURL=main.js.map