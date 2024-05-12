#Claude-Translator

## Description

A simple book translator that uses Claude-3 Opus LLM to translate books from English to Finnish.

## Installation
* npm install
* Create a .env file in the root directory and add the following variables:

```bash
ANTHROPIC_API_KEY=your_api_key
MODEL_OPUS=claude-3-opus-20240229
```

## Usage
* Add the book you want to translate as an epub file in the root directory with the name `input.epub`
* Run the following command:
```bash
node convert-epub-html.js
```
* The translated book will be saved as `output.html` in the output directory
* To translate the book, run the following command:
```bash
node index.js
```
* The translated book will be saved as `book.html` in the output directory


## Input and output examples

### Inptu text

```bash
Mrs. Dudley turned aside to let Eleanor come in, and spoke, apparently to the wall. 
"I set dinner on the dining-room sideboard at six sharp," she said. "You can serve 
yourselves. I clear up in the morning. I have breakfast ready for you at nine. 
That's the way I agreed to do. I can't keep the rooms up the way you'd like, but 
there's no one else you could get that would help me. I don't wait on people. 
What I agreed to, it doesn't mean I wait on people."

Eleanor nodded, standing uncertainly in the doorway.

"I don't stay after I set out dinner," Mrs. Dudley went on. "Not after it begins to get dark. 
I leave before dark comes."

"I know," Eleanor said.

"We live over in the town, six miles away."

"Yes," Eleanor said, remembering Hillsdale.

"So there won't be anyone around if you need help."

"I understand."

"We couldn't even hear you, in the night."

"I don't suppose-"

"No one could. No one lives any nearer than the town. No one else will come any nearer than that."

"I know," Eleanor said tiredly.

"In the night," Mrs. Dudley said, and smiled outright. "In the dark," she said, and closed the door behind her.
```

### Translation

```bash
Rouva Dudley siirtyi syrjään päästääkseen Eleanorin sisään ja puhui ilmeisesti seinälle. "Laitan 
illallisen tarjolle ruokasalin sivupöydälle tasan kuudelta", hän sanoi. "Voitte tarjoilla itse. 
Siivoan aamulla. Aamiainen on valmiina yhdeksältä. Näin olen sopinut tekeväni. En voi pitää 
huoneita sellaisessa kunnossa kuin haluaisitte, mutta ketään muuta ette saisi auttamaan minua. 
En passaa ihmisiä. Se, mitä olen sopinut, ei tarkoita, että passaan ihmisiä."

Eleanor nyökkäsi seisoen epävarmana oviaukossa.

"En jää sen jälkeen, kun olen laittanut illallisen esille", rouva Dudley jatkoi. "En sen jälkeen, 
kun alkaa tulla pimeää. Lähden ennen pimeän tuloa."

"Tiedän", Eleanor sanoi.

"Asumme tuolla kaupungissa, kuuden mailin päässä."

"Kyllä", Eleanor sanoi muistaen Hillsdalen.

"Joten ketään ei ole lähistöllä, jos tarvitsette apua."

"Ymmärrän."

"Emme edes kuulisi teitä, yöllä."

"En usko-"

"Ei kukaan voisi. Kukaan ei asu lähempänä kuin kaupungissa. Kukaan muu ei tule sen lähemmäksi."

"Tiedän", Eleanor sanoi uupuneesti.

"Yöllä", Mrs. Dudley sanoi ja hymyili avoimesti. "Pimeässä", hän sanoi ja sulki oven perässään.
```