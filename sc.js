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
        console.log(board);
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
    console.log(e.target.getAttribute('data-some'));
    if (e.target.getAttribute('data-some')== "fill"){ //наполнение корзины
        console.log("наполнить");
        basket.completion();
        console.log(basket.segments);
        basket.renderingBasket()
        basket.countBasketPrice();
    }
    
    if (e.target.getAttribute('data-some')== "clear"){ //очистка корзины
        console.log("очистить");
        basket.segments=[];
        let board = document.getElementById('basket');
        board.innerHTML = ` `;
        let total = document.getElementById('total');
        total.innerHTML = `Корзина пуста`;
        //getBasket();
    }
}
           
         
    