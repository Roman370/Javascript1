

/// Задание№1
/*
function chessBoard() {
    let board = document.querySelector('.board');
    let block;
    let cellColor = true; 

    for (let i = 0; i < 8; i++) {

        for (let j = 0; j < 8; j++) {

            if (j == 0){
                cellColor = !cellColor;
            }

            block = document.createElement('div');

            if (cellColor) {
                block.className = 'block black';
            }
            else {
                block.className = 'block white';
            }
            
            board.appendChild(block);

            
            cellColor = !cellColor;
        }
    }
}

chessBoard();
*/


// Задание №2 
/*
class Basket {
    _basket = [];

    constructor(...items) {
        this._basket.push(...items);
    }

    addItem(item) {
        this._basket.push(item);

    }

    calcTotalPrice() {
        return this._basket.reduce(function (result, curItem) {
            return result + curItem.price;
        }, 0)
    }

    outputProd() {
        this.forEach(name => {
            const productBasket = document.createElement('p');
            productBasket.innerText = name;
            productBasket.classList.add('basket_block_product');
            basketBlock.appendChild(productBasket);
        })
    }



}


class Item {

    _name = '';
    _price = 0;

    get price() {
        return this._price;
    }

    constructor(name, price) {
        this._name = name;
        this._price = price;
    }





} 
     */

// Совместить вывод товара и подсчет цены из одного массива не получается((. 

/*
const product = ['Samsung', 'LG', 'Sony','Sharp','Panasonic'];

const basketBlock = document.querySelector('.basket_block');

product.forEach(name => {
    const productBasket = document.createElement('p');
    productBasket.innerText = name;
    productBasket.classList.add('basket_block_product');
    basketBlock.appendChild(productBasket);
})

document.write('Кол-во ' + product.length ); */



// Отдельно вывести стоимость товара получается, а вывести список товаров из такого массива не получается.

//const prod = new Basket(new Item('Samsung', 30000), new Item('LG', 15000), new Item('Sony', 15000));
//const priceProd = prod.calcTotalPrice();













