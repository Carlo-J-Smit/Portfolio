function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.right = "0"
}

function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.right = "-100%"
}

const product = [
    {
        id: 0,
        image: 'image/gg-1.jpg',
        title: 'Block Game',
        category: 'Python',
    },
    {
        id: 1,
        image: 'image/hh-2.jpg',
        title: 'Bee Simulation',
        category: 'Python',
    },
    {
        id: 2,
        image: '',
        title: '',
        category: 'none',
    },
    {
        id: 3,
        image: '',
        title: '',
        category: 'none',
    },
    {
        id: 4,
        image: '',
        title: '',
        category: 'none',
    },
    {
        id: 5,
        image: '',
        title: '',
        category: 'none',
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    // Filter out items with category set to 'none'
    const validItems = items.filter(item => item.category !== 'none');

    document.getElementById('root').innerHTML = validItems.map((item) => {
        var { image, title, category } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div> 
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>${category}</h2>
                <button>Open</button>
                </div>
            </div>`
        );
    }).join('');
};



displayItem(categories);

// dropdown


// Dropdown logic
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".select");
    const caret = dropdown.querySelector(".caret");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected");

    select.addEventListener("click", () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle("caret-rotate");
        menu.classList.toggle('menu-open');
    });

    // Loop through options and filter products based on the selected category
    menu.addEventListener('click', (event) => {
        const selectedCategory = event.target.innerText;
        selected.innerText = selectedCategory;
        select.classList.remove('select-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        
        const filteredProducts = selectedCategory === 'All' ? product : product.filter(item => item.category === selectedCategory);
        displayItem(filteredProducts);
    });
});



