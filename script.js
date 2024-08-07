const imageContainerEl = document.querySelector( ".image-container" );


const btnEl = document.querySelector( ".btn" );

btnEl.addEventListener( "click", newImages)
let index = 3
let counter = 6
function newImages ()
{
    for ( index ; index < counter ; index++){
        if (index <= 43) {
            const newImage = document.createElement( "img" );
            newImage.src = `Images/Portfolio${ index }.jpg`;
            imageContainerEl.appendChild( newImage );
            
        }
    }
    counter += 4
}
        
window.addEventListener('load', function() {
    loadingScreen.style.display = 'none';
} );

var load = document.getElementById( "loading" );
function loadfun() {
    load.style.display = 'none'
}