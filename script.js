const rightDiv = document.getElementById("second-card");

function enableDesktopScroll() {

    if(window.innerWidth > 840){

        document.body.style.overflow = "hidden";

        window.addEventListener("wheel", handleScroll);

    }
    else{

        document.body.style.overflow = "auto";

        window.removeEventListener("wheel", handleScroll);

    }
}

function handleScroll(e){

    rightDiv.scrollTop += e.deltaY;

}

enableDesktopScroll();

window.addEventListener("resize", enableDesktopScroll);