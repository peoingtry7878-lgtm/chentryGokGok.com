const items = [
    { 
        image: 'https://sneakernews.com/wp-content/uploads/2012/12/volt-nike-air-max-2013-4.jpg',
        title: 'Shose',
        button: '<button class="btn btn-outline-primary mt-3">Go Shop</button>'
    },
    { 
        image: 'https://yellowchimes.com/cdn/shop/files/71s-LCHZLdL.jpg?v=1738168760&width=1946',
        title: 'Sunglasses',
        button: '<button class="btn btn-outline-primary mt-3">Go Shop</button>'
    },
    { 
        image: 'https://media.istockphoto.com/id/458727719/photo/rolex-deepsea-wristwatch.jpg?s=612x612&w=0&k=20&c=9hv7ESwsaurJuqlMU0vnVzIVtq8CXNGe0j_Hs3ldb4Y=',
        title: 'Watches',
        button: '<button class="btn btn-outline-primary mt-3">Go Shop</button>'
    },
    
];

const content = document.getElementById('card-container');

items.forEach(item => {
    const card = document.createElement('div');
    const cardWrapper = document.createElement('div');
    
    cardWrapper.className = 'card text-center p-4';
    cardWrapper.innerHTML = `
        <div class="mb-4">
            <img src="${item.image}" 
                 class="rounded-circle img-fluid"alt="${item.title}" 
         style="width: 250px; height: 250px; object-fit: cover; border-radius: 50%; solid #fff;">
        </div>
        <div class="card-body">
            <h5 class="card-title fw-bold mb-3">${item.title}</h5>
            ${item.button}
        </div>
    `;
    
    card.className = 'col-md-4 col-sm-6 col-12 mb-4';
    card.appendChild(cardWrapper);
    content.appendChild(card);
});