import { Serie } from './serie.js';
export const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","./resources/breakingBad.jpeg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","./resources/OITNB.jpeg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "./resources/GOT.jpeg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "./resources/TBBT.jpeg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "./resources/Sherlock.jpeg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "./resources/AVIS.jpeg"),
  ];

let serieTable: HTMLElement= document.getElementById("serie")!;
let promedioTable: HTMLElement= document.getElementById("promedio")!;

mostrarDatosSerie(series);
mostrarEstadisticas(series);
showTarjeta();

function mostrarDatosSerie(series:Serie[]):void{
    let tbodySerie: HTMLElement= document.createElement("tbody");
    for(let serie of series){
        let trElement:HTMLElement=document.createElement("tr");
        trElement.innerHTML=
        `<tr><td>${serie.id}</td>
        <td><a href="#" id=${serie.id} onclick = "showTarjeta()" >${serie.nombre}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td></tr>`
        tbodySerie.appendChild(trElement);
    }

    serieTable.appendChild(tbodySerie);
}

function mostrarEstadisticas(series: Serie[]):void{
    let promedio:number=promedioTemporadas(series);
    let trElement:HTMLElement=document.createElement("tr");
    trElement.innerHTML=`<td><b> Seasons average:</b></td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}

function promedioTemporadas(series: Serie[]):number{
    let totalTemporadas:number=0;
    for(let index=0; index<series.length;index++){
        let serie: Serie= series[index];
        totalTemporadas+=serie.seasons;
    }
    return totalTemporadas/series.length;
}

function showTarjeta(): void{
    series.forEach(serie=>{
        let idSerie=document.getElementById(serie.id.toString())
        if(idSerie!=null){
            idSerie.onclick=(event)=>{
                const detailDiv: HTMLElement = document.getElementById('tarjeta')!;
                let cardElement = document.createElement("div");
                cardElement.innerHTML = `<div class = "card" style = "width: 24rem;">
                            <img class = "card-img-top" src ="${serie.image}"alt="Card image cap">
                            <div class = "card-body">
                            <h5 class = "card-tittle">${serie.nombre}</h5>
                            <p class = "card-text">${serie.plot}</p>
                            <a href="${serie.cite}">${serie.cite}</a>
                            </div></div>`;
    detailDiv.appendChild(cardElement);
    detailDiv.replaceChild(cardElement, detailDiv.childNodes[0])       
            }
        }
    }) 
}




