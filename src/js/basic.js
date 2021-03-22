import {getChiste} from './http-providers';

const body = document.body;

export const cuerpo = () => {
    const contenido = `
    <div id="cabecera">
        <h1 id="titP">HTTP By Pipex</h1>
        <h3>Ejercicios hechos por Pipe en el curso de JavaScript moderno dictado por Fernando Herrera.</h3>
    </div>
    <div id="contenido">
        <h2>Los proyectos creados son los siguientes:</h2>
        <ul>
            <li><a id="chiste" href="">😂 Chistes con Api</a></li>
            <li><a id="crud" href="">👨‍👩‍👦 CRUD de usuarios</a></li>
            <li><a id="upload" href="">🖼️ Subida y lectura de imágenes</a></li>
        </ul>
    </div>
    <div id="carga">
    </div>
    <div id="footer">
        <p>Hecho junto a un ☕ por:
            <a href="https://github.com/ENGEL-DROID" target="_blank">@ENGEL-DROID</a>
        </p>
    </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = contenido;
    body.append(div);
    escuchar();
}

const escuchar = () => {
    const link = document.querySelectorAll('a');
    link.item(addEventListener('click', (e) => {
        if(e.target.id == 'chiste') {
            e.preventDefault();
            montarChiste();
        } else if(e.target.id == 'crud') {
            e.preventDefault();
            crud();
        } else if(e.target.id == 'upload') {
            e.preventDefault();
            upload();
        }
    }));
}

const montarChiste = () => {
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

// TODO:
const crud = () => {
    const div = document.getElementById('carga');
    div.innerHTML = '';
    const contenido = `
        <div>
        <h2>CRUD:</h2>
        <hr>
        <a href="">
        <button>Crear un Usuario</button>
        </a>
        </div>
        `;
        div.innerHTML = contenido;
};

// TODO:
const upload = () => {
    const div = document.getElementById('carga');
    div.innerHTML = '';
    const contenido = `
        <div>
        <h2>UPLOAD:</h2>
        <hr>
        <input type="file" name="archivo" id="imagen" accept=".jpg, .jpeg, .gif, .png, .svg"></input>
        `;
        div.innerHTML = contenido;
};