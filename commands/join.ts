import { Command } from '../ArkHandler';

export default {

    minArgs: 1,
    Aliases: ['j','jj'],

    async Callback(Message,Args,Handler) {
        if(!Args[0]) return;
        const uid = Message.member?.user.id
        const Dm = await Message.member?.user.createDM(true)!
        const rootmsg = await Dm.send(`Você quer se registrar com o riot id : **${Args[0]}**, está certo disso?`)!

            await rootmsg.react('👍')
            await rootmsg.react('❌')

        const collector = rootmsg.createReactionCollector({
            filter: (rr,User) => {return User.id === uid },
        })


            collector.on('collect', (Reaction) => {
                if(Reaction.emoji.toString() === '👍' || '❌'){

                    switch (Reaction.emoji.toString()) {
                        case '👍':
                            Dm.send("Obrigado pela confirmação, te desejo boa sorte. **Em caso de um nome fraudado ou incorreto, sua entrada será anulada**")

                            Handler.client.emit("TMemberAdd", ([Message.member?.id,Args[0]]))
                            
                        break
                        case '❌':
                            Dm.send("Sua sessão foi encerrada e a entrada anulada, se mudar de ideia, use novamente o comando")
                            
                        break
                    }

                }
            })
        
    }

} as Command;