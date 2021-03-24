// const urlChistes = 'https://v2.jokeapi.dev/joke/Any?type=single';
const urlChistes = 'https://api.imgflip.com/get_memes';
const urlUsuarios = 'https://reqres.in/api/users';

const getChiste= async () => {
    try {
        const obj = await fetch(urlChistes);
        if (!obj.ok) throw 'Algo salió mal con la url de la Api';
        // const {joke} = await obj.json();
        // return {joke};
        const {success, data} = await obj.json();
        return {success, data};
    } catch (err) {
        throw err;
    }
}
// ------------- Crear Usuarios -------------
const createUsuario = async (nombre, profesion) => {
    const axios = require('axios');
    const usuario = {
        "name": nombre,
        "job": profesion
        // "name": "Pipeido",
        // "job": "Programador"
    }
    try {
        const res = await axios.post('https://reqres.in/api/users', usuario);
        // console.log(`Status: ${res.status}`);
        // console.log('Body: ', res.data);
        return res.data;
    } catch (err) {
        console.error(err);
    }
};
// ------------- Leer Usuarios -------------
const readUsuario = async () => {
    try {
        const usuarios = await fetch(urlUsuarios);
        if (!usuarios.ok) throw 'Algo salió mal con la solicitud de la Api';
        const {data:resp} = await usuarios.json();
        return resp;
    } catch (error) {
        throw error;
    }
};
// ------------- Actualizar Usuarios -------------
const updateUsuario = async () => {
    console.log("UPDATE_USUARIO");
};
// ------------- Borrar Usuarios -------------
const deleteUsuario = async () => {
    console.log("DELETE_USUARIO");
};

export {
    getChiste,
    createUsuario,
    readUsuario,
    updateUsuario,
    deleteUsuario
}