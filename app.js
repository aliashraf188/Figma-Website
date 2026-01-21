// hero section img swap

function swapImg(imgId, imgSrc) {
    // var image = document.getElementsByTagName('img')
    var image = document.getElementById(imgId).src = imgSrc
    .src = "https://img.drz.lazcdn.com/static/pk/p/498c9f11b57ad0758787e6df573fef8e.jpg_720x720q80.jpg"

    console.log('image=>', image);
}

// end



// cards btn 

var button = document.getElementsByClassName(btn).onclick = function(){
    alert("Product added to card")
}


// // DOM ke zariye sab buttons select kar lo
// var buttons = document.getElementsByClassName("btn");

// // Loop chalao aur click event lagao
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {
//         // Button ke parent se product name le lo
//         var productName = this.parentElement.querySelector("h2").innerText;
//         alert(productName + " added to cart!");
//     });
// }