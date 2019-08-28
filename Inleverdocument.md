Inleverdocument PRG01-8 2018-2019

OOP Fundamentals
Alle classes die GameObject extenden erven (inheritance) van die class alle onderdelen. Dit zijn onderdelen die je vrijwel altijd nodig
hebt in de class die GameObject extends. Composition is zichtbaar in de Behaviour interface, en ook in de View interface, om
polymorfisme toe te passen.
Encapsulation is toegepast bij alle onderdelen waar mogelijk. Properties en methods die alleen benodigd zijn in de bijbehorende class
zijn private. Eventueel is er een getter en setter toegepast als waardes in andere classes opgehaald of gezet moeten worden.

Singleton
Door de Game class een singleton te maken, los je het probleem van het eventueel meerdere malen instantieren van deze class op.
De Game class mag slechts eenmaal geinstantieerd worden. Ook biedt het singleton pattern de handigheid dat deze instantie
makkelijk bereikbaar is in andere classes, zodat belangrijke properties zoals gameOver of score makkelijk te manipuleren zijn.

Polymorfisme
Naast de Strategy en Observer pattern (die voor dit punt niet meetellen) wordt er gebruik gemaakt van een View interface.
Deze class is met verschillende views in te vullen die de View interface implementeren. Op deze manier heb je in deze classes
altijd de benodige elementen, en kan in de Game class een View type aangegeven worden, in tegenstelling tot lesvoorbeelden
waar voor de view property een any type wordt gebruikt.

Strategy
Beschrijf welk programmeerprobleem je oplost met de Strategy en waarom het patroon zich goed leent voor dit probleem.
Door de Strategy pattern toe te passen op de baheviour van GameObjects, kunnen bepaalde onderdelen makkelijk encapsulated worden.
Ook is op deze manier bij elk GameObject slechts 1 soort behaviour actief, zodat deze niet botsen met andere behaviours.

Observer
Observer pattern heb ik geprobeerd toe te passen op de Breakfast en Gandalf. Wanneer een Gandalf geinstantieerd word,
subscribed deze op de Breakfast. Wanneer er vervolgens een Breakfast uitgedeeld word, word bij deze Gandalf de notify()
functie aangeroepen waarna de benodigde functionaliteit plaatsvind.

Finished product
De game heeft een startscherm en een eindscherm met een scoreweergave.