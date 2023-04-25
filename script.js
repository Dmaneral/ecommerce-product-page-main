let open_menu = document.getElementById('open-menu');
let close_menu = document.getElementById('close-menu');

let nav = document.getElementsByTagName('nav');
let list = document.getElementsByTagName('ul');

let cart_section = document.getElementById('cart-section');
let cart_full = document.getElementById('cart-content-added');
let cart_empty = document.getElementById('cart-empty');
let cart_icon = document.getElementById('cart');
let cart_product = document.getElementById('cart-product');
let cart_equantity = document.getElementById('equantity-cart');
let cart_price = document.getElementById('full-price-cart');
let cart_add = document.getElementById('add-cart');
let cart_delete = document.getElementById('delete');
let cart_checkout = document.getElementById('checkout');
let notif = document.getElementById('notif');

let prev = document.getElementById('prev');
let next = document.getElementById('next');

let img_cont = document.getElementById('image-cont');

let img = document.getElementById('img');
let lightbox = document.getElementById('lightbox');
let thumbs = document.querySelectorAll('.thumb');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let price = document.getElementById('price');
let old_price = document.getElementById('old-price');
let equantity = document.getElementById('number');

cart_icon.addEventListener('click', cartMenuToggle);
cart_add.addEventListener('click', addToCart);
cart_delete.addEventListener('click', removeFromCard);
cart_checkout.addEventListener('click', removeFromCard);

plus.addEventListener('click', plusEq);
minus.addEventListener('click', minusEq);

open_menu.addEventListener('click', menuToggle);
close_menu.addEventListener('click', menuToggle);

prev.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);



thumbs.forEach(function (val) {
    val.addEventListener("click", handleClick);
});

function handleClick(event) {
    thumbs.forEach((val, i) => {
        val.classList.remove("thumbnail-active");

        if(event.target == val) {
            val.classList.add("thumbnail-active"); 
            img.src = `./images/image-product-${i+1}.jpg`;   
            
        }
    });
}

function menuToggle(e) {
    if(e.target == open_menu) {
        open_menu.classList.add('disappear');
        close_menu.classList.remove('disappear');
        list[0].style.transform = 'translateX(0)';
        list[0].style.boxShadow = '150px 0 35px 35px rgba(0, 0, 0, 0.5)';
    }

    if(e.target == close_menu) {
        open_menu.classList.remove('disappear');
        close_menu.classList.add('disappear');
        list[0].style.transform = 'translateX(-101%)';
        list[0].style.boxShadow = 'none';
    }
}

let numImg = 1;

function nextImg() {
    if(numImg == 4) {
        numImg = 1;
    }else {
        numImg++;
    }

    img.src = `./images/image-product-${numImg}.jpg`;
}

function prevImg() {
    if(numImg == 1) {
        numImg = 4;
    }else {
        numImg--;
    }

    img.src = `./images/image-product-${numImg}.jpg`;
}

function minusEq() {
    equantity.innerHTML -= 1;
    
    if(equantity.innerHTML < 0) {
        equantity.innerHTML = 0;
    }
    updateEq();
}

function plusEq() {
    equantity.innerHTML = parseInt(equantity.innerHTML) + 1;
    updateEq();
}

function updateEq() {
    old_price.innerHTML = equantity.innerHTML * 250;
    price.innerHTML = old_price.innerHTML / 2;
}

let count = 1;
function cartMenuToggle() {
    if(count % 2 == 0) {
        cart_section.style.display = 'none';
    }else {
        cart_section.style.display = 'flex';
    }
    count++;
}

function addToCart() {
    cart_equantity.innerHTML = equantity.innerHTML; 
    cart_price.innerHTML = equantity.innerHTML * 125;
    if(equantity.innerHTML > 0) {
        cart_empty.style.display = 'none';
        cart_full.style.display = 'flex';
        cart_section.style.minHeight = '25.6rem';
        notif.style.display = 'flex';
        notif.innerHTML = equantity.innerHTML;
    }
}

function removeFromCard() {
    cart_empty.style.display = 'block';
    cart_full.style.display = 'none';
    cart_section.style.height = '25.6rem';
    notif.style.display = 'none';
}