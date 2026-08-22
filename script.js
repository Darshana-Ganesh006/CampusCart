// ===============================
// GET HTML ELEMENTS
// ===============================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const productGallery =
    document.getElementById("productGallery");

const productCards =
    Array.from(
        document.querySelectorAll(".product-card")
    );

const searchInput =
    document.getElementById("searchInput");

const productCount =
    document.getElementById("productCount");

const noResults =
    document.getElementById("noResults");

const sortSelect =
    document.getElementById("sortSelect");

const cartCountElement =
    document.getElementById("cartCount");

const themeToggle =
    document.getElementById("themeToggle");


// ===============================
// CURRENT CATEGORY
// ===============================

let selectedCategory = "all";


// ===============================
// CART COUNT
// ===============================

// Load saved cart count from LocalStorage

let cartCount =
    Number(localStorage.getItem("campusCartCount")) || 0;


// Show saved cart count

cartCountElement.textContent =
    cartCount;


// ===============================
// FILTER BUTTONS
// ===============================

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedCategory =
            button.getAttribute("data-category");

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        filterAndSortProducts();

    });

});


// ===============================
// SEARCH
// ===============================

searchInput.addEventListener(
    "input",
    function() {

        filterAndSortProducts();

    }
);


// ===============================
// SORTING
// ===============================

sortSelect.addEventListener(
    "change",
    function() {

        filterAndSortProducts();

    }
);


// ===============================
// FILTER + SEARCH + SORT
// ===============================

function filterAndSortProducts() {

    const searchText =
        searchInput.value
        .toLowerCase()
        .trim();


    let sortedProducts =
        [...productCards];


    const sortValue =
        sortSelect.value;


    // PRICE LOW TO HIGH

    if (sortValue === "price-low") {

        sortedProducts.sort(function(a, b) {

            return getPrice(a) - getPrice(b);

        });

    }


    // PRICE HIGH TO LOW

    else if (sortValue === "price-high") {

        sortedProducts.sort(function(a, b) {

            return getPrice(b) - getPrice(a);

        });

    }


    // NAME A TO Z

    else if (sortValue === "name-az") {

        sortedProducts.sort(function(a, b) {

            return getName(a)
                .localeCompare(getName(b));

        });

    }


    // NAME Z TO A

    else if (sortValue === "name-za") {

        sortedProducts.sort(function(a, b) {

            return getName(b)
                .localeCompare(getName(a));

        });

    }


    // REORDER PRODUCTS

    sortedProducts.forEach(function(product) {

        productGallery.appendChild(product);

    });


    // FILTER PRODUCTS

    let visibleProducts = 0;


    sortedProducts.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");

        const productName =
            getName(product);


        const categoryMatches =
            selectedCategory === "all" ||
            productCategory === selectedCategory;


        const searchMatches =
            productName
            .toLowerCase()
            .includes(searchText);


        if (
            categoryMatches &&
            searchMatches
        ) {

            product.style.display = "block";

            visibleProducts++;

        }

        else {

            product.style.display = "none";

        }

    });


    // PRODUCT COUNT

    productCount.textContent =
        "Showing " +
        visibleProducts +
        " products";


    // NO RESULTS

    if (visibleProducts === 0) {

        noResults.style.display = "block";

    }

    else {

        noResults.style.display = "none";

    }

}


// ===============================
// GET PRODUCT NAME
// ===============================

function getName(product) {

    return product
        .querySelector("h3")
        .textContent
        .trim();

}


// ===============================
// GET PRODUCT PRICE
// ===============================

function getPrice(product) {

    const priceText =
        product
        .querySelector(".price")
        .textContent
        .replace("₹", "")
        .trim();

    return Number(priceText);

}


// ===============================
// ADD TO CART
// ===============================

function addToCart(button) {

    cartCount++;

    // Save cart count to LocalStorage

    localStorage.setItem(
        "campusCartCount",
        cartCount
    );

    // Update cart count on screen

    cartCountElement.textContent =
        cartCount;

    // Show Added

    button.textContent =
        "✓ Added";

    button.classList.add("added");

    setTimeout(function() {

        button.textContent =
            "Add to Cart";

        button.classList.remove("added");

    }, 2000);

}


// ===============================
// DARK / LIGHT MODE
// ===============================

// Load saved theme

const savedTheme =
    localStorage.getItem("campusCartTheme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}

else {

    themeToggle.textContent = "🌙";

}


// Toggle theme

themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "dark-mode"
        );


        const darkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        if (darkMode) {

            themeToggle.textContent =
                "☀️";

            localStorage.setItem(
                "campusCartTheme",
                "dark"
            );

        }

        else {

            themeToggle.textContent =
                "🌙";

            localStorage.setItem(
                "campusCartTheme",
                "light"
            );

        }

    }
);


// ===============================
// PRODUCT DETAILS POPUP
// ===============================

const productModal =
    document.getElementById("productModal");

const modalImage =
    document.getElementById("modalImage");

const modalName =
    document.getElementById("modalName");

const modalDescription =
    document.getElementById("modalDescription");

const modalPrice =
    document.getElementById("modalPrice");

const closeModal =
    document.getElementById("closeModal");


// Product descriptions

const productDescriptions = {

    "Notebook":
        "A useful notebook for taking class notes, assignments and study material.",

    "Pen":
        "A smooth writing pen suitable for everyday classroom work, exams and assignments.",

    "Wireless Mouse":
        "A convenient wireless mouse for laptops and desktop computers, ideal for students.",

    "USB Drive":
        "A compact USB drive for storing and transferring assignments, documents and project files.",

    "College Backpack":
        "A practical college backpack designed to carry books, notebooks, laptops and daily essentials.",

    "Study Lamp":
        "A useful study lamp that provides comfortable lighting for reading and studying.",

    "Water Bottle":
        "A reusable water bottle suitable for carrying water throughout the college day.",

    "Umbrella":
        "A compact umbrella that helps students stay protected during unexpected rain."
};


// Open product details

productCards.forEach(function(product) {

    product.addEventListener(
        "click",
        function(event) {

            // Do not open popup when Add to Cart is clicked

            if (
                event.target.classList.contains(
                    "buy-btn"
                )
            ) {
                return;
            }


            const name =
                getName(product);

            const price =
                product.querySelector(
                    ".price"
                ).textContent;

            const image =
                product.querySelector(
                    "img"
                ).src;


            modalName.textContent =
                name;

            modalPrice.textContent =
                price;

            modalImage.src =
                image;

            modalImage.alt =
                name;

            modalDescription.textContent =
                productDescriptions[name] ||
                "A useful student essential for everyday campus life.";


            productModal.style.display =
                "flex";

        }
    );

});


// Close popup

closeModal.addEventListener(
    "click",
    function() {

        productModal.style.display =
            "none";

    }
);


// Close popup when clicking outside

productModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target === productModal
        ) {

            productModal.style.display =
                "none";

        }

    }
);