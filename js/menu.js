/**
 * Created by luis on 16/07/17.
 */


var navbarItems = document.getElementsByClassName('navbar-item');

for (var i = 0; i < navbarItems.length; i++) {
    navbarItems[i].addEventListener('click', function (event) {
        var sectionToGo = this.getElementsByTagName('a')[0].href.split("#");
        console.log(sectionToGo);
        deleteActiveClass();
        this.classList.add('active');

        if (sectionToGo.length === 2) {
            event.preventDefault();
            var goTo = sectionToGo[sectionToGo.length - 1];
            getElementByIdAndScroll(goTo);
        }
    });
}

function getElementByIdAndScroll (id) {
    var elem;
    if (id === '') {
        elem = document.getElementsByClassName('header')[0];
    } else {
        elem = document.getElementById(id);
    }

    scrollToElement(elem);
}

function scrollToElement (element) {
    var jump = parseInt(element.getBoundingClientRect().top * 0.3);
    document.body.scrollTop += jump;

    if (!element.lastJump || element.lastJump > Math.abs(jump)) {
        setTimeout(function() {

            element.lastJump = Math.abs(jump);
            scrollToElement(element);
        }, 40);
    } else {
        element.lastJump = null;
    }
}

function deleteActiveClass() {
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
}

var acumulativeOffset = function (element) {
    var top = 0;

    do {
        top += element.offsetTop || 0;
        element = element.offsetParent;
    } while (element);

    return top;
}

var offsetAboutMe = acumulativeOffset(document.getElementById('about-me')) - 56;
var offsetSkills = acumulativeOffset(document.getElementById('skills')) - 56;
var offsetExperience = acumulativeOffset(document.getElementById('experience')) - 56;
var offsetEducation = acumulativeOffset(document.getElementById('education')) - 56;
var offsetContact = acumulativeOffset(document.getElementById('contact')) - 56;
var offsetAjax = acumulativeOffset(document.getElementById('ajax')) - 56;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

var previous;
function changeMenuStyle(event) {
    var pageOffset = window.pageYOffset;
    if (pageOffset >= 0 && pageOffset < offsetAboutMe) {
        if (!previous || previous !== 1) {
            previous = 1;
        } else if (previous === 1){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='cover']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetAboutMe && pageOffset < offsetSkills) {
        if (!previous || previous !== 2) {
            previous = 2;
        } else if (previous === 2){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='about-me']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetSkills &&  pageOffset < offsetExperience) {
        if (!previous || previous !== 3) {
            previous = 3;
        } else if (previous === 3){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='skills']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetExperience &&  pageOffset < offsetEducation) {
        if (!previous || previous !== 4) {
            previous = 4;
        } else if (previous === 4){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='experience']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetEducation &&  pageOffset < offsetContact) {
        if (!previous || previous !== 5) {
            previous = 5;
        } else if (previous === 5){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='education']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetContact &&  pageOffset < offsetAjax) {
        if (!previous || previous !== 6) {
            previous = 6;
        } else if (previous === 6){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='contact']").parentNode.classList.add("active");
    } else if (pageOffset >= offsetAjax &&  pageOffset < offsetAjax) {
        if (!previous || previous !== 7) {
            previous = 7;
        } else if (previous === 7){
            return false;
        }

        deleteActiveClass();
        document.querySelector("a[href$='ajax']").parentNode.classList.add("active");
    }


}