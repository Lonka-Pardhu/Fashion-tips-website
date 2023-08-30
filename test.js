var containerDiv = document.createElement("div")
containerDiv.classList.add("headerContainer")

var innerDiv = document.createElement("div")
innerDiv.classList.add("header")
containerDiv.append(innerDiv)

var h1 = document.createElement("h1")
h1.classList.add("page-main-title")
h1.innerHTML = "Business Style"
innerDiv.append(h1)


var menuDiv = document.createElement("div")
menuDiv.classList.add("menu")
innerDiv.append(menuDiv)

// m = menu
var mChildDivs = 3;
for (var i = 0; i < mChildDivs; i++) {
    var mChild = document.createElement("div")
    menuDiv.append(mChild)
}

// styling
document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".headerContainer");
    container.style.margin = "0 auto";
    container.style.overflow = "hidden";

    var header = document.querySelector(".header")
    header.style.padding = "0";
    header.style.margin = "10px 0px";

    var h1 = document.querySelector(".page-main-title")
    h1.style.fontFamily = "Playfair Display, serif"
    h1.style.fontWeight = "400";
    h1.style.margin = "0";
    h1.style.fontSize = "1.875rem";
    h1.style.display = "inline-block"

    var menu = document.querySelector(".menu")
    menu.style.float = "right"
    menu.style.marginTop = "10px"
    menu.style.cursor = "pointer"


    var menuChilds = document.querySelectorAll(".menu > div")

    menuChilds.forEach(function (div) {
        div.style.height = "2.1px"
        div.style.width = "28px"
        div.style.backgroundColor = "white"
        div.style.margin = "5px"
    })


    menu.addEventListener('mouseover', function () {

        menuChilds.forEach(function (div) {
            div.style.backgroundColor = "rgb(158, 158, 158)"
        })
    })

    menu.addEventListener('mouseout', function () {

        menuChilds.forEach(function (div) {
            div.style.backgroundColor = "white";
        })
    })

    //queries for header container
    var small = 767;
    var medium = 1024;
    var large = 1200;

    window.addEventListener("resize", function () {
        var windowWidth = window.innerWidth;


        if (windowWidth >= small && windowWidth < medium) {
            container.style.width = "600px"
        }
        else if (windowWidth >= medium && windowWidth < large) {
            container.style.width = "960px"
        }
        else if (windowWidth >= large) {
            container.style.width = "1024px"
        }

    })

    var initialWidth = window.innerWidth;

    if (initialWidth >= small && initialWidth < medium) {
        container.style.width = "600px"
    }
    else if (initialWidth >= medium && initialWidth < large) {
        container.style.width = "960px"
    }
    else if (initialWidth >= large) {
        container.style.width = "1024px"
    }


    //menu/Nav 

    var sideNav = document.getElementById("side-nav")
    var overlay = document.querySelector(".overlay")
    var closeBtn = document.querySelector(".close-btn")

    menu.addEventListener("click", openNav)
    closeBtn.addEventListener('click', closeNav)
    overlay.addEventListener('click', closeNav)

    function openNav() {
        sideNav.style.width = "250px"
        overlay.style.visibility = "visible"
        document.body.style.overflow = "hidden"
    }

    function closeNav() {
        sideNav.style.width = "0"
        overlay.style.visibility = "hidden"
        document.body.style.overflow = "auto"
    }

});


var initial = document.getElementById("learning-js");
initial.append(containerDiv)











// document.addEventListener('DOMContentLoaded', () => {
//     const containers = document.querySelectorAll('.container');
//     containers.forEach(container => {
//         container.addEventListener('click', () => {
//             alert('Clicked');
//         });
//     });
// });
