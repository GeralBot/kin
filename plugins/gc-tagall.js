let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐜𝐚𝐫𝐭𝐞𝐥𝐬𝐮𝐫𝟏𝟑𝟏: ${pesan}`
let teks = ` 𝐑𝐞𝐯𝐢𝐯𝐚𝐧 𝐩𝐥𝐚𝐧𝐭𝐚𝐬\n\n❏ ${oi}\n❏ 𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬: \n`
for (let mem of participants) {
teks += `😈☠️ @${mem.id.split('@')[0]}\n`}
teks += `➥𝐤𝐢𝐧𝐠 𝐁𝐨𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
