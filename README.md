## Voorbereiding PRG04

In PRG04 gaan we werken met Typescript en github. Installeer alvast de benodigde tools en kijk of je "Hello World" kan maken.

### Typescript en Code Editor
- [Installeer Node en NPM](https://nodejs.org/en/)
- [Installeer Typescript](https://www.typescriptlang.org)
- [Download Visual Studio Code](https://code.visualstudio.com)

### Git en Github
- [Installeer git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Maak een github account](https://www.github.com)

Als je niet bekend bent met git kan je deze tutorial volgen:
- [Git tutorial](https://try.github.io/)

### Localhost instellen
Je test een project altijd via http://localhost/mijnproject, en niet via file://index.html. Localhost kan je instellen met:
- MAMP of XAMPP (als je dit al eerder had geïnstalleerd)
- [OS X native localhost](https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-macos-sierra/)
- [Python Simple HTTP Server](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
- [Browsersync](https://www.browsersync.io)

## Hello World

### Downloaden en editen
- Clone de Week 0 repository
`git clone https://github.com/HR-CMGT/PRG04-Week0.git`
- Open de DIST folder in een webbrowser via localhost: http://localhost/mijnprojecten/prg04-week0/dist/
- Open Visual Studio Code
- Ga naar **File > Open Folder**. Open de PRG04-Week0 folder die je net gecloned hebt. Zie screenshot!
- Wijzig het bestand 'message.ts' en druk op CMD+SHIFT+B
- Refresh de browser om te zien of je wijziging is doorgevoerd.

![img](http://i.imgur.com/5LEA1E1.png)

### Uitleg bestanden
- De DIST folder bevat de website : html, css en javascript. De javascript files worden automatisch gegenereerd.
- De DEV folder bevat de typescript files. Dit zijn de files waarin je gaat programmeren.
- tsconfig.json bevat instellingen voor het compileren naar javascript.
- tasks.json bevat het 'build' commando. Dit voer je uit met CMD+SHIFT+B

## Links
- [PRG04 op github](https://github.com/HR-CMGT)
