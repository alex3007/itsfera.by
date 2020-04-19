import React from 'react';

let store = {

    _state: {

        foodItems: [
            {id: 1, name: "Маргарита",
                description: "Соус \"1 Pizza\", двойной сыр моцарелла, томат свежий.",
                image: "http://1pizza.by/images/products/thumb_01-13.jpg"},
            {id: 2, name: "Адольфито",
                description: "Соус \"Гриль\", сыр моцарелла, пепперони, ветчина, " +
                "перец, томат, салат \"Айсберг\".",
                image: "http://1pizza.by/images/products/thumb_01-7.jpg"},
            {id: 3, name: "Джакарта",
                description: "Соус \"Сладкий горчичный\", сыр моцарелла, ветчина, " +
                "лук, перец, томат, сыр фета.",
                image: "http://1pizza.by/images/products/thumb_01-11.jpg"},
            {id: 4, name: "Цезарь",
                description: "Соус \"1 Pizza\", сыр моцарелла, креветки, филе куриное, " +
                "томат, соус \"Цезарь\", салат, маслины.",
                image: "http://1pizza.by/images/products/thumb_01-18.jpg"}
        ],

        drinksItems: [
            {id: 1, name: "Coca-Cola",
                description: "Zero",
                image: "http://1pizza.by/images/products/thumb_cocacola.png"},
            {id: 2, name: "Schweppes",
                description: "Мохито",
                image: "http://1pizza.by/images/products/thumb_schweppesmoxito.png"},
            {id: 3, name: "Bonaqua",
                description: "Негазированная",
                image: "http://1pizza.by/images/products/thumb_bonaquastill.png"},
            {id: 4, name: "Sprite",
                description: "Обычный",
                image: "http://1pizza.by/images/products/thumb_sprite.png"},
        ],

        souvenirItems: [
            {id: 1, name: "Мягкая игрушка",
                description: "Медвежонок",
                image: "https://prazdnik-doma.by/upload/iblock/d90/d90c5c3307c57a2d603d4a8c9e37b5dd.jpg"},
            {id: 2, name: "Открытка",
                description: "I love you",
                image: "https://prazdnik-doma.by/upload/iblock/5cc/5cc171f8acfe2e3e9629dc95d6f762ed.jpg"},
            {id: 3, name: "Воздушный шарик",
                description: "Красное сердце",
                image: "https://prazdnik-doma.by/upload/iblock/57a/57a0f691d9ee5da50c5d1123fdeccfaf.jpg"},
            {id: 4, name: "Мыльные пузыри",
                description: "500 мл в 20 сантиметровой бутылке. Большой объем, много дырочек в палке.",
                image: "https://prazdnik-doma.by/upload/iblock/d75/d75c6994fbf4bf81e73bb320c8aee254.jpg"}
        ],
        path: {
            home: '',
            feedbacks: '/feedbacks',
            contacts: '/contacts',
            food: '/pizza',
            drinks: '/drinks',
            dishes: '/souvenirs'
        }
    },

    getState() {
        return this._state;
    }
};
export default store;