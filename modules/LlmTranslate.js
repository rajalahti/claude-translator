const { ChatAnthropic } = require('@langchain/anthropic');
const { translatingPrompt } = require('./promptTemplates');
const { ChatPromptTemplate } = require("@langchain/core/prompts");
require('dotenv').config();

async function translateText(englishText) {
    const model = new ChatAnthropic({
        temperature: 0.5,
        modelName: process.env.MODEL_OPUS,
        maxTokens: 4096,
        anthropicApiKey: process.env.ANTHROPIC_API_KEY,
    });

    const chatPrompt = ChatPromptTemplate.fromMessages([
        ["human", translatingPrompt.template],
    ]);

    const formattedChatPrompt = await chatPrompt.formatMessages({
        englishText: englishText,
    });

    const res = await model.invoke(formattedChatPrompt);

    try {
        return res.content
    } catch (error) {
        console.error('Error parsing JSON output:', error);
    }
}

module.exports = translateText;