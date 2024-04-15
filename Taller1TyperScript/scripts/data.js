import { Serie } from './serie.js';
export var series = [
    new Serie(1, "Breaking Bad", "AMC", 5, "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer", "https://www.amc.com/shows/breaking-bad", "./resources/breakingBad.jpeg"),
    new Serie(2, "Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", "https://www.netflix.com/co/title/70242311", "./resources/OITNB.jpeg"),
    new Serie(3, "Game of Thrones", "HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones", "./resources/GOT.jpeg"),
    new Serie(4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.", "https://www.cbs.com/shows/big_bang_theory/about/", "./resources/TBBT.jpeg"),
    new Serie(5, "Sherlock", "BBC", 4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps", "https://www.bbc.co.uk/programmes/b018ttws", "./resources/Sherlock.jpeg"),
    new Serie(6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.", "https://www.bbc.co.uk/programmes/p065smy4", "./resources/AVIS.jpeg"),
];
var serieTable = document.getElementById("serie");
var promedioTable = document.getElementById("promedio");
mostrarDatosSerie(series);
mostrarEstadisticas(series);
showTarjeta();
function mostrarDatosSerie(series) {
    var tbodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML =
            "<tr><td>".concat(serie.id, "</td>\n        <td><a href=\"#\" id=").concat(serie.id, " onclick = \"showTarjeta()\" >").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td></tr>");
        tbodySerie.appendChild(trElement);
    }
    serieTable.appendChild(tbodySerie);
}
function mostrarEstadisticas(series) {
    var promedio = promedioTemporadas(series);
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b> Seasons average:</b></td><td>".concat(promedio, "</td>");
    promedioTable.appendChild(trElement);
}
function promedioTemporadas(series) {
    var totalTemporadas = 0;
    for (var index = 0; index < series.length; index++) {
        var serie = series[index];
        totalTemporadas += serie.seasons;
    }
    return totalTemporadas / series.length;
}
function showTarjeta() {
    series.forEach(function (serie) {
        var idSerie = document.getElementById(serie.id.toString());
        if (idSerie != null) {
            idSerie.onclick = function (event) {
                var detailDiv = document.getElementById('tarjeta');
                var cardElement = document.createElement("div");
                cardElement.innerHTML = "<div class = \"card\" style = \"width: 24rem;\">\n                            <img class = \"card-img-top\" src =\"".concat(serie.image, "\"alt=\"Card image cap\">\n                            <div class = \"card-body\">\n                            <h5 class = \"card-tittle\">").concat(serie.nombre, "</h5>\n                            <p class = \"card-text\">").concat(serie.plot, "</p>\n                            <a href=\"").concat(serie.cite, "\">").concat(serie.cite, "</a>\n                            </div></div>");
                detailDiv.appendChild(cardElement);
                detailDiv.replaceChild(cardElement, detailDiv.childNodes[0]);
            };
        }
    });
}
