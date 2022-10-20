import discord, { Client } from "discord.js";
import Ark from './ArkHandler'

const client = new discord.Client({
    intents: [
        discord.IntentsBitField.Flags.MessageContent,
        discord.IntentsBitField.Flags.Guilds,
        discord.IntentsBitField.Flags.GuildMessages,
        discord.IntentsBitField.Flags.DirectMessageReactions,
        discord.IntentsBitField.Flags.DirectMessages
    ]
})
//
const ArkClient = new Ark(client,{
    Owner: "Luax7#42069",
    PREFIX: "rr",
    CommandsDirectory: __dirname + "/commands",
    FeaturesDirectory: __dirname + "/features",
    RegisterDefaults: false,
})

client.login(process.env.TOKEN)
