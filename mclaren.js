// toggle menu
function toggleMenu() {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");
    menu.classList.toggle("active");
    nav.classList.toggle("active");
}

// change background video while clicking on the image
function changeVideo(name) {

    const bgVideoList = document.querySelectorAll(".bg-video");
    const trailer = document.querySelectorAll(".trailer");
    const model = document.querySelectorAll(".model");



    // javascrpt higher order array functions for each
    // this is easier to do data mapping
    bgVideoList.forEach((video) => {
        video.classList.remove("active");
        if (video.classList.contains(name)) {
            video.classList.add("active");
        }
    });

    // mapping the model name to the video name

    model.forEach((model) => {
        model.classList.remove("active");
        if (model.classList.contains(name)) {
            model.classList.add("active");
        }
    });

    // mapping the trailer name to the video name
    trailer.forEach((trailer) => {
        trailer.classList.remove("active");
        if (trailer.classList.contains(name)) {
            trailer.classList.add("active");
        }
    });

}
