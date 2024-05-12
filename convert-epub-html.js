const EPUB = require('epub');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

const epubFilePath = 'input.epub'; // Update with the actual EPUB file path
const outputDirectory = 'output/'; // Set your desired output directory
const outputFile = 'output.html'; // Set your desired output file name

const epub = new EPUB(epubFilePath);

epub.on('end', () => {
    const chapterPromises = epub.flow.map((chapter) => {
        return new Promise((resolve, reject) => {
            epub.getChapter(chapter.id, (error, text) => {
                if (error) {
                    console.error('Error reading chapter:', error);
                    reject(error);
                    return;
                }

                // Initialize JSDOM with the chapter text
                const dom = new JSDOM(text);
                const document = dom.window.document;

                // Select and remove all span tags while keeping their inner text
                const spans = document.querySelectorAll('span');
                spans.forEach(span => {
                    // Replace the span element with its inner text
                    span.replaceWith(...span.childNodes);
                });

                // Select and remove all a tags while keeping their inner text
                const links = document.querySelectorAll('a');
                links.forEach(link => {
                    // Replace the a element with its inner text
                    link.replaceWith(...link.childNodes);
                });

                // Select all elements in the document
                const elements = document.querySelectorAll('*');

                // Remove all attributes from each element
                elements.forEach(element => {
                    while (element.attributes.length > 0) {
                        element.removeAttribute(element.attributes[0].name);
                    }
                });

                // Serialize the cleaned HTML
                const cleanHtml = document.body.innerHTML;

                console.log(`Processed chapter ${chapter.id}`);
                resolve(cleanHtml);
            });
        });
    });

    Promise.all(chapterPromises)
        .then((allChaptersHtml) => {
            // Ensure the output directory exists
            fs.mkdirSync(outputDirectory, { recursive: true });

            // Write the accumulated HTML to a single file
            const outputFilePath = path.join(outputDirectory, outputFile);
            fs.writeFileSync(outputFilePath, allChaptersHtml.join(''), 'utf8');

            console.log(`Saved all chapters to ${outputFilePath}`);
        })
        .catch((error) => {
            console.error('Error processing chapters:', error);
        });
});

epub.parse();