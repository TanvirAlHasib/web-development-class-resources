// variable declaretion and intro

const keys = document.querySelectorAll(".key");


// key listening and play audio

window.addEventListener("keydown", (e) => {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (audio) {

        // for every key hit make the audio rewind
        audio.currentTime = 0;

        // for playing the corresponding audio
        audio.play();

        // for adding effect after hiting the key
        key.classList.add("hit_effect");


    } else{

        alert("music have only a,s,d,f,g,h,j,k,l in these keys");

    };

});

// for disapearing the effect after transition

keys.forEach((key) => {

    key.addEventListener("transitionend", (e) =>{

        if (e.propertyName) {
            
            key.classList.remove("hit_effect");

        }

    });

});