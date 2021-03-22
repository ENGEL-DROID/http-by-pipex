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

const createUsuario = async () => {
    console.log("CREATE_USUARIO");
};

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

const updateUsuario = async () => {
    console.log("UPDATE_USUARIO");
};

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