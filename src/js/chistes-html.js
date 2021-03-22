import {getChiste} from './http-providers';

export const montarChiste = () => {
    let cont = 1;
    const div = document.getElementById('carga');
    div.innerHTML = '';
    const contenido = `
        <div>
        <h2>CHISTES:</h2>
        <hr>
        <a href="">
        <button id="floatBtn">Nuevo<br>Chiste</button>
        </a>
        </div>
    `;
    div.innerHTML = contenido;
    const btn = document.querySelector('button');
    btn.addEventListener('click', async (e) => {
        const random = Math.floor(Math.random() * (99 - 0) + 0);
        console.log("Número Random: " + random);
        e.preventDefault();
        // const chiste = await (await getChiste()).joke;
        const chiste = await (await getChiste()).data.memes[random].name;
        const urlImg = await (await getChiste()).data.memes[random].url;
        // console.log((await getChiste()).data.memes);
        const divInt = document.createElement('div');
        const elemento = `
        <hr>
        <p> ${cont++} - ${chiste}:</p>
        <img src="${urlImg}" alt="img">
        `;
        divInt.innerHTML = elemento;
        div.append(divInt);
    })
};