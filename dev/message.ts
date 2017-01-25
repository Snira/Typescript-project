class Message {
    
    private div : HTMLElement;
        
    constructor() {
        this.div = document.createElement("message");
        document.body.appendChild(this.div);
        
        this.div.innerHTML = `<h4>Visual Studio Code startproject</h4>
                              <ul>
                                <li>DIST folder bevat de website : html, css en javascript</li>
                                <li>DEV folder bevat de typescript files</li>
                                <li>tsconfig.json bevat instellingen voor het compileren naar javascript</li>
                                <li>tasks.json bevat het 'build' commando. Dit voer je uit met CMD+SHIFT+B</li>
                              </ul>
                              <p>
                              <a href='https://github.com/HR-Programming/PRG04-Startproject'>Project op github</a><br>
                              <a href='https://code.visualstudio.com'>Download Visual Studio Code</a><br>
                              <a href='http://www.typescriptlang.org/docs/tutorial.html'>Installeer Typescript</a></p>`;
    }
}