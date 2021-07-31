/************************************
   == Copyright 2021 WebCodeTeam ==
*************************************/
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}        
function toggleThemelight() {
        setTheme('theme-light');
        setThemecolor('#FFFFFF');
    }
function toggleThemeauto() {
        setTheme('theme-auto');
        setThemecolor('#808080');
    }
function toggleThemedark() {
        setTheme('theme-dark');
        setThemecolor('#2B2B2B');
    }
function toggleThemecustom() {
        setTheme('theme-custom');
        setThemecolor('#808080');
        importTheme();
    }
function toggleThemenord() {
        setTheme('theme-nord');
        setThemecolor('#808080');
    }
function setThemecolor(color) {
        themeColor = document.getElementById('themeColor');
        themeColor.content = color;
}
(function() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');        
        setThemecolor('#2B2B2B');
    } 
    else if (localStorage.getItem('theme') === 'theme-light'){
        setTheme('theme-light');
        setThemecolor('#FFFFFF');
    }
    else if (localStorage.getItem('theme') === 'theme-custom'){
        setTheme('theme-custom');
        setThemecolor('#808080');
    }
    else if (localStorage.getItem('theme') === 'theme-nord'){
        setTheme('theme-nord');
        setThemecolor('#808080');
    }
    else {
        setTheme('theme-auto');
        setThemecolor('#808080');
    }
    
})();
var fontcolor;

var primarycolor;

var secondarycolor;

var buttoncolor;

var buttonhovercolor;

var accentcolor;

var defaultcolor = "#000001";

window.addEventListener("DOMContentLoaded", startup, false);

function startup() {

    if (document.getElementById('fontcolor')) {

        fontcolor = document.querySelector("#fontcolor");

        fontcolor.value = defaultcolor;

        fontcolor.addEventListener("change", fontcolorupdate, false);

        fontcolor.select();

        primarycolor = document.querySelector("#primarycolor");

        primarycolor.value = defaultcolor;

        primarycolor.addEventListener("change", primarycolorupdate, false);

        primarycolor.select();

        secondarycolor = document.querySelector("#secondarycolor");

        secondarycolor.value = defaultcolor;

        secondarycolor.addEventListener("change", secondarycolorupdate, false);

        secondarycolor.select();

        buttoncolor = document.querySelector("#buttoncolor");

        buttoncolor.value = defaultcolor;

        buttoncolor.addEventListener("change", buttoncolorupdate, false);

        buttoncolor.select();

        buttonhovercolor = document.querySelector("#buttonhovercolor");

        buttonhovercolor.value = defaultcolor;

        buttonhovercolor.addEventListener("change", buttonhovercolorupdate, false);

        buttonhovercolor.select();

        accentcolor = document.querySelector("#accentcolor");

        accentcolor.value = defaultcolor;

        accentcolor.addEventListener("change", accentcolorupdate, false);

        accentcolor.select();

        importTheme();
    }

}

function fontcolorupdate(event) {

    localStorage.setItem('fontcolor', event.target.value);

}

function primarycolorupdate(event) {

    localStorage.setItem('primarycolor', event.target.value);

}

function secondarycolorupdate(event) {

    localStorage.setItem('secondarycolor', event.target.value);

}

function buttoncolorupdate(event) {

    localStorage.setItem('buttoncolor', event.target.value);

}

function buttonhovercolorupdate(event) {

    localStorage.setItem('buttonhovercolor', event.target.value);

}
function accentcolorupdate(event) {

    localStorage.setItem('accentcolor', event.target.value);

}
function savecolors() {

    document.documentElement.style.setProperty('--color-font', localStorage.getItem('fontcolor'));

    document.documentElement.style.setProperty('--color-primary', localStorage.getItem('primarycolor'));

    document.documentElement.style.setProperty('--color-secondary', localStorage.getItem('secondarycolor'));

    document.documentElement.style.setProperty('--color-button', localStorage.getItem('buttoncolor'));

    document.documentElement.style.setProperty('--color-button-hover', localStorage.getItem('buttonhovercolor'));

    document.documentElement.style.setProperty('--color-accent', localStorage.getItem('accentcolor'));
}

window.addEventListener("DOMContentLoaded", setcolors, false);

function setcolors() {

    if (document.getElementById('fontcolor')) {

        document.getElementById('fontcolor').value = localStorage.getItem('fontcolor');

        document.getElementById('primarycolor').value = localStorage.getItem('primarycolor');

        document.getElementById('secondarycolor').value = localStorage.getItem('secondarycolor');

        document.getElementById('buttoncolor').value = localStorage.getItem('buttoncolor');

        document.getElementById('buttonhovercolor').value = localStorage.getItem('buttonhovercolor');

        document.getElementById('accentcolor').value = localStorage.getItem('accentcolor');
    }

}

function resetcolors() {

    fontcolor.value = defaultcolor;

    localStorage.removeItem('fontcolor');

    primarycolor.value = defaultcolor;

    localStorage.removeItem('primarycolor');

    secondarycolor.value = defaultcolor;

    localStorage.removeItem('secondarycolor');

    buttoncolor.value = defaultcolor;

    localStorage.removeItem('buttoncolor');

    buttonhovercolor.value = defaultcolor;

    localStorage.removeItem('buttonhovercolor');

    accentcolor.value = defaultcolor;

    localStorage.removeItem('accentcolor');

    fontcolorupdate(event);

    primarycolorupdate(event);

    secondarycolorupdate(event);

    buttoncolorupdate(event);

    buttonhovercolorupdate(event);

    accentcolorupdate(event);

    savecolors();
    importTheme();
}

function resetcolorsswitch() {

    localStorage.removeItem('fontcolor');

    localStorage.removeItem('primarycolor');

    localStorage.removeItem('secondarycolor');

    localStorage.removeItem('buttoncolor');

    localStorage.removeItem('buttonhovercolor');

    localStorage.removeItem('accentcolor');

    savecolors();
    importTheme();
}

function importTheme() {
    document.getElementById('import-theme').value = localStorage.getItem('fontcolor') + localStorage.getItem('primarycolor') + localStorage.getItem('secondarycolor') + localStorage.getItem('buttoncolor') + localStorage.getItem('buttonhovercolor') + localStorage.getItem('accentcolor');

}

(function() {

    savecolors();

})();