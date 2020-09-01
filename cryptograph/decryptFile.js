const fs = require('fs');
const crypto = require('crypto')

const alg = 'aes-256-ctr'
// colocar um process.env e pedir a senha pelo terminal.
const passwd = 'root'

const read = fs.createReadStream('./output.txt')
const write = fs.createWriteStream('./decrypted.txt')
const cipher = crypto.createDecipher(alg, passwd)

// ler arquivo,critografa e devolve para outro arquivo de saída
read.pipe(cipher).pipe(write)
console.log('Pronto!')





