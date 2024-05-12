// Import the required module
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");

// Define a function to chunk the HTML
async function chunkHTML(htmlInput) {
  // Create a new instance of RecursiveCharacterTextSplitter
  const splitter = RecursiveCharacterTextSplitter.fromLanguage("html", {
    chunkSize: 3000,
    chunkOverlap: 0,
  });

  // Use the splitter to create documents
  try {
    const documents = await splitter.createDocuments([htmlInput]);
    return documents;
  } catch (error) {
    console.error('Error chunking HTML:', error);
  }
}

module.exports = {
  chunkHTML,
};