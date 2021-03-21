const urlChistes = 'https://v2.jokeapi.dev/joke/Any?type=single';

const getChiste= async () => {
    try {
        const obj = await fetch(urlChistes);
        if (!obj.ok) throw 'Algo salió mal con la url de la Api';
        const {joke} = await obj.json();
        return {joke};
    } catch (err) {
        throw err;
    }
}

export {
    getChiste
}