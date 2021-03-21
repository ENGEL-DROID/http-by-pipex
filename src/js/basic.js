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
            <li><a id="chiste" href="">Chistes con Api 😂</a></li>
            <li><a id="crud" href="">CRUD de usuarios 👨‍👩‍👦</a></li>
            <li><a id="upload" href="">Subida y lectura de imágenes 🖼️</a></li>
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
            console.log('Click en CHISTE');
            chiste();
        }
    }));
}

const chiste = () => {
    const div = document.getElementById('carga');
    const contenido = `
        <div>
        <h2>CHISTES:</h2>
        <hr>
        <a href="">
        <button>Generar un chiste</button>
        </a>
        </div>
        `;
        div.innerHTML = contenido;
};