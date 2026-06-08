const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("true");

        }
        else{

            entry.target.classList.remove("true");

        }

    });

});

const el = document.querySelectorAll(".show");

el.forEach((x) => observer.observe(x));


// ================= EMAIL =================

emailjs.init("DcJOh8WGF_JuvEqt3");

const submitBtn = document.getElementById("submit-div");

submitBtn.addEventListener("click", () => {

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const budget = document.getElementById("budget").value;

    const description = document.getElementById("description").value;

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!pattern.test(email)){

        alert("Enter Valid Email");

        return;

    }

    if(name === "" || description === ""){

        alert("Fill All Fields");

        return;

    }

    emailjs.send(
        "service_3tn1ulg",
        "template_qxre1od",
        {
            name:name,
            email:email,
            budget:budget,
            description:description
        }
    )

    .then(() => {
         
      alert("mail sent")
    })

    .catch((error) => {

        console.log(error);

    });

});


// ================= SMOOTH SCROLL =================

const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {

    document
    .getElementById("contact-section")
    .scrollIntoView({
        behavior:"smooth"
    });

});


const projectsBtn = document.getElementById("projects-btn");

projectsBtn.addEventListener("click", () => {

    document
    .getElementById("projects-section")
    .scrollIntoView({
        behavior:"smooth"
    });

});


if (window.innerWidth > 400) {
    const homeBtn = document.getElementById("home-btn");

  homeBtn.addEventListener("click", () => {

    document
    .getElementById("home-scroll")
    .scrollIntoView({
        behavior:"smooth"
    });

});
}else{
    const homeBtn = document.getElementById("home-btn");

  homeBtn.addEventListener("click", () => {

    document
    .getElementById("lala")
    .scrollIntoView({
        behavior:"smooth"
    });

}); 
}

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