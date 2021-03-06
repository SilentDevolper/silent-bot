require('./ajustes')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')

let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = silent = async (silent, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[#]/gi.test(body) ? body.match(/^[#]/gi)[0] : "#" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Sin nombre"
        const botNumber = await silent.decodeJid(silent.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const from = m.chat
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
	
        const groupMetadata = m.isGroup ? await silent.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = db.data.settings[botNumber]
        if (typeof setting !== 'object') db.data.settings[botNumber] = {}
	    if (setting) {
	    if (!('anticall' in setting)) setting.anticall = true
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
	    } else global.db.data.settings[botNumber] = {
	    anticall: true,
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateLocation: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	   
        if (!silent.public) {
            if (!m.key.fromMe) return
        }

        if (m.message) {
            silent.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "America/Buenos_Aires"
        })
       
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await silent.setStatus(`${silent.user.name} | Tiempo activo : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`??? ANTI LINK ???\n\n Se te ha detectado enviando un enlace de grupo, lo sentimos, ser??s expulsado !`)
        if (!isBotAdmins) return reply(`Eh bot no es administrador T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await silent.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Ehh, lo siento, no lo hice, porque enviaste el enlace a este grupo.`)
        if (isAdmins) return reply(`Ehh lo siento eres administrador`)
        if (isCreator) return reply(`Ehh lo siento eres el due??o del bot `)
        silent.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid,
"thumbnail": img, 
"itemCount": itcount, 
"status": "INQUIRY", 
"surface": "CATALOG", 
"orderTitle": title, 
"message": text,
"sellerJid": sellers,
"token": tokens, 
"totalAmount1000": ammount, 
"totalCurrencyCode": "IDR", 
}
}), { userJid: jid })
silent.relayMessage(jid, order.message, { messageId: order.key.id})
}

const textImg = (teks) => {
silent.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fake}) 
}

const fvcard = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `916909137213 -1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click para ir al chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fake
},
"title": `${global.firma}`, 
"description": `${global.firma2}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.firma3}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
            const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "916909137213-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${global.firma}`,
                 "h": `${global.firma2}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${global.firma2}`,
                 'jpegThumbnail': global.vidmenu
                        }
                       }
	                  } 
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 0,
status: 1,
surface : 1,
message: `${global.firma2}`, 
orderTitle: `${global.firma}\n${global.firma2}`,
thumbnail: global.fake,
sellerJid: '0@s.whatsapp.net'

}
}
}
var sello = { key: {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "5493865221136@g.us" }, "message": {orderMessage: {itemCount: 999999,status: 4, fake ,message: `Nombre: ${pushname}\nComando: ${prefix + command}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}
const floc = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.firma2}`,
jpegThumbnail: global.fake
}
}
}
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${global.firma2}`, 
jpegThumbnail: global.fake
}
}
}
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${global.firma}`,
"h": `${global.firma2}`,
'seconds': '30', 
'caption': `${global.firma3}`,
'jpegThumbnail': fake
}
}
}
const fgplink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "916909137213-1616169743@g.us",
"inviteCode": `${global.firma}`,
"groupName": `${global.firma2}`, 
"caption":`${global.firma3}`, 
'jpegThumbnail': fake
}
}
}
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${global.firma}`,
 "h": `${global.firma2}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.firma3}`,
 'jpegThumbnail': fake
}
}
} 
const ftexto = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.firma}`,
"title": `${global.firma2}`,
 'jpegThumbnail': fake
}
} 
}
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}

const reply = (teks) => {
sendOrder(m.chat, teks, "5123658817728409", global.fake, `Texto 1`, `Texto 2`, "0@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}

const reply2 = (teks) => {
silent.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.firma}`,"body": `${global.firma2}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": global.fake,"sourceUrl": `wa.me/5493865221136`}}}, { quoted: sello})
}

        
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: silent.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, silent.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        silent.ev.emit('messages.upsert', msg)
        }
	    
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const listmn = `
${readmore}
????????????????????????????????????????????????
???          *???????????????? ????????????????????????????????????*
???????????????????????????????????????-??????????????????????????
???
??????????????????? ${pushname}
???????????????????????????????????????@ ???????? ????????????????
???
??????????????????????????? ???????????????????????? ???????????????? ????????
??????????????? ???????????????????????????? ???????? ????????????????????
???
??????????? ???????????? ???????????????????? ???????????????????? ???? ????????????
??????????????? ???????? ????????????????????????????:
??? ${prefix}bug *error*
?????????????????????????????????????????????
???             *????????????????????????-???????????????????????????????????*
??????????????????????????????????????????????
`


        switch(command) {
            case 'entrar': {
                if (!isCreator) throw enviar.owner
                if (!text) throw 'Ingresa el link despu??s de escribir el comando!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalido!'
                reply(enviar.espere)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await silent.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'salirbot': {
                if (!isCreator) throw enviar.owner
                await silent.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw enviar.owner
               if (!text) throw `Ejemplo : ${prefix + command} texto`
          global.author = `${text}`
          reply(`El exif de cambio!!\n\n> Autor : ${global.author}`)
            }
            break
	case 'sacar': {
		if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await silent.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'agg': {
		if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await silent.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'daradm': {
		if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await silent.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'sacaradm': {
		if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await silent.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw enviar.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await silent.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw enviar.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await silent.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'nombregrupo': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
                if (!text) throw 'Ingresa el nombre del grupo luego del comando'
                await silent.groupUpdateSubject(m.chat, text).then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'aggdesc': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
                if (!text) throw 'Ingresa la nueva descripci??n del grupo luego del comando'
                await silent.groupUpdateDescription(m.chat, text).then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setppbot': case 'fotobot': {
                if (!isCreator) throw enviar.owner
                if (!quoted) throw `Envia/Responde a una imagen con el comando ${prefix + command}`
                if (!/image/.test(mime)) throw `Envia/Responde a una imagen con el comando ${prefix + command}`
                if (/webp/.test(mime)) throw `Envia/Responde a una imagen con el comando ${prefix + command}`
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                await silent.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(enviar.listo)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'fotogrupo': {
                if (!m.isGroup) throw enviar.grupo
                if (!isAdmins) throw enviar.noadmin
                if (!quoted) throw `Envia/Responde a una imagen con el comando ${prefix + command}`
                if (!/image/.test(mime)) throw `Envia/Responde a una imagen con el comando ${prefix + command}`
                if (/webp/.test(mime)) throw `Envia/Responde a una imagen con el comando ${prefix + command}`
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                await silent.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(enviar.listo)
                }
                break
            case 'tagall': case 'marcar': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
let teks = `
???????????? *????????????????????????????????????????* ????????????
 
 ??? *???????????????????????????? : ${q ? q : '???????????? ????????????????????????????'}*\n\n`
                for (let mem of participants) {
                teks += `??? @${mem.id.split('@')[0]}\n`
                }
                silent.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: sello })
                }
                break
                case 'aviso': case 'tag': case 'hidetag': {
            if (!m.isGroup) throw enviar.grupo
            if (!isBotAdmins) throw enviar.botnoadmin
            if (!isAdmins) throw enviar.noadmin
            silent.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: sello })
            }
            break
               case 'totag': {
               if (!m.isGroup) throw enviar.grupo
               if (!isBotAdmins) throw enviar.botnoadmin
               if (!isAdmins) throw enviar.noadmin
               if (!m.quoted) throw `Responde a un mensaje luego del comando ${prefix + command}\n\nPuede ser cualquier medio o mensaje`
               silent.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
	    case 'typeletters': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(enviar.endLimit)
		db.data.users[m.sender].limit -= 1 
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Ingresa un texto luego del comando!'
                let anu = await styletext(text)
                let teks = `Tipo de letras para ${text}\n\n`
                for (let i of anu) {
                    teks += `??? *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'group': case 'grupo': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
                if (args[0] === 'cerrar'){
                    await silent.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Se cerro el grupo con exito ??????`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'abrir'){
                    await silent.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Se abri?? el grupo con exito ??????`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'grupo abrir', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'grupo cerrar', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await silent.sendButtonText(m.chat, buttons, `Abrir o cerrar el grupo?`, silent.user.name, sello)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
             if (args[0] === 'abrir'){
                await silent.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Se abrio la edicion del grupo ??????`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'cerrar'){
                await silent.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Se bloqueo la edicion del grupo`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo abrir', buttonText: { displayText: 'Abrir' }, type: 1 },
                        { buttonId: 'editinfo cerrar', buttonText: { displayText: 'Cerrar' }, type: 1 }
                    ]
                    await silent.sendButtonText(m.chat, buttons, `*Modo de edicion del grupo*\n\n`, `???????????? ????????????????.\n${readmore}Si la edicion esta abierta todos los miembros pueden editar la informacion del grupo, si esta cerrada, solo los admin pueden editar la informacion del grupo`, sello)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Se activo el antilink en el grupo ??????`)
                db.data.chats[m.chat].antilink = true
                reply(`El antilink ya estaba actio!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Se desactivo el antilink en el grupo`)
                db.data.chats[m.chat].antilink = false
                reply(`El antilink ya estaba desactivado!`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await silent.sendButtonText(m.chat, buttons, `Activar o desactivar el antilink?`, `???????????? ????????????????.\n${readmore}Si el antilink esta activo cualquier miembro que envie un link sera eliminado con exepcion a los admins`, fgi)
                }
             }
             break
            case 'linkgroup': case 'linkgrupo': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                let response = await silent.groupInviteCode(m.chat)
                silent.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink del grupo : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': case 'msjtemporales': {
                if (!m.isGroup) throw enviar.grupo
                if (!isBotAdmins) throw enviar.botnoadmin
                if (!isAdmins) throw enviar.noadmin
                if (args[0] === '1') {
                    await silent.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === '7') {
                    await silent.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === '90') {
                    await silent.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await silent.groupToggleEphemeral(m.chat, 0).then((res) => reply(enviar.listo)).catch((err) => reply(jsonformat(err)))
                } else {
                let sections = [
                {
                title: "???????????????????????????????? ????????????????????????????????????????",
                rows: [
                {title: "???????????????????????? ???????????? 1 ????????????", rowId: `ephemeral 1`, description: `???????????????????????? ???????????? ???????????????????????????????? ???????????????????????????????????????? ???????????? 1 ????????????????`},
                {title: "???????????????????????? ???????????? 7 ????????????????", rowId: `ephemeral 7`, description: `???????????????????????? ???????????? ???????????????????????????????? ???????????????????????????????????????? ???????????? 7 ????????????????`},
                {title: "???????????????????????? ???????????? 90 ????????????????", rowId: `ephemeral 90`, description: `???????????????????????? ???????????? ???????????????????????????????? ???????????????????????????????????????? ???????????? 90 ????????????????`},
                {title: "????????????????????????????????????????", rowId: `ephemeral off`, description: `???????????????????????????????????????? ???????????? ???????????????????????????????? ????????????????????????????????????????`}
                ]
                },
                ]
                silent.sendListMsg(m.chat, `Por favor elija una opcion de mensajes temporales`, `???????????? ????????????????.\n${readmore}Los mensajes temporales sirven para borrar los mensajes con un tiempo especifico${readmore}, por ejemplo si estan activo por 1 dia y los mensajes que se envien despues de la activacion se eliminaran despues de 1 dia`, `???????????????? ???????????????????? ???????? ${groupMetadata.subject}`, `???????????????????? ????????????????`, sections, sello)
                }
            }
            break
            case 'antillamadas': {
            if (!isCreator) throw enviar.owner
                let ciko = db.data.settings[botNumber].anticall
                if (args[0] === "on") {
                if (ciko) return reply(`Se activo las antillamadas ??????`)
                ciko = true
                reply(`Las antillamadas estaban activas!`)
                } else if (args[0] === "off") {
                if (!ciko) return reply(`Se desactivo las antillamadas ??????`)
                ciko = false
                reply(`Las antillamadas estaban apagadas!`)
                } else {
                 let buttons = [
                        { buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await silent.sendButtonText(m.chat, buttons, `Modo antillamadas`, silent.user.name, sello)
                }
             }
             break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'El mensaje no fue abierto por un bot!'
                silent.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgrupo': {
                if (!isCreator) throw enviar.owner
                if (!text) throw `Y el texto?\n\nEjemplo : ${prefix + command} Hola mundo`
                let getGroups = await silent.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Enviando divulgacion a ${anu.length} Grupos, Tiempo estimado ${anu.length * 1.5} segundos`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Soporte Del Bot',
                                    url: 'https://wa.me/5493865221163'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Github Owner',
                                    url: 'https://github.com/KenisawaDev/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Propietario',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `??? ???????????????????????????????????????????? ???\n\n${text}`
                      silent.send5ButImg(i, txt, "????????????????????????-???????????????????????????????????", global.thumb, btn)
                    }
                reply(`Se envio la divulgacion a ${anu.length} Grupos ??????`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw enviar.owner
                if (!text) throw `Y el texto?\n\nEjemplo : ${prefix + command} Hola mundo`
                let anu = await store.chats.all().map(v => v.id)
                reply(`Enviando divulgacion a ${anu.length} Chats, Tiempo estimado ${anu.length * 1.5} segundos`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'Soporte Del Bot',
                                    url: 'https://wa.me/5493865221163'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Github Owner',
                                    url: 'https://github.com/KenisawaDev/'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: 'menu'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Propietario',
                                    id: 'owner'
                                }  
                            }]
                      let txt = `??? ???????????????????????????????????????????? ???\n\n${text}`
                      silent.send5ButImg(yoi, txt, "????????????????????????-???????????????????????????????????", global.thumb, btn)
		}
		reply(enviar.listo)
            }
            break
            case 'infochat': {
                if (!m.quoted) reply('Responde a un mensaje del bot')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Responde a un mensaje del bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `??? @${i.userJid.split('@')[0]}\n`
                    teks += ` ????????? *???????????????? :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ??? *???????????????????????? :* ${read ? 'Leido' : 'No leido'}\n\n`
                }
                silent.sendTextWithMentions(m.chat, teks, sello)
            }
            break
            case 'quoted': {
		if (!m.quoted) return reply('Responde a un mensaje/imagen/video!!')
		let wokwol = await silent.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Responde a un mensaje/imagen/video!!')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpv': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `??? *???????????????????? ???????? ????????????????????* ???\n\n???????????????????? ???????? ???????????????????? : ${anu.length}\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `??? *???????????????????????? :* ${nama}\n??? *???????????????????????????? :* @${i.split('@')[0]}\n??? *???????????????? :* https://wa.me/${i.split('@')[0]}\n\n??????????????????????????????????????????\n\n`
                 }
                 silent.sendTextWithMentions(m.chat, teks, sello)
             }
             break
                case 'listgp': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `??? *???????????????????? ???????? ????????????????????????* ???\n\n???????????????????? ???????? ???????????????????????? : ${anu.length}\n\n`
                 for (let i of anu) {
                     let metadata = await silent.groupMetadata(i)
                     teks += `??? *???????????????????????? :* ${metadata.subject}\n??? *???????????????????????????? :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Ya no esta'}\n??? *???????? :* ${metadata.id}\n??? *???????????????????? ???????? ???????????????????????????????? :* ${moment(metadata.creation * 1000).tz('America/Buenos_Aires').format('DD/MM/YYYY HH:mm:ss')}\n??? *???????????????????????????????? :* ${metadata.participants.length}\n\n??????????????????????????????????????????????????????\n\n`
                 }
                 silent.sendTextWithMentions(m.chat, teks, sello)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    silent.sendText(m.chat, '???????????????????? ???????? ???????????????????????????????? ???????? ????????????????????:\n\n' + online.map(v => '??? @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `( ??? ) Envie o responda a un video/imagen con el comando ${prefix + command}\nDuracion maxima del video es de 10 segundos`
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                            reply(enviar.espere)
                let encmedia = await silent.sendImageAsSticker(m.chat, media, sello, { packname: ``, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Lo maximo de los videos es de 10 segudos')
                let media = await quoted.download()
                            reply(enviar.espere)
                let encmedia = await silent.sendVideoAsSticker(m.chat, media, sello, { packname: ``, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `( ??? ) Envie o responda a un video/imagen con el comando ${prefix + command}\nDuracion maxima del video es de 10 segundos`
                }
            }
            break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'robar': {
                if (!quoted) throw `Responde a un sticker con el comando ${prefix + command} texto1|texto2`
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Responde a un sticker con el comando ${prefix + command} texto1|texto2`
                if (!teks2) throw `Responde a un sticker con el comando ${prefix + command} texto1|texto2`
            	reply(enviar.espere)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await silent.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Lo maximo de los videos es de 10 segudos')
                    let media = await quoted.download()
                    let encmedia = await silent.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Responde a un sticker con el comando ${prefix + command} texto1|texto2`
                }
            }
            break
            case 'ebinary': {
            if (!text) throw `Ejemplo : ${prefix + command} texto`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Ejemplo : ${prefix + command} texto`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            reply(db)
        }
        break
            case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Ejemplo : ${prefix + command} ????+????`
		if (!emoji2) throw `Ejemplo : ${prefix + command} ????+????`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await silent.sendImageAsSticker(m.chat, res.url, m, { packname: `by ${pushname}`, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Ejemplo : ${prefix + command} ????`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await silent.sendImageAsSticker(m.chat, res.url, m, { packname: `by ${pushname}`, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Ejemplo : ${prefix + command} texto`
           await silent.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'silent', 'morou', m, {asSticker: true})

         }
         break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Responde a un sticker con el comando ${prefix + command} texto1|texto2`
	        if (!/image/.test(mime)) throw reply(respond)
            if (!text) throw respond
	        reply(enviar.espere)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await silent.sendImageAsSticker(m.chat, smeme, m, { packname: `by ${pushname}`, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Responde a un sticker con este comando'
                if (!/webp/.test(mime)) throw `Responde a un sticker con el comando *${prefix + command}*`
                reply(enviar.espere)
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    silent.sendMessage(m.chat, { image: buffer }, { quoted: sello })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Responde a un sticker con este comando'
                if (!/webp/.test(mime)) throw `Responde a un sticker con el comando *${prefix + command}*`
                reply(enviar.espere)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await silent.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: sello })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envia/Responde a un video o nota de voz con el comando ${prefix + command}`
            if (!quoted) throw `Envia/Responde a un video o nota de voz con el comando ${prefix + command}`
            reply(enviar.espere)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            silent.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : sello })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Envia/Responde a un video o nota de voz con el comando ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Envia/Responde a un video o nota de voz con el comando ${prefix + command}`
            if (!quoted) throw `Envia/Responde a un video o nota de voz con el comando ${prefix + command}`
            reply(enviar.espere)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            silent.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${silent.user.name}.mp3`}, { quoted : sello })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Responde a un video/audio para convertir en nota de voz, con el comando ${prefix + command}`
            if (!quoted) throw `Responde a un video/audio para convertir en nota de voz, con el comando ${prefix + command}`
            reply(enviar.espere)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            silent.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:sello})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Responder a un sticker animado con este comando'
                if (!/webp/.test(mime)) throw `Responder a un sticker con el comando *${prefix + command}*`
                reply(enviar.espere)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await silent.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: enviar.listo }, gifPlayback: true }, { quoted: fgif })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(enviar.espere)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(anu)
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(anu)
                }
                await fs.unlinkSync(media)
            }
            break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = '???????????????????????????????? ???????? ????????????????????????????\n\n ???????????????????????????????????????? ???????????????????? '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `??? N?????????????? : ${no++}\n??? T???????? : ${i.type}\n??? V??????????? ID : ${i.videoId}\n??? T????????????? : ${i.title}\n??? V??s??????s : ${i.views}\n??? D?????????????????? : ${i.timestamp}\n??? S??? S?????????? H????????? : ${i.ago}\n??? C?????????? : ${i.author.name}\n??? L??????? V??????????? : ${i.url}\n\n?????????????????????????????????\n\n`
                }
                silent.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: sello })
            }
            break
        case 'google': {
                if (!text) throw `Ejemplo : ${prefix + command} Anime`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `???????????????????????????????? ???????? ???????????????????????? ???????? : ${text}\n\n`
                for (let g of res) {
                teks += `??? *????????????????????????* : ${g.title}\n`
                teks += `??? *????????????????????????????????????????????* : ${g.snippet}\n`
                teks += `??? *????????????????* : ${g.link}\n\n??????????????????????????????????????????????????????\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Ejemplo : ${prefix + command} *dark icons*`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*???????????? GIMAGE ????????????*
??? *Consulta* : ${text}
??? *Link Imagen* : ${images}`,
                    footer: silent.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Ejemplo : ${prefix + command} *edit anime*`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
          ??? *${anu.title}* ???
                    
???-                       ???

???           ??????           ???

00:07 ???????????????????????? ${anu.timestamp}

???????????? ????????????????????????????????????????????.
`,
                    footer:`${readmore}
??? ????????????????: ????????????????????????????????
??? ????????: ${anu.videoId}
??? ????????????????????????????????: ${anu.timestamp}
??? ????????????????????????: ${anu.views}
??? ???????? ???????????????????? ????????????????: ${anu.ago}
??? ????????????????????: ${anu.author.name}
??? ???????????????? ???????????? ????????????????????: 
${anu.author.url}
??? ????????????????????????????????????????????: 
${anu.description}
??? ???????????????? ????????????????????:
${anu.url}
`,
                    buttons: buttons,
                    headerType: 4
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Uso : ${prefix + command} *Link video* *calidad*\nEjemplo: https://youtube.com/watch?v=qjnf75_T0pw 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                reply(`???????????????????????????????????????????? *${media.title}*...`)
                if (media.filesize >= 100000) return reply('???????????????????????????? ???????????? ????????????????????????, ???????? ???????????????? ???????? ???????????????? ???????? ???????????????????????????????? '+util.format(media))
                silent.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: sello })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Uso : ${prefix + command} *Link video* *calidad*\nEjemplo: https://youtube.com/watch?v=qjnf75_T0pw 360p`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                reply(`???????????????????????????????????????????? *${media.title}*...`)
                if (media.filesize >= 100000) return reply('???????? ???????????????????????????? ???????? ???????????? ????????????????????????, ???????? ???????????????? ???????? ???????????????? ???????? ???????????????????????????????? '+util.format(media))
                silent.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `??????` }, { quoted: sello })
            }
            break
            case 'pinterest': {
                reply(enviar.espere)
		let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
cpinterest = `
???????????????????????????????????????? ????????????????????: ${text}

????????????????????????????????????????????.
`
const templateButtons = [
{ urlButton: { displayText: `Link imagen`, url : result } },
{ quickReplyButton: { displayText: `Siguiente imagen`, id: `pinterest ${text}`} }
]
const templateMessage = {
imagen: { url: result },
caption: cpinterest,
footer: `${readmore}Algunas veces las imagenes no van a coincidir con su consulta por los anuncios de pinterest`,
templateButtons: templateButtons
}
silent.sendMessage(m.chat, templateMessage)
}
break
case 'loli': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': {
reply(enviar.espere)
let buttonsanime = [
{buttonId: `${command}`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
]
let buttonMessageanime = {
image: { url: `https://api-kenisawadev.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY` },
caption: `
??? Random *${command}*`,
footer: `Toca el boton para otra imagen\nO usa el comando ${prefix + command}`,
buttons: buttonsanime,
headerType: 4
}
silent.sendMessage(m.chat, buttonMessageanime, { quoted: sello })
}
break
case 'couple': case 'ppcp': case 'ftcmp': {
reply(enviar.espere)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let buttonsppcp = [
{buttonId: `${command}`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
]
let buttonMessageppcp = {
image: { url: random.female },
caption: `
Foto femenina`,
footer: `Toca el boton para otra imagen\nO usa el comando ${prefix + command}`,
buttons: buttons,
headerType: 4
}
silent.sendMessage(m.chat, buttonMessageppcp, { quoted: sello })
let buttonsftcmp = [
{buttonId: `${command}`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
]
let buttonMessage = {
image: { url: random.male },
caption: `
Foto masculina`,
footer: `Toca el boton para otra imagen\nO usa el comando ${prefix + command}`,
buttons: buttons,
headerType: 4
}
silent.sendMessage(m.chat, buttonMessageftcmp, { quoted: sello })
}
break
            case 'coffe': case 'cafe': {
            let buttons = [
                    {buttonId: `cafe`, buttonText: {displayText: 'Siguiente imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `???  Cafe aleatorio`,
                    footer: silent.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Introduce la consulta despues de poner el comando'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `??? Titulo : ${result.title}\n??? Categoria : ${result.type}\n??? Detalles : ${result.source}\n??? Link : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: silent.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Introduce la consulta despues de poner el comando'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Siguiente Imagen'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `??? Titulo : ${result.title}\n??? Resuktado : ${result.source}\n??? Link : ${result.image}`,
                    footer: silent.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Ejemplo : ${prefix + command} texto`
                reply(enviar.espere)
                silent.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: sello})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'Pon el texto luego de poner el comando'
                reply(enviar.espere)
                silent.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: sello })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'Pon el texto luego de poner el comando'
                reply(enviar.espere)
                silent.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: sello })
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '???Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Descarga de ${text}`,
                    footer: 'Presiona el boton para otra opcion!',
                    buttons: buttons,
                    headerType: 5
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.watermark },
                    caption: `Descarga de ${text}`,
                    footer: 'Presiona el boton para otra opcion!',
                    buttons: buttons,
                    headerType: 5
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/downloader/musically', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'Sin marca de agua'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'Con marca de agua'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Descarga de ${text}`,
                    footer: 'Presiona el boton para otra opcion!',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
                silent.sendMessage(m.chat, { audio: { url: anu.result.audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                    for (let media of anu.data) silent.sendFileUrl(m.chat, media, `Descarga de instagram de ${isUrl(text)[0]}`, sello)
                } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    silent.sendFileUrl(m.chat, anu.media[0].url, `Descarga de instagram de ${isUrl(text)[0]}`, sello)
                }
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Presiona el boton para otra opcion!!',
                    buttons: buttons,
                    headerType: 5
                }
                silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Preciona un boton para otra opcion!!',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await silent.sendMessage(m.chat, buttonMessage, { quoted: sello })
                silent.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                silent.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `??? Titulo : ${anu.result.title}`}, { quoted: sello })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Introduce el link luego de poner el comando!'
                reply(enviar.espere)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                silent.sendMessage(m.chat, { video: { url: anu.result }, caption: `Descargado de ${text}` }, { quoted: sello })
            }
            break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(enviar.espere)
                let media = await silent.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                silent.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : sello })
                fs.unlinkSync(ran)
                })
                } else reply(`Responde a un audio con el comando *${prefix + command}* para hacer el efecto`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Responde a un sticker con este comando + el comando que quieres definir!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Y el comando?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(enviar.listo)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Error hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'Tu no tienes permiso para eliminar este comando de sticker'      
                delete global.db.data.sticker[hash]
                reply(enviar.listo)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista de Cmd en sticket*
Info: *bold* fue bloqueado
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                silent.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw enviar.owner
                if (!m.quoted) throw 'Marca al sticker programado para bloquearlo'
                if (!m.quoted.fileSha256) throw 'SHA256 No fue encontrado'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Los comandos con sticker no funcionan en la databases'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply(enviar.listo)
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw `Example : ${prefix + command} *nombre del mensaje*, pero primero marca el mensaje que desea guardar`
                if (!text) throw `Example : ${prefix + command} *nombre del mensaje*, pero primero marca el mensaje que desea guardar`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' :v`
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Fue agregado a la lista de mensajes '${text}'
    
Para obtener ele mensaje ${prefix}getmsg ${text}

Para ver la lista de mensajes ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Ejemplo : ${prefix + command} nombre del mensaje\n\nPara ver la lista de mensajes usa ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' no esta registrado en la lista de mensajes`
                silent.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '??? ???????????????????????????????????? ???\n\n'
		for (let i of seplit) {
		    teks += `??? *Nombre :* ${i.nama}\n??? *Tipo :* ${getContentType(i.message).replace(/Message/i, '')}\n???????????????????????????????????????????????????\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' no esta registrado en la lista de mensajes`)
		delete msgs[text.toLowerCase()]
		reply(`'${text}' fue eliminado con exito`)
            }
	    break
            case 'public': {
                if (!isCreator) throw enviar.owner
                silent.public = true
                reply('???? ???????????????? ???????????????????????????? ??????')
            }
            break
            case 'self': {
                if (!isCreator) throw enviar.owner
                silent.public = false
                reply('???? ???????????????? ???????????????????????????? ??????')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Velocidad de respuesta ${latensi.toFixed(4)} _Segundos_ \n ${oldd - neww} _milisegundos_\n\nTiempo activo : ${runtime(process.uptime())}

???????????????? ???????????? ????????????????????????
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
`.trim()
                reply(respon)
            }
            break
            case 'owner': case 'creator': {
                silent.sendContact(m.chat, global.owner, sello)
            }
            break
            case 'playstore': {
            if (!text) throw `Ejemplo : ${prefix + command} termux`
            let res = await fetchJson(api('zenz', '/webzone/playstore', { query: text }, 'apikey'))
            let teks = `???????????????????????????? ???????? ???????????????????????????????????? ???????? : ${text}\n\n`
            for (let i of res.result) {
            teks += `??? Nombre : ${i.name}\n`
            teks += `??? Link : ${i.link}\n`
            teks += `??? Programador : ${i.developer}\n`
            teks += `??? Link del programador : ${i.link_dev}\n\n???????????????????????????????????????????????????\n`
            }
            reply(teks)
            }
            break
            case 'telefono': {
            if (!text) throw `Ejemplo : ${prefix + command} samsung`
            let res = await fetchJson(api('zenz', '/webzone/gsmarena', { query: text }, 'apikey'))
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `
??? Titulo: ${judul}
??? Actualizaciones: ${rilis}
??? Espacio: ${ukuran}
??? Tipo: ${type}
??? Almacenamiento: ${storage}
??? Display: ${display}
??? Inchi: ${inchi}
??? Pixel: ${pixel}
??? Video Pixel: ${videoPixel}
??? Ram: ${ram}
??? Chipset: ${chipset}
??? Bateria: ${batrai}
??? Bateria Brand: ${merek_batre}
??? Detalles: ${detail}`
            silent.sendImage(m.chat, thumb, capt, sello)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw enviar.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(enviar.listo)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(enviar.listo)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(enviar.listo)
                } else if (args[0] === 'templateMessage'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = true
                setbot.templateLocation = false
                reply(enviar.listo)
                } else if (args[0] === 'templateLocation'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = true
                reply(enviar.listo)
                } else {
                let sections = [
                {
                title: "???????????????????????????? ???????????????? ???????????? ????????????",
                rows: [
                {title: "???????????????? ????????????????????????", rowId: `setmenu templateImage`, description: `Cambiar menu a menu imagen`},
                {title: "???????????????? ????????????????????", rowId: `setmenu templateVideo`, description: `Cambiar menu a menu video`},
                {title: "???????????????? ????????????", rowId: `setmenu templateGif`, description: `Cambiar menu a menu video`},
                {title: "???????????????? ????????????????????", rowId: `setmenu templateMessage`, description: `Cambiar menu a menu texto`},
                {title: "???????????????? ????????????????????????????????????????????????", rowId: `setmenu templateLocation`, description: `Cambiar menu a menu localizacion`}
                ]
                },
                ]
                silent.sendListMsg(m.chat, `Por favor selecione el tipo de menu para usted`, "??????", `???????????????? ????????????????????????????????????????????!!`, `???????????????????? ????????????????`, sections, sello)
                }
            }
            break
case 'list': case 'menu': case 'help': case '?': {
const templateButtons = [
{ urlButton: { displayText: `Soporte`, url : `https://wa.me/5493865221136` } },
{ urlButton: { displayText: `Github Owner`, url : `https://github.com/KenisawaDev/` } },
{ urlButton: { displayText: `Grupo OFC`, url: `https://chat.whatsapp.com/HA9MfaPWoQOL3nljLw0JKU` } },
{ quickReplyButton: { displayText: `Comandos`, id: 'allmenu'} }
]
const templateMessage = {
video:vidmenu,
gifPlayback:true,
jpegThumbnail:global.fake,
caption: listmn,
footer: global.firma2,
templateButtons: templateButtons
}
silent.sendMessage(m.chat, templateMessage)
}
break
case 'comandos': case 'allmenu':  {
                anu = `${readmore}
??????????????????  ???  ??????????????????
??????????????????????????????????????????
???      ??? ???????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}linkgroup
?????? ${prefix}ephemeral [opcion]
?????? ${prefix}fotogrupo [image]
?????? ${prefix}nombregrupo [txt]
?????? ${prefix}aggdesc [txt]
?????? ${prefix}grupo [opcion]
?????? ${prefix}editinfo [opcion]
?????? ${prefix}agg @user
?????? ${prefix}sacar @user
?????? ${prefix}hidetag [txt]
?????? ${prefix}tagall [txt]
?????? ${prefix}totag [mensaje]
?????? ${prefix}antilink [on/off]
?????? ${prefix}daradm @user
?????? ${prefix}sacaradm @user
???
??????????????????????????????????????????
???     ??? ???????????????????????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}tiktoknowm [url]
?????? ${prefix}tiktokwm [url]
?????? ${prefix}tiktokmp3 [url]
?????? ${prefix}instagram [url]
?????? ${prefix}twitter [url]
?????? ${prefix}twittermp3 [url]
?????? ${prefix}facebook [url]
?????? ${prefix}pinterestdl [url]
?????? ${prefix}ytmp3 [url]
?????? ${prefix}ytmp4 [url]
?????? ${prefix}playstore
???
??????????????????????????????????????????
???     ??? ???????????????????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}play [consulta]
?????? ${prefix}yts [consulta]
?????? ${prefix}google [consulta]
?????? ${prefix}gimage [consulta]
?????? ${prefix}pinterest [consulta]
?????? ${prefix}wallpaper [consulta]
?????? ${prefix}wikimedia [consulta]
?????? ${prefix}ytsearch [consulta]
???
??????????????????????????????????????????
???     ??? ???????????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}coffe
?????? ${prefix}quotesanime
?????? ${prefix}motivasi
?????? ${prefix}dilanquote
?????? ${prefix}bucinquote
?????? ${prefix}katasenja
?????? ${prefix}puisi
?????? ${prefix}couple
?????? ${prefix}anime
?????? ${prefix}waifu
?????? ${prefix}husbu
?????? ${prefix}neko
?????? ${prefix}shinobu
???
??????????????????????????????????????????
???     ??? ???????????????? ???????????? ???
???????????????????????????????????????
???
?????? ${prefix}3dchristmas
?????? ${prefix}3ddeepsea
?????? ${prefix}americanflag
?????? ${prefix}3dscifi
?????? ${prefix}3drainbow
?????? ${prefix}3dwaterpipe
?????? ${prefix}halloweenskeleton
?????? ${prefix}sketch
?????? ${prefix}bluecircuit
?????? ${prefix}space
?????? ${prefix}metallic
?????? ${prefix}fiction
?????? ${prefix}greenhorror
?????? ${prefix}transformer
?????? ${prefix}berry
?????? ${prefix}thunder
?????? ${prefix}magma
?????? ${prefix}3dcrackedstone
?????? ${prefix}3dneonlight
?????? ${prefix}impressiveglitch
?????? ${prefix}naturalleaves
?????? ${prefix}fireworksparkle
?????? ${prefix}matrix
?????? ${prefix}dropwater
?????? ${prefix}harrypotter
?????? ${prefix}foggywindow
?????? ${prefix}neondevils
?????? ${prefix}christmasholiday
?????? ${prefix}3dgradient
?????? ${prefix}blackpink
?????? ${prefix}gluetext
???
??????????????????????????????????????????
???     ??? ???????????????????? ???????????? ???
???????????????????????????????????????
???
?????? ${prefix}shadow
?????? ${prefix}romantic
?????? ${prefix}smoke
?????? ${prefix}burnpapper
?????? ${prefix}naruto
?????? ${prefix}lovemsg
?????? ${prefix}grassmsg
?????? ${prefix}lovetext
?????? ${prefix}coffecup
?????? ${prefix}butterfly
?????? ${prefix}harrypotter
?????? ${prefix}retrolol
???
??????????????????????????????????????????
???     ??? ???????????????????????? 360 ???
???????????????????????????????????????
???
?????? ${prefix}ffcover
?????? ${prefix}crossfire
?????? ${prefix}galaxy
?????? ${prefix}glass
?????? ${prefix}neon
?????? ${prefix}beach
?????? ${prefix}blackpink
?????? ${prefix}igcertificate
?????? ${prefix}ytcertificate
???
??????????????????????????????????????????
???   ??? ???????????????????????????????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}attp
?????? ${prefix}ttp
?????? ${prefix}toimage
?????? ${prefix}removebg
?????? ${prefix}sticker
?????? ${prefix}stickerwm
?????? ${prefix}emojimix
?????? ${prefix}emojimix2
?????? ${prefix}tovideo
?????? ${prefix}togif
?????? ${prefix}tourl
?????? ${prefix}tovn
?????? ${prefix}tomp3
?????? ${prefix}toaudio
?????? ${prefix}ebinary
?????? ${prefix}dbinary
?????? ${prefix}styletext
?????? ${prefix}smeme
???
??????????????????????????????????????????
???   ??? ???????????????????? ???????????? ???
???????????????????????????????????????
???
?????? ${prefix}ping
?????? ${prefix}owner
?????? ${prefix}menu / ${prefix}help / ${prefix}?
?????? ${prefix}delete
?????? ${prefix}infochat
?????? ${prefix}quoted
?????? ${prefix}listpv
?????? ${prefix}listgp
?????? ${prefix}listonline
???
??????????????????????????????????????????
???     ??? ???????????????????????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}setcmd
?????? ${prefix}listcmd
?????? ${prefix}delcmd
?????? ${prefix}lockcmd
?????? ${prefix}addmsg
?????? ${prefix}listmsg
?????? ${prefix}getmsg
?????? ${prefix}delmsg
???
??????????????????????????????????????????
?????? ???????????????????????????????????? ???????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}bass
?????? ${prefix}blown
?????? ${prefix}deep
?????? ${prefix}earrape
?????? ${prefix}fast
?????? ${prefix}fat
?????? ${prefix}nightcore
?????? ${prefix}reverse
?????? ${prefix}robot
?????? ${prefix}slow
?????? ${prefix}tupai
???
??????????????????????????????????????????
???     ??? ???????????????????? ???
???????????????????????????????????????
???
?????? ${prefix}chat [opcion]
?????? ${prefix}join [link]
?????? ${prefix}leave
?????? ${prefix}block @user
?????? ${prefix}unblock @user
?????? ${prefix}bcgroup [txt]
?????? ${prefix}bcall [txt]
?????? ${prefix}setppbot [image]
?????? ${prefix}setexif
?????? ${prefix}setmenu [opcion]
?????? ${prefix}anticall [on/off]
???
??????????????????  ???  ??????????????????`
                let btn = [{
                                urlButton: {
                                    displayText: 'Soporte del bot',
                                    url: 'https://wa.me/5493865221136'
                                }
                            }]
                         let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        silent.send5ButImg(m.chat, anu, global.firma3, global.thumb, btn, global.thumb)
                        } else if (setbot.templateGif) {
                        silent.send5ButGif(m.chat, anu, global.firma3, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateVid) {
                        silent.send5ButVid(m.chat, anu, global.firma3, global.vidmenu, btn, global.thumb)
                        } else if (setbot.templateMsg) {
                        silent.send5ButMsg(m.chat, anu, global.firma3, btn)
                        } else if (setbot.templateLocation) {
                        silent.send5ButLoc(m.chat, anu, global.firma3, global.thumb, btn)
                        }
                     }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(enviar.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(enviar.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(enviar.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(`${err}`)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    silent.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
