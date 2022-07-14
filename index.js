require('./ajustes')
const { default: silentConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')

var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db 
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    anonymous: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

async function startsilent() {
    const silent = silentConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Silent-MD','Safari','1.0.0'],
        auth: state
    })

    store.bind(silent.ev)
    
    silent.ev.on('call', async (fatihh) => {
    let botNumber = await silent.decodeJid(silent.user.id)
    let ciko = db.data.settings[botNumber].anticall
    if (!ciko) return
    console.log(fatihh)
    for (let tihh of fatihh) {
    if (tihh.isGroup == false) {
    if (tihh.status == "offer") {
    let pa7rick = await silent.sendTextWithMentions(tihh.from, `*${silent.user.name}* no puedo hablar ahora ${tihh.isVideo ? `video` : `suara`}. perdon @${tihh.from.split('@')[0]} tendre que bloquearte, si se trara de un error dile a mi propietario!`)
    silent.sendContact(tihh.from, global.owner, pa7rick)
    await sleep(8000)
    await silent.updateBlockStatus(tihh.from, "block")
    }
    }
    }
    })

    silent.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!silent.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(silent, mek, store)
        require("./silent")(silent, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    silent.ev.on('groups.update', async pea => {
    console.log(pea)
       try {
       ppgc = await silent.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = '-'
       }
       let wm_fatih = thumb 
       if (pea[0].announce == true) {
       silent.send5ButImg(pea[0].id, `*〘 𝐀𝐋𝐓𝐄𝐑𝐀𝐂𝐈𝐎𝐍 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 〙*\n\n_𝑬𝒍 𝒈𝒓𝒖𝒑𝒐 𝒇𝒖𝒆 𝒄𝒆𝒓𝒓𝒂𝒅𝒐 𝒑𝒐𝒓 𝒖𝒏 𝒂𝒅𝒎𝒊𝒏, 𝒂𝒉𝒐𝒓𝒂 𝒔𝒐𝒍𝒐 𝒍𝒐𝒔 𝒂𝒅𝒎𝒊𝒏𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒉𝒂𝒃𝒍𝒂𝒓_`, `${nombrebot}`, wm_fatih, [])
       } else if(pea[0].announce == false) {
       silent.send5ButImg(pea[0].id, `*〘 𝐀𝐋𝐓𝐄𝐑𝐀𝐂𝐈𝐎𝐍 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 〙*\n\n_𝑬𝒍 𝒈𝒓𝒖𝒑𝒐 𝒇𝒖𝒆 𝒂𝒃𝒊𝒆𝒓𝒕𝒐 𝒑𝒐𝒓 𝒖𝒏 𝒂𝒅𝒎𝒊𝒏, 𝒂𝒉𝒐𝒓𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒎𝒊𝒆𝒎𝒃𝒓𝒐𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒉𝒂𝒃𝒍𝒂𝒓_`, `${nombrebot}`, wm_fatih, [])
       } else if (pea[0].restrict == true) {
       silent.send5ButImg(pea[0].id, `*〘 𝐀𝐋𝐓𝐄𝐑𝐀𝐂𝐈𝐎𝐍 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 〙*\n\n_𝑳𝒂 𝒆𝒅𝒊𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒇𝒖𝒆 𝒓𝒆𝒊𝒏𝒔𝒕𝒓𝒊𝒏𝒈𝒊𝒅𝒂, 𝒂𝒉𝒐𝒓𝒂 𝒔𝒐𝒍𝒐 𝒍𝒐𝒔 𝒂𝒅𝒎𝒊𝒏/𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒆𝒅𝒊𝒕𝒂𝒓 𝒍𝒂 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐_`, `${nombrebot}`, wm_fatih, [])
       } else if (pea[0].restrict == false) {
       silent.send5ButImg(pea[0].id, `*〘 𝐀𝐋𝐓𝐄𝐑𝐀𝐂𝐈𝐎𝐍 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 〙*\n\n_𝑳𝒂 𝒆𝒅𝒊𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒇𝒖𝒆 𝒂𝒃𝒊𝒆𝒓𝒕𝒂, 𝒂𝒉𝒐𝒓𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒎𝒊𝒆𝒏𝒃𝒓𝒐𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒆𝒅𝒊𝒕𝒂𝒓 𝒍𝒂 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐_`, `${nombrebot}`, wm_fatih, [])
       } else {
       silent.send5ButImg(pea[0].id, `*〘 𝐀𝐋𝐓𝐄𝐑𝐀𝐂𝐈𝐎𝐍 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎 〙*\n\n𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒄𝒂𝒎𝒃𝒊𝒐 𝒂 *${pea[0].subject}*`, `${nombrebot}`, wm_fatih, [])
     }
    })

    silent.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await silent.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                try {
                    ppuser = await silent.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }
                try {
                    ppgroup = await silent.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }

                if (anu.action == 'add') {
                    silent.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Bienvenid@ a ${metadata.subject} @${num.split("@")[0]}` })
                } else if (anu.action == 'remove') {
                    silent.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split("@")[0]} Ya no esta en ${metadata.subject}` })
                } else if (anu.action == 'promote') {
                    silent.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Ahora es admin de ${metadata.subject}` })
                } else if (anu.action == 'demote') {
                    silent.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Ya no es admin de ${metadata.subject}` })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    silent.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    silent.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = silent.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    silent.getName = (jid, withoutContact  = false) => {
        id = silent.decodeJid(jid)
        withoutContact = silent.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = silent.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === silent.decodeJid(silent.user.id) ?
            silent.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    silent.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await silent.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await silent.getName(i + '@s.whatsapp.net')}\nFN:${await silent.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:okeae2410@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/cak_haho\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	silent.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    silent.setStatus = (status) => {
        silent.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    silent.public = true

    silent.serializeM = (m) => smsg(silent, m, store)

    silent.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); silent.logout(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, reconnecting...."); startsilent(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, reconnecting..."); startsilent(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); silent.logout(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Scan Again And Run.`); silent.logout(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startsilent(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startsilent(); }
            else silent.end(`Unknown DisconnectReason: ${reason}|${connection}`)
        }
        console.log('Connected...', update)
    })

    silent.ev.on('creds.update', saveState)
      
      /** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      silent.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      // Siapa yang cita-citanya pakai resize buat keliatan thumbnailnya
      
      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      silent.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
       let resize = await silent.reSize(lok, 300, 150)
       var template = generateWAMessageFromContent(jid, {
       "templateMessage": {
       "hydratedTemplate": {
       "locationMessage": {
       "degreesLatitude": 0,
       "degreesLongitude": 0,
       "jpegThumbnail": resize
       },
       "hydratedContentText": text,
       "hydratedFooterText": footer,
       "hydratedButtons": but
       }
       }
       }, options)
       silent.relayMessage(jid, template.message, { messageId: template.key.id })
      }

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     silent.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return silent.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return silent.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return silent.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return silent.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return silent.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        silent.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        silent.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        silent.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        silent.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    silent.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
        let resize = await silent.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: resize }, { upload: silent.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            silent.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    silent.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
        let resize = await silent.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ video: vid, jpegThumbnail: resize }, { upload: silent.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            silent.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    silent.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
        let resize = await silent.reSize(buff, 300, 150)
        let a = [1,2]
        let b = a[Math.floor(Math.random() * a.length)]
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true, jpegThumbnail: resize, gifAttribution: b}, { upload: silent.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            silent.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    silent.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        silent.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendText = (jid, text, quoted = '', options) => silent.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await silent.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await silent.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    silent.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await silent.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendTextWithMentions = async (jid, text, quoted, options = {}) => silent.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await silent.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await silent.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    silent.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    silent.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    silent.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await silent.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await silent.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    silent.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await silent.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    silent.cMod = (jid, copy, text = '', sender = silent.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === silent.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    silent.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return silent
}

startsilent()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
