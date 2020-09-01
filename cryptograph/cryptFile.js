const fs = require('fs');
const crypto = require('crypto')

const alg = 'aes-256-ctr'
// colocar um process.env e pedir a senha pelo terminal.
const passwd = 'root'

const read = fs.createReadStream('./input.txt')
const write = fs.createWriteStream('./output.txt')
const cipher = crypto.createCipher(alg, passwd)

// ler arquivo,critografa e devolve para outro arquivo de saída
read.pipe(cipher).pipe(write)
console.log('Pronto!')





