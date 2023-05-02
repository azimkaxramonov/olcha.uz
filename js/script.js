let products_container = document.querySelector('.products-container')

let product_card = document.createElement('div')
let product_box = document.createElement('div')
let product_img = document.createElement('img')
let product_actions = document.createElement('div')
let product_img_heart = document.createElement('img')
let product_img_basic = document.createElement('img')
let product_content = document.createElement('div')
let product_name = document.createElement('div')
let product_price = document.createElement('div')
let product_installment = document.createElement('div')
let product_buttons = document.createElement('div')
let button_basket = document.createElement('button')
let button_basket_img = document.createElement('img')
let button_installment = document.createElement('button')


product_card.classList.add('product_card')
product_box.classList.add('product_box')
product_img.classList.add('product_img')
product_actions.classList.add('product_actions')
product_content.classList.add('product_content')
product_name.classList.add('product_name')
product_price.classList.add('product_price')
product_installment.classList.add('product_installment')
product_buttons.classList.add('product_buttons')
button_basket.classList.add('button_basket')
button_installment.classList.add('button_installment')

product_name.innerHTML = 'Смартфон Xiaomi Redmi Note 11 Pro 128GB 8 GB Grey'
product_price.innerHTML = "3 803 000 сум"
product_installment.innerHTML = '634 000 сум x 6 мес'
button_installment.innerHTML = 'В рассрочку'
product_img_heart.src = 'img/heart.png'
product_img_basic.src = "img/free-icon-volume-bars-73586 (1).png"
product_img.src = 'https://olcha.uz/image/220x220/products/2022-06-13/smartfon-xiaomi-redmi-note-11-pro-128gb-8-gb-grey-58466-0.jpeg'
button_basket_img.src = 'img/free-icon-shopping-cart-711897.png'

products_container.append(product_card)
product_card.append(product_box, product_content,)
product_box.append(product_img,product_actions)
product_actions.append(product_img_heart,product_img_basic)
product_content.append(product_name,product_price,product_installment,product_buttons)
product_buttons.append(button_basket,button_installment)
button_basket.append(button_basket_img)

