import discord from 'discord.js'
import { Feature } from '../ArkHandler';

const Members : Map<string,string> = new Map;

export default {
    
    Callback(client,Handler){

        client.on('TMemberAdd', (Data : Array<string>) => {

            Members.set(Data[0],Data[1])
            console.log(Members)
        })
        client.on('TMemberRemove', (member : string) => {

            Members.delete(member)

        })
    }

} as Feature

export {Members}