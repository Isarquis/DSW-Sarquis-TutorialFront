var serieTable = document.getElementById("serie");
function mostrarDatosSerie(serie) {
    var tbodySerie = document.createElement("tbody");
    tbodySerie.innerHTML = "<tr><td> #: </td>".concat(serie.id, "<td>$}</td></tr>\n    <tr><td> Nombre: </td><td>").concat(serie.nombre, "</td></tr>\n    <tr><td> Channel: </td><td>").concat(serie.channel, "</td></tr>\n    <tr><td> Seasons: </td><td>").concat(serie.seasons, "</td></tr>");
    serieTable.appendChild(tbodySerie);
}
export {};
