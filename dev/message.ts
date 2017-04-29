class Message {
         
    constructor(str:string) {
        let div:HTMLElement = document.createElement("message");
        document.body.appendChild(div);
        
        div.innerHTML = str;
    }
}