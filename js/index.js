const servicios = document.querySelector("#servicios")
const portafolio = document.querySelector("#portafolio")

/*Menu Servicios*/

servicios.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS=document.querySelector(".servicios");
    sectionS.scrollIntoView({behavior:"smooth"});
})

/*Menu Portafolio*/

portafolio.addEventListener("click", (p) => {
    p.preventDefault();
    const sectionP=document.querySelector(".portafolio");
    sectionP.scrollIntoView({behavior:"smooth"});
})