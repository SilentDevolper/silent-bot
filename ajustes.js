const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

global.nombreowner = 'SilentDevolper'
global.nombrebot = 'Silent-MD'
global.owner = ['5493865221136']
global.premium = ['5493865221136']
global.firma = '🎭 𝓼𝓲𝓵𝓮𝓷𝓽-𝓭𝓮𝓿𝓸𝓵𝓹𝓮𝓻 ✡️'
global.firma2 = '𝐒𝐈𝐋𝐄𝐍𝐓-𝐌𝐃┃𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐛𝐨𝐭 '
global.firma3 = '✘ 𝐒𝐈𝐋𝐄𝐍𝐓-𝐌𝐃 ✘\nᵇʸ ˢⁱˡᵉⁿᵗ-ᵈᵉᵛᵒˡᵖᵉʳ'
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝚂𝚒𝚕𝚎𝚗𝚝-𝙼𝙳'
global.sessionName = 'qr'
global.prefa = ['#']
global.enviar = {
    listo: '✓ Éxito',
    noadmin: '¡Características especiales par los admin del grupo!',
    botnoadmin: '¡El bot debe ser administrador primero!',
    owner: 'Funciones especiales para el propietario del bot',
    grupo: '¡Característica utilizada solo para grupos!',
    privado: '¡Características utilizadas solo para chat privado!',
    bot: 'Funciones especiales del usuario del número de bot',
    nolink: 'Funciones especiales del usuario del número de bot',
    espere: 'Cargando...',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada hora 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.vidmenu = fs.readFileSync('./media/video/silent.mp4')
global.fake = fs.readFileSync('./media/imagen/fake.jpg')
global.thumb = fs.readFileSync('./media/imagen/thumb.jpg')
global.log0 = fs.readFileSync('./media/imagen/silent.jpg')
global.vidsilent = { url: 'https://telegra.ph/file/e4d77859de178f91bb84a.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Se actualizó '${__filename}'`))
	delete require.cache[file]
	require(file)
})
