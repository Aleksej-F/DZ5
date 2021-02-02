'use strict';

function getBoard(){
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

function getBasket() {
    let board = document.getElementById('board');
    board.className = 'basket';
    board.innerHTML = ` `;
}    
            
            
    class Basket {  // корзина
        constructor() {
            this.segments = [];
        }
        completion() {  // наполнение корзины
            let a = Math.floor(Math.random() * (6) + 1); // колличество товаров в корзине
            let title = ['кросовки', 'тапки', 'футболка', 'джинсы'];
            for (let i = 0; i < a; i++) {
                let b = Math.floor(Math.random() * (3));        // выбор товара
                let c = Math.floor(Math.random() * (10) + 1);   // штук
                let d = Math.floor(Math.random() * (300) + 50); // цена
                this.segments.push(new Product(title[b], c, d));
            }
        }
        countBasketPrice(){ // подсчет стоимости товара в корзине
            let total = 0;
            for (let i = 0; i<this.segments.length; i++ ){
                total += this.segments[i].quantity * this.segments[i].price;
            }
            return total;
        }
    } 
            
    class Product {  // продукт
        constructor(title, quantity, price) {
            this.title = title;
            this.quantity = quantity;
            this.price = price;
        }
    }
            
           // let basket = new Basket();

          //  basket.completion();
          //  let total = basket.countBasketPrice();
         //   console.log(basket);
         //   console.log(total);
            

          //  alert('Общая сумма к оплате  ' + total);
       
    