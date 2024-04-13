import { Serie } from './serie.js';


let serieTable: HTMLElement= document.getElementById("serie")!;

function mostrarDatosSerie(serie:Serie):void{
    let tbodySerie= document.createElement("tbody");
    tbodySerie.innerHTML=`<tr><td> #: </td>${serie.id}<td>$}</td></tr>
    <tr><td> Nombre: </td><td>${serie.nombre}</td></tr>
    <tr><td> Channel: </td><td>${serie.channel}</td></tr>
    <tr><td> Seasons: </td><td>${serie.seasons}</td></tr>`
    serieTable.appendChild(tbodySerie);
}