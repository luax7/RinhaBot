import { Command } from '../ArkHandler';

export default {

    Aliases: ['l','remove'],

    async Callback(Message,Args,Handler) {
        if(!Args[0]) return;

        const {Members } = require('../features/Members')
        const uid = Message.member?.user.id
        const Dm = await Message.member?.user.createDM(true)!
        const rootmsg = await Dm.send(`Você quer tirar sua entrada como ${Members.get(Message.member!.id)}`)!

            await rootmsg.react('👍')
            await rootmsg.react('❌')

        const collector = rootmsg.createReactionCollector({
            filter: (rr,User) => {return User.id === uid },
        })


            collector.on('collect', (Reaction) => {
                if(Reaction.emoji.toString() === '👍' || '❌'){

                    switch (Reaction.emoji.toString()) {
                        case '👍':
                            Dm.send("Entendi 😭. Espero que encontre um campenato melhor")

                            Handler.client.emit("TMemberRemove", (Message.member?.id))
                            
                        break
                        case '❌':
                            Dm.send("Oh yeah, então te espero lá")
                            
                        break
                    }

                }
            })
        
    }

} as Command;