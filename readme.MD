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


