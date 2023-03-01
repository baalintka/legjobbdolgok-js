window.addEventListener("load", init);

function init() {
  console.log("Hello");
  const articleElem = document.querySelectorAll("#tarolo");
  console.log(articleElem);
  articleElem.innerHTML = "<h1>Legjobb dolgok</h1>";
  const list = [
    "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
    "Tudtam ültetni és van két virágom",
    "Lebetegedtem",
    "Tegnapi adatbázis-kezelés",
    "Kupcsik tanárnő vicces",
    "Tegnap kialaudtam magam",
    "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",
    "Jó edzés volt a héten!",
  ];
  megjelenit(list,articleElem);
  const szuloelem=document.querySelectorAll("section");
  megjelenit2(list,szuloelem);
}
const articleElem=document.getElementById("tartalom");

function megjelenit(list,articleElem) {
    
    let txt="<ul>";
    for (let index = 0; index < list.length; index++) {
            txt+= "<li>" +list[index]+"</li>"
            console.log(list[index]);
        
    }
    txt+= "</ul>"
    articleElem[0].innerHTML += txt;
}

function megjelenit2(list,szuloelem){
    let text = "";
    for (let index = 0; index < list.length; index++) {
            text+="<div>"+"<p>"+list[index] + "</p>"+"</div>";
        
    }
    szuloelem[0].innerHTML+=text;

}
