

module.exports = {
    name: "addrole",
    description: "add a role to a user",
    usage: "<@user> <@role>",
    run: async(client, message, Discord, args) => {
        const UserTarget = message.mentions.members.first();
        const RoleTarget = message.mentions.roles.first();

        if(!message.member.permissions.has("MANAGE_ROLES")) return message.reply("Hey! you dont have the right perms")

        if(!UserTarget) return message.reply("Please mention someone to add a role to")

        if(!RoleTarget) return message.reply("Please mention a role to Add")

        UserTarget.roles.add(RoleTarget).then(message.channel.send("Done!"))
    }
}