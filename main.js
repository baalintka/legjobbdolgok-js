window.addEventListener("load", init);

function init() {
  console.log("Hello");
  const articleElem = document.querySelectorAll("#tarolo");
  console.log(articleElem);
  articleElem[0].innerHTML += "<h1>Legjobb dolgok</h1>";
  const list = [ { nev: "Maja",mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe", }, {nev: "Szandi", mondat: "Tudtam ültetni és van két virágom.", },{ nev: "Trapi", mondat: "Sikerült a Feast 1 teszt!" }, { nev: "Ernő", mondat: "Tegnap kialaudtam magam," }, { nev: "Bálint", mondat: "Kupcsik tanarnő vicces volt," }, {nev: "Arnold", mondat: "Lebetegedtem", }, {nev: "Benedek", mondat: "Tegnapi adatbázis-kezelés",}, { nev: "Balázs",mondat: "Újra elövettem egy régi játékot, amivel már rég játszottam és nosztalgikus érzéseket vált ki.", }, { nev: "Duy", mondat: "Felfrissít az edzés minden héten." }, ];
  megjelenit(list,articleElem);
  const szuloelem=document.querySelectorAll("section");
  megjelenit2(list,szuloelem);
  
  const tablazatelem=document.getElementById("tablazat");
  megjelenit3(list,tablazatelem)
}




function megjelenit(list,articleElem) {
    
    let txt="<table>";
    txt +="<tr>";
    for (let index = 0; index < list.length; index++) {
            txt+= "<td>" +list[index].mondat + "</td>"
            
        
    }
    txt +="</tr>";
    txt+= "</table>"
    articleElem[0].innerHTML += txt;
}

function megjelenit2(list,szuloelem){
    let text = "";
    
    for (let index = 0; index < list.length; index++) {
            text+="<div>"+"<h3>" + list[index].nev + "</h3>"+"<p>"+list[index].mondat + "</p>"+"</div>";
        
    }
    szuloelem[0].innerHTML+=text;
}
function megjelenit3(list,tablazatelem){
  let tablazat="<table>";
    for (let index = 0; index < list.length; index++) {
        tablazat+="<tr>";
        tablazat +="<td>"+ list[index].nev+"</td>" +"<td>"+ list[index].mondat +"</td>"
        tablazat+="</tr>";
      
    }
    tablazat +="</table>";
  tablazatelem.innerHTML +=tablazat
}
