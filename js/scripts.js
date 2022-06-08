/*!
* Start Bootstrap - Simple Sidebar v6.0.5 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        //Uncomment Below to persist sidebar toggle between refreshes
        if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
            document.body.classList.toggle('sb-sidenav-toggled');
        }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

document.addEventListener("DOMContentLoaded", function () {
    const arr = [document.getElementById("coffe"), document.getElementById("food"), document.getElementById("zestawy"), document.getElementById("form_zestaw"), document.getElementById("gallery")];
    const arr2 = ["pages/kawy.html", "pages/jedzenie.html", "pages/zestaw_show.html", "pages/zestaw_forms.html", "pages/gallery.html"];
    
 for (let i = 0; i < arr.length; i++)
 {
     arr[i].addEventListener('click', function () {
             fetch(arr2[i])
                 .then(response => {
                     return response.text();
                 })
                 .then(dane => {
                     document.getElementById("mainPage").innerHTML = dane;
                 })
         },
         false);
 }
})



