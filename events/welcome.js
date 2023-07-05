const { Events } = require('discord.js');

// module.exports = {
//     name: Events.ClientReady,
//     once: true,
//     execute(client) {
//         client.channels.cache.get('844689322951311420').send('Hello!')
//     },
// };

module.exports = {
    name: Events.ClientReady,
    async execute(client) {
        await client.users.send('376743977572892682', 'drink water!!!')
        // await client.channels.cache.get('844689322951311420').send('@everyone drink water!!!')
            .then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
        // date and time stuff happens here?
        let sleep = async (ms) => await new Promise(r => setTimeout(r,ms));
        await sleep(15000)
        // what happens at that date and time?
        // await client.channels.cache.get('844689322951311420').send('@everyone drink more water!!!')
        await client.users.send('376743977572892682', 'drink more water!!!')
            .then(msg => {
                setTimeout(() => msg.delete(), 10000)
            })
    },
};