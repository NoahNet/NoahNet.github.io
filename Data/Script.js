//npm install exceljs
//install nodejs

// mess json file geebruiken?

'use strict';

//import * as help from "https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0/polyfill.js";
//import * as ExcelJS from "./node_modules/exceljs/dist/exceljs.js";
//const ExcelJS = require('exceljs');
let payconic = document.getElementById("Payconic");
let cash = document.getElementById("Cash");
let betaalmethode = "onbekend";

const handleLoad = function(){
    let knop = document.getElementById("Bestel");
    payconic.style.visibility = "hidden";
    cash.style.visibility = "hidden";
    knop.addEventListener("click", KnopActie);
    payconic.addEventListener("click", pa);
    cash.addEventListener("click", ca);
    payconic.addEventListener("click", bestand);
    cash.addEventListener("click", bestand);
    console.log("script laadt");
};

function ca(){
    betaalmethode = "Cash";
}
function pa(){
    betaalmethode = "Paypal";
}

function KnopActie(){
    console.log("knopactie uitgevoerd")
    let bedrag = 0;
    if(document.getElementById("checkGerecht1").checked){
        bedrag += 4 * document.getElementById("hvlGerecht1").value;
    }
    if(document.getElementById("checkGerecht2").checked){
        bedrag += 3.5 * document.getElementById("hvlGerecht2").value;
    }
    if(document.getElementById("checkGerecht3").checked){
        bedrag += 5 * document.getElementById("hvlGerecht3").value;
    }
    if(document.getElementById("checkGerecht4").checked){
        bedrag += 4.5 * document.getElementById("hvlGerecht4").value;
    }
    if(document.getElementById("checkGerecht5").checked){
        bedrag += 6 * document.getElementById("hvlGerecht5").value;
    }
    if(document.getElementById("checkGerecht6").checked){
        bedrag += 14 * document.getElementById("hvlGerecht6").value;
    }
    if(document.getElementById("checkGerecht7").checked){
        bedrag += 3.5 * document.getElementById("hvlGerecht7").value;
    }
    if(document.getElementById("checkGerecht8").checked){
        bedrag += 3.5* document.getElementById("hvlGerecht8").value;
    }
    if(document.getElementById("checkGerecht9").checked){
        bedrag += 10 * document.getElementById("hvlGerecht9").value;
    }
    if(document.getElementById("checkGerecht10").checked){
        bedrag += 2 * document.getElementById("hvlGerecht10").value;
    }
    if(document.getElementById("checkGerecht11").checked){
        bedrag += 2 * document.getElementById("hvlGerecht11").value;
    }
    if(document.getElementById("checkGerecht12").checked){
        bedrag += 1.5 * document.getElementById("hvlGerecht12").value;
    }
    if(document.getElementById("checkGerecht13").checked){
        bedrag += 25 * document.getElementById("hvlGerecht13").value;
    }
    /*
    if(document.getElementById("checkGerecht14").checked){
        bedrag += 2 * document.getElementById("hvlGerecht14").value;
    }
    */
    if(document.getElementById("checkGerecht15").checked){
        bedrag -= 4 * document.getElementById("hvlGerecht15").value;
    }
    if(document.getElementById("checkGerecht16").checked){
        bedrag += Number(document.getElementById("hvlGerecht16").value);
    }
    payconic.style.visibility = "visible";
    cash.style.visibility = "visible";
    document.getElementById("output").value = "€ " + bedrag;
}

async function bestand() {

    let url = 'https://noahnet.github.io/Data/orders.geojson';

    let een;
    let twee;
    let drie;
    let vier;
    let vijf;
    let zes;
    let zeven;
    let acht;
    let negen;
    let tien;
    let elf;
    let twaalf;
    let dertien;
    let vijftien;
    let zestien;
    if(document.getElementById("checkGerecht1").checked){
        een =  Number(document.getElementById("hvlGerecht1").value);
        document.getElementById("checkGerecht1").checked = false;
    }else{
        een = 0;
    }
    if(document.getElementById("checkGerecht2").checked){
        twee =  Number(document.getElementById("hvlGerecht2").value);
        document.getElementById("checkGerecht2").checked = false;
    }else{
        twee = 0;
    }
    if(document.getElementById("checkGerecht3").checked){
        drie = Number(document.getElementById("hvlGerecht3").value);
        document.getElementById("checkGerecht3").checked = false;
    }else{
        drie = 0;
    }
    if(document.getElementById("checkGerecht4").checked){
        vier =  Number(document.getElementById("hvlGerecht4").value);
        document.getElementById("checkGerecht4").checked = false;
    }else{
        vier = 0;
    }
    if(document.getElementById("checkGerecht5").checked){
        vijf =  Number(document.getElementById("hvlGerecht5").value);
        document.getElementById("checkGerecht5").checked = false;
    }else{
        vijf = 0;
    }
    if(document.getElementById("checkGerecht6").checked){
        zes = Number(document.getElementById("hvlGerecht6").value);
        document.getElementById("checkGerecht6").checked = false;
    }else{
        zes = 0;
    }
    if(document.getElementById("checkGerecht7").checked){
        zeven = Number(document.getElementById("hvlGerecht7").value);
        document.getElementById("checkGerecht7").checked = false;
    }else{
        zeven = 0;
    }
    if(document.getElementById("checkGerecht8").checked){
        acht = Number(document.getElementById("hvlGerecht8").value);
        document.getElementById("checkGerecht8").checked = false;
    }else{
        acht = 0;
    }
    if(document.getElementById("checkGerecht9").checked){
        negen = Number(document.getElementById("hvlGerecht9").value);
        document.getElementById("checkGerecht9").checked = false;
    }else{
        negen = 0;
    }
    if(document.getElementById("checkGerecht10").checked){
        tien = Number(document.getElementById("hvlGerecht10").value);
        document.getElementById("checkGerecht10").checked = false;
    }else{
        tien = 0;
    }
    if(document.getElementById("checkGerecht11").checked){
        elf = Number(document.getElementById("hvlGerecht11").value);
        document.getElementById("checkGerecht11").checked = false;
    }else{
        elf = 0;
    }
    if(document.getElementById("checkGerecht12").checked){
        twaalf = Number(document.getElementById("hvlGerecht12").value);
        document.getElementById("checkGerecht12").checked = false;
    }else{
        twaalf = 0;
    }
    if(document.getElementById("checkGerecht13").checked){
        dertien = Number(document.getElementById("hvlGerecht13").value);
        document.getElementById("checkGerecht13").checked = false;
    }else{
        dertien = 0;
    }
    if(document.getElementById("checkGerecht15").checked){
        vijftien =  Number(document.getElementById("hvlGerecht15").value);
        document.getElementById("checkGerecht15").checked = false;
    }else{
        vijftien = 0;
    }
    if(document.getElementById("checkGerecht16").checked){
        zestien = Number(document.getElementById("hvlGerecht16").value);
        document.getElementById("checkGerecht16").checked = false;
    }else{
        zestien = 0;
    }


    var d = new Date();
    var n = d.toLocaleDateString();

    let bedrag = Number(document.getElementById("output").value.substr(2));
    document.getElementById("output").value = "";
    payconic.style.visibility = "hidden";
    cash.style.visibility = "hidden";

    let order = {datum: n, chocolade: een, slagroom: twee, donut: drie, milkshakeS: vier,
    milkshakeL: vijf, tower: zes, icetea: zeven, smoothie: acht, prosecco: negen, spablauw: tien,
    sparood: elf, glazen: twaalf, picknickmand: dertien, korting: vijftien, eigenbedrag: zestien,
    bedrag: bedrag, methode: betaalmethode};

    fetch(url,
        {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            if (response.status == 201) {
                return response.json();
            } else {
                throw `error with status ${response.status}`;
            }
        })
        .then((person) => {
            let data = [];
            data.push([order.datum, order.chocolade, order.slagroom, order.donut, order.milkshakeS,
            order.milkshakeL, order.tower, order.icetea, order.smoothie, order.prosecco, order.spablauw,
                order.sparood, order.glazen, order.picknickmand, order.korting, order.eigenbedrag,
                order.bedrag, order.methode
            ]);
        })
        .catch((error) => {
            output.appendChild(document.createTextNode(error));
        });

}


window.addEventListener('load',handleLoad);