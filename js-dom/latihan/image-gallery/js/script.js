// use Event Bubbling technique

const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function(e) {

    if ( e.target.className == "thumb" ) {

        // set jumbo image to the selected thumb
        jumbo.src = e.target.src;

        // give fadeIn animation to the selected thumb
        jumbo.classList.add("fade");
        
        setTimeout(function() {
            // reset fadeIn animation
            jumbo.classList.remove("fade");
        }, 500);

        thumbs.forEach(function(thumb) {
            
            // if ( thumb.classList.contains("active") ) {
            //    thumb.classList.remove("active");
            // }

        // reset opacity
        thumb.className = "thumb";

        });

        // set opacity to the selected thumb
        e.target.classList.add("active");
    }

});
