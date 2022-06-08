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
                     document.getElementById("mainContent").innerHTML = dane;
                 })
         },
         false);
 }
})
