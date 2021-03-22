// const urlChistes = 'https://v2.jokeapi.dev/joke/Any?type=single';
const urlChistes = 'https://api.imgflip.com/get_memes';

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

export {
    getChiste
}