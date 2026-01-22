// hero section img swap

function swapImg(imgId, imgSrc) {
    // var image = document.getElementsByTagName('img')
    var image = document.getElementById(imgId).src = imgSrc
        .src = "https://img.drz.lazcdn.com/static/pk/p/498c9f11b57ad0758787e6df573fef8e.jpg_720x720q80.jpg"

    console.log('image=>', image);
}

// end


// about side

function fullPara() {
    var para = document.getElementById('paragraph').innerText =
        "BAYSIDE FINE JEWELRY is a celebration of timeless beauty, refined craftsmanship, and meaningful design.We are dedicated to creating fine jewelry that captures elegance and sophistication while remaining effortlessly wearable for everyday life and special occasions alike.Each piece is thoughtfully designed with attention to detail, using high - quality materials to ensure lasting brilliance, comfort, and durability. Our collections reflect a harmonious blend of classic inspiration and modern aesthetics, allowing every design to tell its own unique story.Whether it’s a delicate necklace, a statement ring, or a pair of elegant earrings, BAYSIDE FINE JEWELRY is crafted to enhance personal style and mark life’s most cherished moments.We believe jewelry should feel personal, expressive, and timeless—pieces that can be treasured today and passed on for generations to come. At BAYSIDE FINE JEWELRY, our commitment goes beyond beauty.We strive for excellence in quality, authenticity, and customer experience, ensuring that every creation embodies trust, artistry, and enduring value."
}




// cards btn 

// var button = document.getElementsByClassName(btn).onclick = function () {
//     // alert("Product added to card")
//     var btns = button
//     var alert = alert("Cart Added").btn
//     alert
// }


var cartBtns = document.querySelectorAll(".btn-primary");

cartBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

        var productName = btn
            .closest(".card")
            .querySelector(".card-title")
            .innerText;

        alert(productName + " added to cart!");
    });
});