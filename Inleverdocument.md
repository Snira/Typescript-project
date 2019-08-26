Inleverdocument PRG01-8 2018-2019

OOP Fundamentals
Beschrijf waar en waarom je code gebruik maakt van Inheritance, Composition en Encapsulation.

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
Beschrijf welk programmeerprobleem je oplost met de Observer en waarom het patroon zich goed leent voor dit probleem.
Op het moment dat bij object x iets gebeurd, moeten objecten x daar op anticiperen. Hier is het observer pattern zeer geschikt voor.
Door bij het instantieren van objecten x zich te subscriben op object x, kan er bij de notify van object x meteen
geanticipeerd worden door de classes die hier op subscribed zijn.

Finished product
De game heeft een startscherm en een eindscherm met een scoreweergave.

Finished product components
De game heeft een startscherm en een eindscherm met een scoreweergave.
Je score komt in een lijst met namen en scores. De lijst wordt bewaard als de browser is afgesloten. • De game bevat local of online multiplayer.
De game werkt op mobiele schermen met touch controls.
De game gebruikt alternatieve input zoals de camera, microfoon, gyroscoop, locatiebepaling.
De game heeft levels met een oplopende moeilijkheidsgraad.
Geluid en muziek is een integraal onderdeel van de game.
De game werkt met Canvas in plaats van DOM elementen.