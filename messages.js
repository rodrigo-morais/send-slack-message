require('dotenv').config()
const { WebClient } = require('@slack/web-api')
const slack         = new WebClient(process.env.SLACK_TOKEN)

const sendSlackMessage = async (message) => {
  console.log('SENDING.... ', message)
  return await slack.chat
    .postMessage({ channel: process.env.SLACK_CHANNEL_ID, text: message });
}

const send = async (message) => {
  try {
    const slackMessage = await sendSlackMessage(message)
    console.log(slackMessage)
  }
  catch (error) {
    throw error
  }
}

module.exports = { send }
