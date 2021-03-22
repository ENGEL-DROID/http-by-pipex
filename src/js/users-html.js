import {createUsuario, readUsuario, updateUsuario, deleteUsuario} from './http-providers';

export const crud = () => {
    const div = document.getElementById('carga');
    div.innerHTML = '';
    const contenido = `
        <div>
        <h2>CRUD:</h2>
        <hr>
        <a href="">
        <button id="create">Crear un Usuario</button>
        <button id="read">Leer Usuarios</button>
        <button id="update">Actualizar un Usuario</button>
        <button id="deletex">Eliminar un Usuario</button>
        </a>
        </div>
        `;
        div.innerHTML = contenido;
        acciones();
};

const acciones = () => {
    const btn = document.querySelectorAll('button');
    btn.item(addEventListener('click', (e) => {
        e.preventDefault();
        if(e.target.id == "create") createHtml();
        else if(e.target.id == "read") readHtml();
        else if(e.target.id == "update") updateHtml();
        else if(e.target.id == "deletex") deleteHtml();
    }));
}

const readHtml = async () => {
    const divCarga = document.getElementById('carga');
    const tablaCuerpo = `
    <thead>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>eMail</th>
            <th>Foto</th>
        </tr>
    </thead>
    <tbody></tbody>
    `;
    const tablaHtml = document.createElement('table');
    tablaHtml.innerHTML = tablaCuerpo;
    divCarga.append(tablaHtml);
    const filas = (usuario) => {
        const fila = `
        <tr>
            <td>${usuario.id}</td>
            <td>${usuario.first_name}</td>
            <td>${usuario.last_name}</td>
            <td>${usuario.email}</td>
            <td>
                <img src="${usuario.avatar}" alt="perfil">
            </td>
        </tr>
        `;
        const tBody = document.querySelector('tBody');
        const tRow = document.createElement('tr');
        tRow.innerHTML = fila;
        tBody.append(tRow);
    };
    (await readUsuario()).forEach(filas);
};