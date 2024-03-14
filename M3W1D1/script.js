/* JS Exercises should go here */

        // EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
        // EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".
        // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

// console.log('ciao');        

// ESERICIZIO 1 EXTRA

document.addEventListener("DOMContentLoaded", function () {
        let listaElementiDaEliminare = document.querySelectorAll("aside .list-unstyled li");

        listaElementiDaEliminare.forEach(function (li) {
                let linkTwitter = li.querySelector('a');

                if (linkTwitter.textContent === "Twitter") {
                        li.remove();
                }
        })
})

// window.onload = function () {
//         let twitter = document.querySelector('.blog-sidebar div:nth-child(3) .list-unstyled li:nth-of-type(2)');
//         twitter.remove();        
// }



// ESERCIZIO 2 EXTRA

// seleziono tutti i links
const continuaALeggereLinks = document.querySelectorAll('.stretched-link');

// devo ciclare tutti i link
continuaALeggereLinks.forEach(function (link) {
        // creo l'event listener click per tutti i link
        link.addEventListener('click', function () {
                // stabilisco l'elemento padre dei link
                let contenitoreLiks = this.parentElement;
                contenitoreLiks.parentElement.remove();
        });
        
});



// ESERCIZIO 3 EXTRA

// seleziono tutti gli autori
