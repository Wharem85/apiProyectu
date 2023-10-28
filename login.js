'use strict';
const API = require('./api')

async function login(nombre, codigo) {
	try {
    const res = await API.postLogin(nombre, codigo)
    console.log(res)
	} catch (error) {
		console.log(error);
	}
}

login('prueba 1', '13549875641')

// module.exports = {login}
