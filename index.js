const fs = require("fs");
const chunking = require("./modules/chunking");
const translateText = require("./modules/LlmTranslate");
const formatHtml = require("./modules/formatHtml");

// Read the input file from ./output/output.html
const inputFilePath = "output/output.html";
const htmlInput = fs.readFileSync(inputFilePath, "utf8");

// Define an async function to chunk the HTML and translate each chunk
async function translateChunks(htmlInput) {
  try {
    const output = await chunking.chunkHTML(htmlInput);
    const outputFile = "output/book.html";
    // Clear the output file
    fs.writeFileSync(outputFile, "");

    for (let i = 0; i < output.length; i++) {
      const textToTranslate = output[i].pageContent;
      const translation = await translateText(textToTranslate);
      // Append the translation to the output file
      fs.appendFileSync(outputFile, translation);

      // Log the current index out of the total
      console.log(`Translated chunk ${i + 1}/${output.length}`);
    }

    // Read the translated HTML
    const translatedHtml = fs.readFileSync(outputFile, "utf8");
    // Format the translated HTML
    const formattedHtml = formatHtml(translatedHtml);
    // Overwrite the output file with the formatted HTML
    fs.writeFileSync(outputFile, formattedHtml);

    console.log("Translation completed and saved to " + outputFile);
  } catch (error) {
    console.error("Error translating HTML:", error);
  }
}

// Use the function
translateChunks(htmlInput);
