function formatHtml(htmlInput) {
    const head = `
    <head>
        <style>
            h1 {
                font-family: Arial, sans-serif;
                font-size: 2em;
                color: #333;
                text-align: center;
                margin-bottom: 0.5em;
            }

            h2 {
                font-family: Arial, sans-serif;
                font-size: 1.5em;
                color: #666;
                text-align: left;
                margin-bottom: 0.5em;
            }

            p {
                font-family: Arial, sans-serif;
                font-size: 1em;
                color: #000000;
                text-align: justify;
                line-height: 1.5em;
                margin-bottom: 1em;
            }
        </style>
    </head>
    `;

    const body = `
    <body>
        ${htmlInput}
    </body>
    `;

    const html = `
    <!DOCTYPE html>
    <html>
        ${head}
        ${body}
    </html>
    `;

    return html;
}

module.exports = formatHtml;