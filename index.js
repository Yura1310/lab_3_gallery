document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll("nav ul li");
    const card = document.querySelector("card");
    const cardTitle = card.querySelector("h3");

    const data = {
        "Природа": {
            img: "img/20200125110231_Priroda_10-344.jpg",
            title: "Природа",
            description: "Красота окружающего мира."
        },
        "Машины": {
            img: "img/i8.jpg",
            title: "Машины",
            description: "Скорость и мощь автомобилей."
        },
        "Арты": {
            img: "img/art.jpg",
            title: "Арты",
            description: "Творчество и искусство."
        },
        "Фильмы": {
            img: "img/movies.jpg",
            title: "Фильмы",
            description: "Кинематограф и его магия."
        },
        "Наука": {
            img: "img/science.jpg",
            title: "Наука",
            description: "Исследования и открытия."
        }
    };

    categories.forEach(category => {
        category.addEventListener("click", function () {
            categories.forEach(c => c.classList.remove("active-tab"));

            this.classList.add("active-tab");

            const selectedCategory = this.textContent.trim();
            if (data[selectedCategory]) {
                card.querySelector("img").src = data[selectedCategory].img;
                card.querySelector("h1").textContent = data[selectedCategory].title;
                card.querySelector("h2").textContent = data[selectedCategory].description;
                cardTitle.textContent = selectedCategory;
            }
        });
    });
});
