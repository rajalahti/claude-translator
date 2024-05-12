const { PromptTemplate } = require("@langchain/core/prompts");

// Take in the text to be translated and the language to translate to
const translatingPrompt = new PromptTemplate({
  inputVariables: ["englishText"],
  template: `Käännä seuraava teksti englannista suomeksi säilyttäen sen alkuperäinen merkitys ja sävy. 
  Muokkaa lauserakenteita tarpeen mukaan, jotta ne soveltuvat sujuvammin suomen kieleen. 
  Älä käännä henkilöiden ja paikkojen nimiä tai sellaisia sanontoja, joille ei ole sopivaa suomenkielistä vastinetta. 
  Palauta vain käännetty teksti! Sisällytä tekstiin html tagit.

  <käännettävä_teksti>
  {englishText}
  </käännettävä_teksti>`,
});


module.exports = {
  translatingPrompt,
};
