## Voorbereiding PRG04

In PRG04 gaan we werken met Typescript en github. Installeer alvast de benodigde tools en kijk of je "Hello World" kan maken.

### Herhaling Javascript Basics
Zorg dat je onderstaande javascript basics beheerst.
- Scope
- Loop
- Array
- Function
- Function arguments
- Function return value

[MDN Javascript basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

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
Je test een project altijd via http://localhost/.../project, en niet via file://project/. Localhost kan je aan zetten met:
- MAMP of XAMPP (als je dit al eerder had geïnstalleerd)
- [OS X native localhost](https://coolestguidesontheplanet.com/get-apache-mysql-php-and-phpmyadmin-working-on-macos-sierra/)
- [Windows native localhost](https://msdn.microsoft.com/en-us/library/ms181052(v=vs.80).aspx)

Als je geen localhost op je machine hebt draaien kan je een tijdelijke server voor je project starten met:
- [HTTP Server with Python](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/)
- [HTTP Server with Node](https://www.npmjs.com/package/http-server)
- [HTTP Server with automatic browser refresh](https://www.browsersync.io)

## Test typescript compiler
- Maak een nieuw javascript bestand met de naam `test.js`
- In het bestand zet je de code `console.log('hello world')`
- Open een terminal window in de map van het bestand.
- Compileer javascript naar typescript met `tsc test.js`

## Test Visual Studio Code

### 1 - Download het project
- Maak een nieuwe projectmap voor week 0. (bv. projecten/prg4/week0)
- Open een terminal (OS X) of CMD (Windows) venster en navigeer naar je projectmap.
- Clone de Week 0 repository
`git clone https://github.com/HR-CMGT/PRG04-Week0.git`
- Open de DIST folder in een webbrowser via localhost: http://localhost/projecten/prg4/week0/dist/

### 2 - Wijzig het typescript bestand
- Open Visual Studio Code
- Ga naar **File > Open Folder**. Open de week0 folder die je net gecloned hebt. Zie screenshot!
- Verwijder de .js file uit de DIST folder.
- Open 'message.ts' in de DEV folder, maak een wijziging, en druk op CMD+SHIFT+B
- Kijk of het .js bestand opnieuw wordt gegenereerd.
- Refresh de browser om te zien of je wijziging is doorgevoerd.

![img](http://i.imgur.com/5LEA1E1.png)

### Uitleg bestanden
- De DIST folder bevat de website : html, css en javascript. De javascript files worden automatisch gegenereerd.
- De DEV folder bevat de typescript files. Dit zijn de files waarin je gaat programmeren.
- tsconfig.json bevat instellingen voor het compileren naar javascript.
- tasks.json bevat het 'build' commando. Dit voer je uit met CMD+SHIFT+B

## Links
- [Typescript Documentation](https://www.typescriptlang.org)
- [New features in ES6](http://es6-features.org)
- [2D Collision detection](https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection)
- [Javascript Support](https://en.wikipedia.org/wiki/ECMAScript)
- [Browser support for Javascript, HTML and CSS](http://caniuse.com)
