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
            <li><a href="chistes.html">Chistes con Api 😂</a></li>
            <li><a href="crud.html">CRUD de usuarios 👨‍👩‍👦</a></li>
            <li><a href="upload.html">Subida y lectura de imágenes 🖼️</a></li>
        </ul>
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
}