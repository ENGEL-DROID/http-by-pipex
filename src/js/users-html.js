import {createUsuario, readUsuario, updateUsuario, deleteUsuario} from './http-providers';

export const crud = () => {
    const div = document.getElementById('carga');
    div.innerHTML = '';
    const contenido = `
        <div>
        <h2>CRUD:</h2>
        <hr>
        <a href="">
        <button id="create">Crear Usuarios</button>
        <button id="read">Leer Usuarios</button>
        <button id="update">Actualizar Usuarios</button>
        <button id="deletex">Eliminar Usuarios</button>
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


// ------------- Crear Usuarios -------------
const createHtml = async () => {
    // Eliminar tablas existentes para limpiar el body:
    // const oldTable = document.querySelector('table');
    // if(oldTable) document.querySelector('table').remove();
    const oldCargas = document.getElementById('newDiv');
    if(oldCargas) document.getElementById('newDiv').remove();
    let nroHeads = 1;
    // Función para Enviar y Recibir los datos del usuario creado:
    const crearUserHtml = async (nombre, profesion) => {
        const tablaCuerpo = `
        <thead>
            <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Profesión</th>
                <th>Fecha Creación</th>
            </tr>
        </thead>
        <tbody id="tableBody"></tbody>
        `;
        const tablaHtml = document.createElement('table');
        tablaHtml.innerHTML = tablaCuerpo;
        if(nroHeads===1) divCarga.append(tablaHtml);
        // nroHeads++;
        const filas = (usuario) => {
            const fila = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.job}</td>
                <td>${usuario.createdAt}</td>
            </tr>
            `;
            const tBody = document.getElementById('tableBody');
            const tRow = document.createElement('tr');
            tRow.innerHTML = fila;
            tBody.append(tRow);
        };
        filas(await createUsuario(nombre, profesion).then(res => res));
    };
    // Crear la tabla para ingresar datos del usuario:
    const divCarga = document.getElementById('carga');
    const dataIn = `
    <div id="newDiv">
        <table>
            <tr>
                <td>
                    <h3 id="menxaje">Ingrese los datos del usuario</h3>
                </td>
            </tr>
            <tr>
                <td>
                    <input id="nombreU" type="text" name="nombre" placeholder="Nombre">
                </td>
                <td>
                    <input id="profesionU" type="text" name="profesion" placeholder="Profesion">
                </td>
                <td>
                    <button id="btnCrear">Crear Usuario</button>
                </td>
            </tr>
        </table>
        <br>
    </div>
    `;
    const dataInDiv = document.createElement('div');
    dataInDiv.setAttribute('id', 'newDiv');
    dataInDiv.innerHTML = dataIn;
    divCarga.append(dataInDiv);
    const nombreU = document.getElementById('nombreU');
    const profesionU = document.getElementById('profesionU');
    const btnCrear = document.getElementById('btnCrear');
    btnCrear.addEventListener('click', () => {
        if(nombreU.value.length>0 && profesionU.value.length>0){
            crearUserHtml(nombreU.value, profesionU.value);
            nombreU.value = '';
            profesionU.value = '';
            nroHeads++;
        } else {
            document.getElementById('menxaje').innerText = 'Ingrese datos válidos por favor!';
        }
    });
};



// ------------- Leer Usuarios -------------
const readHtml = async () => {
    // const oldTable = document.querySelector('table');
    // if(oldTable) document.querySelector('table').remove();
    const oldCargas = document.getElementById('newDiv');
    if(oldCargas) document.getElementById('newDiv').remove();
    const divCarga = document.getElementById('carga');
    const tablaCuerpo = `
    <table>
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
    </table>
    `;
    const divHtml = document.createElement('div');
    divHtml.setAttribute('id', 'newDiv');
    divHtml.innerHTML = tablaCuerpo;
    divCarga.append(divHtml);
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


// ------------- Actualizar Usuarios -------------
const updateHtml = async () => {
    console.log(await updateUsuario().then());
};

// ------------- Eliminar Usuarios -------------
const deleteHtml = async () => {
    console.log(await deleteUsuario().then());
};