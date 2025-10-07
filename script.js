// Product data
const products = [
  {
    title: "Women's 2025 new mobile phone bag sweet temperament shoulder messenger bag fashionable all-match sequin chain handbag",
    code: "SP01",
    weight: "330g",
    size: "21cm (L) × 8cm (W) × 14cm (H)",
    quality: "PU (synthetic leather)",
    regular_price: "1300 TK",
    discount_price: "949 TK",
    image: "./assets/SP01.jpg",
    additionalImages: [
      "./assets/SP01_1.jpg",
      "./assets/SP01_2.jpg",
      "./assets/SP01_3.jpg",
      "./assets/SP01_4.jpg",
      "./assets/SP01_5.jpg",
      "./assets/SP01_6.jpg",
    ]
  },
  {
    title: "Taizhou bright leather stone pattern ladies bag small square bag pu women's bag solid color handbag messenger bag shoulder bag",
    code: "MP01",
    weight: "550g",
    size: "26cm (L) × 11cm (W) × 18cm (H)",
    quality: "PU (synthetic leather)",
    regular_price: "3450 TK",
    discount_price: "1799 TK",
    image: "./assets/MP01.jpg",
    additionalImages: [
      "./assets/MP01_1.jpg",
      "./assets/MP01_2.jpg"
    ]
  },
  {
    title: "Large capacity texture large bag women 2025 new style high-end spring and autumn shoulder bag versatile net celebrity tote bag",
    code: "HB01",
    weight: "305g",
    size: "28cm (L) × 11cm (W) × 23cm (H),300g",
    quality: "PU (synthetic leather)",
    regular_price: "1700 TK",
    discount_price: "949 TK",
    image: "./assets/HB01.jpg",
    additionalImages: [
      "./assets/HB01_1.jpg",
      "./assets/HB01_2.jpg",
      "./assets/HB01_3.jpg",
      "./assets/HB01_4.jpg",
      "./assets/HB01_5.jpg",
      "./assets/HB01_6.jpg",
      "./assets/HB01_7.jpg",
      "./assets/HB01_8.jpg",
      "./assets/HB01_9.jpg",
      "./assets/HB01_10.jpg",
      "./assets/HB01_11.jpg",
      "./assets/HB01_12.jpg",
      "./assets/HB01_13.jpg",
      "./assets/HB01_14.jpg",
    ]
  },
  {
    title: "New macaron three-piece set fashion handbag Western style simple large capacity shoulder bag high value crossbody women's bag",
    code: "BP01",
    weight: "1085g",
    size: "Length 29cm, Width 14cm, Height 22cm",
    quality: "PU (synthetic leather)",
    regular_price: "4350 TK",
    discount_price: "2699 TK",
    image: "./assets/BP01.jpg",
    additionalImages: [
      "./assets/BP01_1.jpg",
      "./assets/BP01_2.jpg",
      "./assets/BP01_3.jpg",
    ]
  },
  {
    title: "Brand Atmospheric Leather Ladies Handbag Premium Bag 2025 New Women's Bag Fashion Send Mom Bag Middle Age",
    code: "BP03",
    weight: "735g",
    size: "29cm (L) × 12cm (W) × 23cm (H)",
    quality: "PU (synthetic leather)",
    regular_price: "2800 TK",
    discount_price: "2249 TK",      
    image: "./assets/BP03.jpg",
    additionalImages: [
      "./assets/BP03_1.jpg",
      "./assets/BP03_2.jpg",
      "./assets/BP03_3.jpg",
      "./assets/BP03_4.jpg",
      "./assets/BP03_5.jpg",
      "./assets/BP03_6.jpg"
    ]
  },
];

// DOM elements
const productGrid = document.getElementById("productGrid");
const imageModal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const imageCounter = document.getElementById("imageCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbnailContainer = document.getElementById("thumbnailContainer");

// Current image state
let currentProduct = null;
let currentImageIndex = 0;
let currentImages = [];

// Render product cards
function renderProducts() {
  productGrid.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <button class="view-larger-btn" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
                    <span class="view-larger-text">View Larger</span>
                </button>
                ${product.additionalImages && product.additionalImages.length > 0 ? 
                  `<button class="show-more-btn" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
                    <span class="show-more-text">+${product.additionalImages.length} More</span>
                  </button>` : ''}
            </div>
            <div class="product-details">
                <h2 class="product-title">${product.title}</h2>
                <div class="product-info">
                    <p><span class="info-label">Code:</span> ${product.code}</p>
                    <p><span class="info-label">Weight:</span> ${product.weight}</p>
                    <p><span class="info-label">Size:</span> ${product.size}</p>
                    <p><span class="info-label">Quality:</span> ${product.quality}</p>
                    <p><span class="info-label">Regular Price:</span> <span >${product.regular_price}</span></p>
                    <p><span class="info-label">Discount Price:</span> <span class="price-green">${product.discount_price}</span></p>
                </div>
                <a href="https://www.facebook.com/profile.php?id=61579644444648" target="_blank" class="drive-btn facebook-btn">
                    <svg class="drive-icon" viewBox="0 0 24 24" fill="white">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Order From Facebook
                </a>
    
            <a href="https://www.instagram.com/rongtuli.store/" target="_blank" class="drive-btn instagram-btn">
                <svg class="drive-icon" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Order From Instagram
            </a>
            </div>
        </div>
    `
    )
    .join("");

  // Add event listeners to all view buttons
  document.querySelectorAll(".view-larger-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productData = JSON.parse(this.getAttribute("data-product"));
      openModalWithProduct(productData, 0);
    });
  });
}

  // Add event listeners to show more buttons
  document.querySelectorAll(".show-more-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productData = JSON.parse(this.getAttribute("data-product"));
      openModalWithProduct(productData, 1); // Start from first additional image
    });
  });

// Open modal with product images
function openModalWithProduct(product, startIndex = 0) {
  currentProduct = product;
  currentImageIndex = startIndex;
  currentImages = [product.image, ...(product.additionalImages || [])];
  
  updateModalImage();
  imageModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Update modal image and controls
function updateModalImage() {
  modalImage.src = currentImages[currentImageIndex];
//   modalImage.alt = currentProduct.title;
//   modalTitle.textContent = currentProduct.title;
  imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
  
  // Update button states
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === currentImages.length - 1;
  
  // Update thumbnails
  updateThumbnails();
}

// Update thumbnail navigation
function updateThumbnails() {
  thumbnailContainer.innerHTML = currentImages
    .map((image, index) => `
      <div class="thumbnail ${index === currentImageIndex ? 'active' : ''}" 
           data-index="${index}">
        <img src="${image}" alt="Thumbnail ${index + 1}">
      </div>
    `)
    .join('');
  
  // Add thumbnail click events
  document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
      currentImageIndex = parseInt(this.getAttribute('data-index'));
      updateModalImage();
    });
  });
}

// Navigation functions
function nextImage() {
  if (currentImageIndex < currentImages.length - 1) {
    currentImageIndex++;
    updateModalImage();
  }
}

function prevImage() {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    updateModalImage();
  }
}

function closeModal() {
  imageModal.classList.remove("active");
  document.body.style.overflow = "auto";
  currentProduct = null;
  currentImageIndex = 0;
  currentImages = [];
}

// Event listeners
closeModalBtn.addEventListener("click", closeModal);
prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);

imageModal.addEventListener("click", function (e) {
  if (e.target === imageModal) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener("keydown", function (e) {
  if (imageModal.classList.contains("active")) {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "Escape") closeModal();
  }
});

// Initialize
document.addEventListener("DOMContentLoaded", renderProducts);