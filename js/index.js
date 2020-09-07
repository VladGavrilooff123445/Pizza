let data = [
    {
        "name": "Маргарита",
        "price": "110 грн.",
        "weight": "150 г",
        "picture": "https://km-doma.ru/assets/gallery_thumbnails/31/319484a4bb725e4eacab62c7f0c7f1ed.jpg",
        "main_ingredients": ['томатная паста', 'базилик', 'моцарелла']

    },
    {
        "name": "Четыре сыра",
        "price": "150 грн.",
        "weight": "200 г",
        "picture": "https://adriano.com.ua/uploads/ckeditor/pictures/59fed83d6c656f0811f3c606/content_5.1.png",
        "main_ingredients": ['дор блю', 'парнизан', 'моцарелла']

    },
    {
        "name": "Пепперони",
        "price": "145 грн.",
        "weight": "150 г",
        "picture": "https://vkuso.ru/data/picca-pepperoni-na-drozhzhevom-teste.jpg",
        "main_ingredients": ['томатная паста', 'салями', 'моцарелла']

    },
    {
        "name": "Капричиоза",
        "price": "130 грн.",
        "weight": "180 г",
        "picture": "https://yummypizza.ru/images/library/sc_1/65/medium_kaprichoza.jpg?1556628624",
        "main_ingredients": ['шампиньоны', 'маринованные помидоры черри', 'оливки', 'ветчина', 'моцарелла']

    },
    {
        "name": "Неаполитанская",
        "price": "140 грн.",
        "weight": "250 г",
        "picture": "https://www.chefmarket.ru/blog/wp-content/uploads/2019/08/neapolitan-pizza-recipe-e1565951728830.jpg",
        "main_ingredients": ['анчоусы', 'свежие томаты', 'базилик', 'моцарелла']

    },
    {
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

    },
    {
        "name": "Дьябола",
        "price": "125 грн.",
        "weight": "140 г",
        "picture": "https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D0%BD%D0%B5%D1%86-%D0%B2%D0%B2%D0%B5%D1%80%D1%85-%D0%BF%D0%B8%D1%86%D1%86%D1%8B-%D0%B4%D0%B8%D0%B0%D0%B1%D0%BB%D0%BE-%D0%BD%D0%B0-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%81%D1%82%D0%BE%D0%BB%D0%B5-%D1%80%D1%8F%D0%B4%D0%BE%D0%BC-%D1%81-%D0%BF%D0%B5%D1%80%D1%86%D0%B0%D0%BC%D0%B8-%D0%B8-condiments-145510153.jpg",
        "main_ingredients": ['пепперони', 'бекон', 'болгарскому перцу', 'моцарелла', 'соус Ширачи']

    },
    {
        "name": "Кальцоне",
        "price": "110 грн.",
        "weight": "90 г",
        "picture": "https://cdn.segodnya.ua/img/article/11873/67_ls.1541771992.jpg",
        "main_ingredients": ['томатная паста', 'базилик', 'моцарелла', 'пепперони', 'грибы']

    },
    {
        "name": "Гавайская",
        "price": "150 грн.",
        "weight": "150 г",
        "picture": "https://www.svoimirykami.club/wp-content/uploads/2017/09/Gavajskaya-pitstsa-min.jpg",
        "main_ingredients": ['ананас', 'сливочный соус', 'ветчина', 'красный лук', 'моцарелла']
    }
]


const mainEl = document.querySelector('[data-content="select"]')
let paramSortByPrice = true;
let paramSortByIngridients = true;

function clickPrice() {
    console.log('clickPrice');
    data.sort((a, b) => {
        if (paramSortByPrice ? parseInt(a.price) > parseInt(b.price) : parseInt(a.price) < parseInt(b.price)) return 1;
        if (parseInt(a.price) == parseInt(b.price)) return 0;
        if (paramSortByPrice ? parseInt(a.price) < parseInt(b.price) : parseInt(a.price) > parseInt(b.price)) return -1;
    })
    paramSortByPrice = !paramSortByPrice;
    mainEl.innerHTML = buildByTemplate(data);
}

function clickIngridients() {
    /*const temp = [];
    let data2 = JSON.parse(JSON.stringify(data));
    for (let i = 0; i < data2.length; i++) {
        let max = data2[i];
        for (let j = 0; j < data2.length; j++) {//temp[3(1el), temp[3(1el),]
            console.log(data2[i].main_ingredients); // [3,3,3,5,4,7,7,5,5,5]
            if (max.main_ingredients.length > data2[j].main_ingredients.lengthцццц) {
                if (temp.length > 0) {
                    let isDublicate = false;
                    for (let k = 0; k < temp.length; k++) {
                        if (temp[k].name === data2[j].name) {
                            isDublicate = true;
                        }
                    }
                    if (!isDublicate) {
                        max = data2[j];
                    }
                } else {
                    max = data2[j];
                }

            }
            temp.push(max);
        }
        mainEl.innerHTML = buildByTemplate(temp);
    }*/
    data.sort((a, b) => {
        if (paramSortByIngridients ? parseInt(a.main_ingredients.length) > parseInt(b.main_ingredients.length) : parseInt(a.main_ingredients.length) < parseInt(b.main_ingredients.length)) return 1;
        if (parseInt(a.main_ingredients.length) == parseInt(b.main_ingredients.length)) return 0;
        if (paramSortByIngridients ? parseInt(a.main_ingredients.length) < parseInt(b.main_ingredients.length) : parseInt(a.main_ingredients.length) > parseInt(b.main_ingredients.length)) return -1;
    })
    paramSortByIngridients = !paramSortByIngridients;
    mainEl.innerHTML = buildByTemplate(data);
}

//todo: make sort by ingredients

function buildByTemplate(arr) {
    let result = '';
    for (let index = 0; index < arr.length; index++) {
        result += `
            <div class='card__main_wrapper'>
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card__content">
                            <p class="card__content_title">${arr[index].name}</p>
                            <span class="card__content_price">${arr[index].price}</span>
                        </div>
                        <span class="card__content_items">${arr[index].price}</span>
                    </div>
                   <img class="card_img" src="${arr[index].picture}" alt="${arr[index].name}">
                </div>
            </div>
        `;
    }
    return result;
}

mainEl.innerHTML = buildByTemplate(data);
// console.log(buildingText);
