const images = [
    "https://s2.glbimg.com/wB2k5I1ty4iVdwzurRl40rcoSqo=/e.glbimg.com/og/ed/f/original/2017/07/20/beach-1790049_960_720.jpg",
    "https://love.doghero.com.br/wp-content/uploads/2019/09/Corgi-1.jpg-1.jpg",
    "https://www.petz.com.br/blog/wp-content/uploads/2019/03/cachorro-mini-pet.jpg",
    "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2024/02/18/1149456647-maltescachorro.jpeg"
];


var controllerIndex = 0;

function nextImage() {

    controllerIndex = controllerIndex + 1;

    if (controllerIndex >= images.length) {
        controllerIndex = 0;
    }

    renderImage();

}


function previousImage() {
    controllerIndex = controllerIndex - 1;

    if (controllerIndex < 0) {
        controllerIndex = images.length;
    }

    renderImage();
    
}


function renderImage() {
    var imageGalery = document.getElementById('image');

    imageGalery.innerHTML = `<img src="${images[controllerIndex].toString()}" alt="" width="300"></img>` 

}





