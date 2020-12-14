let data = [
    {
        "name": "Маргарита",
        "price": "110 грн.",
        "weight": "150 г",
        "picture": "https://km-doma.ru/assets/gallery_thumbnails/31/319484a4bb725e4eacab62c7f0c7f1ed.jpg",
        "main_ingredients": ['томатная паста', 'базилик', 'моцарелла']
    }, {
        "name": "Пепперони",
        "price": "145 грн.",
        "weight": "150 г",
        "picture": "https://vkuso.ru/data/picca-pepperoni-na-drozhzhevom-teste.jpg",
        "main_ingredients": ['томатная паста', 'салями', 'моцарелла']

    }, {
        "name": "Капричиоза",
        "price": "130 грн.",
        "weight": "180 г",
        "picture": "https://yummypizza.ru/images/library/sc_1/65/medium_kaprichoza.jpg?1556628624",
        "main_ingredients": ['шампиньоны', 'маринованные помидоры черри', 'оливки', 'ветчина', 'моцарелла']

    }, {
        "name": "Неаполитанская",
        "price": "140 грн.",
        "weight": "250 г",
        "picture": "https://www.chefmarket.ru/blog/wp-content/uploads/2019/08/neapolitan-pizza-recipe-e1565951728830.jpg",
        "main_ingredients": ['анчоусы', 'свежие томаты', 'базилик', 'моцарелла']

    }, {
        "name": "Сицилийская",
        "price": "115 грн.",
        "weight": "100 г",
        "picture": "https://fishrice.od.ua/image/cache/catalog/picca/sicilia-520x350h.jpg",
        "main_ingredients": ['сыр Пекорино', 'анчоусы', 'помидоры', 'лук', 'зелень', 'оливки', 'грибы']

    },
    {
        "name": "Пицца с морепродуктами",
        "price": "155 грн.",
        "weight": "160 г",
        "picture": "https://lh5.googleusercontent.com/dW9MQSObavamZ_T9m1OdsyaEO4PHDZfB1kvR_jFL0U2kwyRwnxl_2aUYkUEV_qD3rRpPuLYgDsR-lzdQ_KNUl3vviLHjAUkaXrOThU2Ce4e0MDu1dGG9OzJZYaYvQWO94LC1qAzm",
        "main_ingredients": ['кальмары', 'креветки', 'мидии', 'осьминоги', 'сливочный соус', 'моцарелла', 'зеленью']

    }, {
        "name": "Дьябола",
        "price": "125 грн.",
        "weight": "140 г",
        "picture": "https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D0%BD%D0%B5%D1%86-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%B4%D0%B8%D0%B0%D0%B1%D0%BB%D0%BE-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D1%80%D1%8F%D0%B4%D0%BE%D0%BC-%D1%81-%D0%BF%D0%B5%D1%80%D1%86%D0%B0%D0%BC%D0%B8-%D0%B8-condiments-145510153.jpg",
        "main_ingredients": ['пепперони', 'бекон', 'болгарскому перцу', 'моцарелла', 'соус Ширачи']

    }, {
        "name": "Кальцоне",
        "price": "110 грн.",
        "weight": "90 г",
        "picture": "https://cdn.segodnya.ua/img/article/11873/67_ls.1541771992.jpg",
        "main_ingredients": ['томатная паста', 'базилик', 'моцарелла', 'пепперони', 'грибы']

    },
]

let elementOfPicture = 0;
const mainEl = document.querySelector('[data-content="select"]')
const slideData = document.querySelector('[data-content="image"]')
let count = 1
let paramSortByPrice = true;
let paramSortByIngridients = true;


function clickPrice() {
    // console.log('clickPrice');
    console.log(data.sort((a, b) => {
        if (paramSortByPrice ? parseInt(a.price) > parseInt(b.price) : parseInt(a.price) < parseInt(b.price)) return 1;
        if (parseInt(a.price) == parseInt(b.price)) return 0;
        if (paramSortByPrice ? parseInt(a.price) < parseInt(b.price) : parseInt(a.price) > parseInt(b.price)) return -1;
    }))
    paramSortByPrice = !paramSortByPrice;

    mainEl.innerHTML = buildByTemplate(data);
}

function clickIngridients() {
    data.sort((a, b) => {
        if (paramSortByIngridients ? parseInt(a.main_ingredients.length) > parseInt(b.main_ingredients.length) : parseInt(a.main_ingredients.length) < parseInt(b.main_ingredients.length)) return 1;
        if (parseInt(a.main_ingredients.length) == parseInt(b.main_ingredients.length)) return 0;
        if (paramSortByIngridients ? parseInt(a.main_ingredients.length) < parseInt(b.main_ingredients.length) : parseInt(a.main_ingredients.length) > parseInt(b.main_ingredients.length)) return -1;
    })
    paramSortByIngridients = !paramSortByIngridients;
    mainEl.innerHTML = buildByTemplate(data);
}


function search(self) {
    //console.log(self.target.value);
    if (self.target.value.length > 2) {
        let data2 = [];
        data.forEach((item) => {
            if (item.name.toLowerCase().indexOf(self.target.value.toLowerCase()) > -1) {
                data2.push(item);
            }
        })
        mainEl.innerHTML = buildByTemplate(data2);
    } else {
        mainEl.innerHTML = buildByTemplate(data);
    }
}

function buildByTemplate(arr) {
    let result = '';
    for (let index = 0; index < arr.length; index++) {
        let main_ingredients = arr[index].main_ingredients.toString().split(',').join(', ');
        // console.log(arr[index].main_ingredients);
        result += `
           <div class="card" style="width: 18rem;">
               <img src="${arr[index].picture}" class="card-img-top" >
               <div class="card-body">
                 <h5 class="card-title">${arr[index].name}</h5>
                 <p class="card-text">${arr[index].price}</p>
               </div>
           </div>
        `;
    }
    return result;
}

function moveSlides(flag) {
    if (flag === 1 && count === 1) {
        ++elementOfPicture;
    }
    if (flag === -1 && count === 1) {
        elementOfPicture = data.length - 1;
    }
    let result = '';
    switch (flag) {
        case 1:
            result += `<img class="slide_img_content" src="${data[elementOfPicture].picture}"  style="max-width: 500px">`;
            ++elementOfPicture;
            slideData.innerHTML = result;
            if (elementOfPicture === data.length)
                elementOfPicture = 0;
            count++;
            break;
        case -1:
            if (elementOfPicture === 0)
                elementOfPicture = data.length - 1;
            result += `<img class="slide_img_content" src="${data[elementOfPicture].picture}">`;
            slideData.innerHTML = result;
            --elementOfPicture;
            count++;
            break;
        default:
            break;
    }
}

mainEl.innerHTML = buildByTemplate(data);
//slideData.innerHTML = moveSlides(data);
if (flag === undefined) {
    let slide = `<img class="slide_img_content" src="${data[0].picture}"  style="max-width: 500px">`;
    slideData.innerHTML = slide;
}
document.querySelector('[data-content="input"]').addEventListener('input', search.bind(this));
// console.log(buildingText);
