class Item {
    name = ''
    price = 0
    img = ''
    count = 1

    constructor(name, price, img) {
        this.name = name
        this.price = price
        this.img = img
    }

    inc() {
        this.count++
    }

    dec() {
        this.count-- 
    }

    getAddInBasketBtn() {
        const btn = document.createElement('div')
        btn.classList.add('btn_in_basket')
        btn.innerHTML = 'Купить'

        btn.addEventListener('click', () => {

            const BasketInstance = new Basket()
            BasketInstance.add(this)

            console.log(BasketInstance)

        })

        return btn
    }

    getMainTemplate() {
        const { name, price, img } = this

        const wrapper = document.createElement('div')
        wrapper.classList.add('.shop_product')
        wrapper.innerHTML = ` 
        <div>
        <div class = " shop_img " >
            <img  src = "${img}" class = "shop_img_pruduct" />
       </div> 

       <div class = " shop_item "> <span> ${name} </span>  </div>
       <div class = " shop_price " > <span> ${price} </span>  </div>

        </div>
       
        `

        wrapper.appendChild(this.getAddInBasketBtn())


        return wrapper

    }

    getMinusBtn() {
        const btn = document.createElement('div')
        btn.classList.add('btn_minus')
        btn.innerHTML = '-'

        btn.addEventListener('click',  () => {
            const BasketInstance = new Basket()
            BasketInstance.remove(this)

            console.log(BasketInstance)

        })

        return btn
    }

    getBasketTemplate() {
        const { name, price, img, count } = this

        const wrapper = document.createElement('div')
        wrapper.classList.add('.shop_product_basket')
        wrapper.innerHTML = ` 
        
        <div class = " shop_img " >
            <img  src = "${img}" class = "shop_img_pruduct_basket" />
       </div> 
        <span class = " shop_item_basket "> ${name}: ${price} x ${count} = ${price * count }    </span>  
      

        
       
        `

        wrapper.appendChild(this.getMinusBtn())

        return wrapper

    }


}

class List {

    items = []

    constructor(items = []) {
        this.items = items
    }

    findGood(good) {
        return this.items.filter(item => item.name === good.name)[0]
    }
    add(item) {
        const exists = this.findGood(item)
        if (exists) {
            exists.inc()
        } else {
            this.items.push(item)
        }

        this.render()
    }

    remove (item) {
        const exists = this.findGood(item)
        if(!exists){
            return
        }
        if (exists.count > 1 ) {
            exists.dec()
        } else {
            this.items = this.items.filter(good => item.name !== good.name)
        }
        this.render()
    }

    render() {

    }

}

class Basket extends List {

    constructor(items) {

        if (Basket._instance) {
            return Basket._instance
        }
        super(items)
        this.init()

        Basket._instance = this
    }

    init() {
        const block = document.createElement('div')
        block.classList.add('basket_block')

        const btn = document.createElement('div')
        btn.innerHTML = 'Корзина'
        btn.classList.add('basket_btn')

        const list = document.createElement('div')
        list.classList.add('basket_list')
       

        btn.addEventListener('click', () => {

            list.classList.toggle('shown')

        })

        block.appendChild(btn)
        block.appendChild(list)

        const PlaceToRender = document.querySelector('.header')

        if (PlaceToRender) {
            PlaceToRender.appendChild(block)
        }



        this.render()

    }

    getSumBasket() {
        const sum = this.items.reduce((sum,good) => {

            return sum + good.price*good.count

        },0)

        const block = document.createElement('div')
        block.classList.add('basket_sum')
        block.innerHTML = ` Суммарная цена = ${sum} `

        return block
    }

    getEmtyTemplateBasket() {
        

        const block = document.createElement('div')
        block.classList.add('basket_emty')
        block.innerHTML = ` Корзина пуста `

        return block
    
    }

    render() {
        const PlaceToRender = document.querySelector('.basket_list')
        if (!PlaceToRender) {
            return
        }

        PlaceToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getBasketTemplate()
            PlaceToRender.appendChild(template)
        })

        if(this.items.length) {
            PlaceToRender.appendChild(this. getSumBasket())
        } else{
            PlaceToRender.appendChild(this. getEmtyTemplateBasket())
        }
        
    }

}

class ListItem extends List {

    constructor(items) {
        super(items)
    }

    render() {
        const PlaceToRender = document.querySelector('.shop')
        if (!PlaceToRender) {
            return
        }

        PlaceToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getMainTemplate()
            PlaceToRender.appendChild(template)
        })
    }

}

const Good = new Item('Computer', 10000, "img/computer-apple3.jpg")
const Good2 = new Item('Acer', 15000, "img/computer-apple3.jpg")
const Good3 = new Item('Phone', 30000, "img/computer-apple3.jpg")

const ListItemIstance = new ListItem()

ListItemIstance.add(Good)
ListItemIstance.add(Good2)
ListItemIstance.add(Good3)

ListItemIstance.render()

const BasketInstance = new Basket()

