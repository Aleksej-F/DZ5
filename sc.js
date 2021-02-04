'use strict';

function getBoard(){ //создание окна шахматной доски
    let board = document.getElementById('board');
    
    board.innerHTML = '';
    board.className = 'board';
    const srt = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];
    let shet = 1;
    for (let i=0; i<10; i++) {
        for (let j=0; j<10; j++) {
            let cell = document.createElement('div');
            if ((i === 0) || (i === 9))  {
                if (j !== 0) {
                    cell.classList.add('cell','columns');
                    cell.innerHTML ='<p>' + srt[j-1] + '</p>' ;
                }
            } else {
                if ((j === 0) || (j === 9) ){
                    cell.classList.add('cell','lines');
                    cell.innerHTML = (` <p>  ${9 - i} </p> `);
                } else {
                    if (shet % 2) {
                        cell.classList.add('cell','black');
                    } else {
                        cell.classList.add('cell','white');
                    }
                    shet++;
                }
            }
            board.appendChild(cell);
        }
        shet++;
    } 
}   

function getBasket() {  //создание окна корзины
    let board = document.getElementById('board');
    board.className = 'basketwin';
    board.innerHTML = ` `;

    let productMarkup = `   
        <div class="product productzagl">
            <div>Наименование</div>
            <div>Колличество</div>
            <div>Цена</div>
        </div>
        <div id="basket"></div>
        <div class="productnav">
            <div id="total">Корзина пуста</div>
            <div class="butt"><button data-some="fill">Наполнить</button> <button data-some="clear">Очистить</button></div>
        </div>
    `;          // разметка корзины
               
    board.insertAdjacentHTML("afterbegin", productMarkup);
    
    const buttons = document.querySelectorAll('button'); //
    
    buttons.forEach(function(button) {   
        button.addEventListener('click', myCompl);   // вешаем слушатель на кнопки по клику
      
    });
}   

function catalog() { // созадние окна каталога
    
    let board = document.getElementById('board');
    board.className = 'catalog';
    board.innerHTML = ` `;
    let y = Math.floor(Math.random() * (4) );
    for (let a = y; a < y+4; a++){
        let productMarkup = `   
        <div class="product-cont-elem">
            <img src="${catalogis.segments[a].img}" alt="">
            <div class="product-cont-elem-img">
                <div class="product-cont-elem-img-1" data="${a}">
                    <img src="img/forma_1_copy_1287.png" alt="">
                    <p>Add to Cart</p>
                </div>
            </div>
            <div class="product-cont-elem-text">
                <p class="product-cont-img-p1">${catalogis.segments[a].title}</p>
                <p class="product-cont-img-p2">$${catalogis.segments[a].price}</p>
            </div>
        </div>
        `;          // разметка каталога
        
        board.insertAdjacentHTML("beforeend", productMarkup);

    }
    const butt = document.getElementsByClassName('product-cont-elem-img-1'); //
    
    for (let i=0; i< butt.length; i++) {   
        butt[i].addEventListener('click', myClickToBasket);   // вешаем слушатель на кнопки по клику
      
    };
}

class Basket {  // корзина
    constructor() {
        this.segments = [];
    }
    completion() {  // наполнение корзины
        let a = Math.floor(Math.random() * (6) + 1);     // колличество товаров в корзине
        let title = ['кросовки', 'тапки', 'футболка', 'джинсы'];
        for (let i = 0; i < a; i++) {
            let productName = Math.floor(Math.random() * (3));            // выбор товара
            let quantity = Math.floor(Math.random() * (10) + 1);         // штук
            let productPrice = Math.floor(Math.random() * (300) + 50);  // цена
            this.segments.push(new Product(title[productName], quantity, productPrice));
        }
    }
    renderingBasket(){  // отрисовка корзины
        let basket = document.getElementById('basket');
        basket.innerHTML = '';
        for (let i = 0; i<this.segments.length; i++ ){
        let productBasket = `
            <div class="product">
            <div>${this.segments[i].title}</div>
            <div>${this.segments[i].quantity}</div>
            <div class="price">${this.segments[i].price}</div>
            </div>
            `;
            
            basket.insertAdjacentHTML("beforeend", productBasket);
        }
    }
    countBasketPrice(){     // подсчет стоимости товара в корзине
        let total = 0;
        let quantity = 0;
        for (let i = 0; i<this.segments.length; i++ ){
            total += this.segments[i].quantity * this.segments[i].price;
            quantity += this.segments[i].quantity;
        }
        let board = document.getElementById('total');
        
        board.innerHTML = `В корзине: ${quantity} товаров на сумму ${total} рублей`;
    }
} 
            
class Product {  // продукт
    constructor(title, quantity, price) {
        this.title = title;
        this.quantity = quantity;
        this.price = price;
    }
}
            
let basket = new Basket();  //создаем корзину 

function  myCompl(e) {     // клик по кнопкам
    //console.log(e.target.getAttribute('data-some'));
    if (e.target.getAttribute('data-some')== "fill"){ //наполнение корзины
        //console.log("наполнить");
        basket.completion();
        basket.renderingBasket()
        basket.countBasketPrice();
    }
    
    if (e.target.getAttribute('data-some')== "clear"){ //очистка корзины
        //console.log("очистить");
        basket.segments=[];
        let board = document.getElementById('basket');
        board.innerHTML = ` `;
        let total = document.getElementById('total');
        total.innerHTML = `Корзина пуста`;
        //getBasket();
    }
}

let catalogis = {
    segments: [
        {img: "img/rectangle_1.jpg",
            title: "rrrrr1",
            price: 200 },
        {img: "img/rectangle_2.jpg",
            title: "ytut2",
            price: 300 },
        {img: "img/rectangle_3.jpg",
            title: "fgh3",
            price: 400 },
        {img: "img/rectangle_4.jpg",
            title: "ghjrr4",
            price: 500 },
        {img: "img/rectangle_5.jpg",
            title: "rrrrr5",
            price: 600 },
        {img: "img/rectangle_6.jpg",
            title: "rrrrr6",
            price: 700 },
        {img: "img/rectangle_7.jpg",
            title: "rrrrr7",
            price: 800 },
        {img:"img/rectangle_8.jpg",
            title: "rrrrr8",
            price: 900 },
    ]
};

       
  function myClickToBasket(params) {
    console.log('catalogis  '+this.getAttribute('data'));
  }  