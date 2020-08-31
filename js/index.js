const data = [
    {
        "name": "Маргарита",
        "price": "110 UAH",
        "weight": "150 г",
        "imgLink": "https://km-doma.ru/assets/gallery_thumbnails/31/319484a4bb725e4eacab62c7f0c7f1ed.jpg",
        "main_ingredients": [
            "томатная паста",
            "базилик",
            "моцарелла"
        ]
    },
    {
        "name": "Четыре сыра",
        "price": "150 UAH",
        "weight": "200 г",
        "imgLink": "https://adriano.com.ua/uploads/ckeditor/pictures/59fed83d6c656f0811f3c606/content_5.1.png",
        "main_ingredients": [
            "дор блю",
            "парнизан",
            "моцарелла"
        ]
    },
    {
        "name": "Пепперони",
        "price": "145 UAH",
        "weight": "150 г",
        "imgLink": "https://vkuso.ru/data/picca-pepperoni-na-drozhzhevom-teste.jpg",
        "main_ingredients": [
            "томатная паста",
            "салями",
            "моцарелла"
        ]
    },
]


const mainEl = document.querySelector('[data-content="select"]')

function buildByTemplate (arr) {
    let result = '';
    for (let index = 0; index < arr.length; index++) {
        // debugger;
        // let el = document.createElement('div');
        // el.innerText = arr[index].name
        // result += `
        //     <div class="card">
        //         <p class="title">${arr[index].name}</p>
        //         <div>
        //             <img class="card_img" src="${arr[index].imgLink}" alt="${arr[index].name}">
        //             <span class="card_price">${arr[index].price}</span>
        //         </div>
        //     </div>
        // `
        result += `
            <div class="card">
                <p class="title">${arr[index].name}</p>
                <div>
                    <img class="card_img" src="${arr[index].imgLink}" alt="${arr[index].name}">
                    <span class="card_price">${arr[index].price}</span>
<!--                    <p>${ arr[index].main_ingredients.forEach( (el) => { el })  }</p>-->
                </div>
            </div>
        `;
    }
    return result;
}

mainEl.innerHTML = buildByTemplate(data);
// console.log(buildingText);
