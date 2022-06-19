window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

// len trang dau
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

document.getElementById('myBtn').addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//seach-history

const products = document.querySelector('.products')
const filter = document.getElementById('filter')
const listItems = []

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://mocki.io/v1/1be345d8-e021-47df-8527-fceb11976e5a')

    const results = await res.json()

    // Clear products
    products.innerHTML = ''

    results.forEach((product) => {
        const div = document.createElement('div')
        div.setAttribute('class', 'product')
        listItems.push(div)

        div.innerHTML = `
			<img src="${product.image}" alt="">
			<div class="product-detail">
				<h4>${product.title.slice(0, 30)}</h4>
				<p>$${product.price}</p>
			</div>
        `

        products.appendChild(div)
    })
}

function filterData(search) {
    listItems.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}