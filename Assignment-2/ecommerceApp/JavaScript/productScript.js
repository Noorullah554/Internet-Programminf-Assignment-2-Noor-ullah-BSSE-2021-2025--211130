let ImageArray = ['../img/products/f1.jpg','../img/products/f2.jpg','../img/products/f3.jpg','../img/products/f4.jpg','../img/products/f5.jpg','../img/products/f6.jpg','../img/products/f7.jpg','../img/products/f8.jpg'];
let newArrivals = ['../img/products/n1.jpg','../img/products/n2.jpg','../img/products/n3.jpg','../img/products/n4.jpg','../img/products/n5.jpg','../img/products/n6.jpg','../img/products/n7.jpg','../img/products/n8.jpg'];
let productComapany = ["adidas","adidas","adidas","adidas","adidas","adidas","adidas","adidas"];
let productDes = ["Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts","Cartoon Austronaut T-Shirts"]
let priceDet = ['$75','$80',"$107","$89",'$75','$80',"$107","$89"];
let heroImgs = ['url(../img/hero4.png)','url(../img/her3.jpg)', 'url(../img/hero1.jpg)']
let stars = [3,5,2,4,5,3,4,5]
let newStars = [3,5,4,2,5,4,4,3]


var listViewElement = document.querySelector(".pro_container");
var newArrivalsListView = document.querySelector(".new-arrivals");
var heroSec = document.querySelector("#hero");


let index = 1;



function heroImagesFunc()
{
    if (index >= heroImgs.length) {
        index = 0; // Reset index if it exceeds the array length
      }   
      heroSec.style.backgroundImage = heroImgs[index]
      index++;
}

const intervalId = setInterval(heroImagesFunc, 3000);



for (var i = 0 ; i < ImageArray.length ; i++){

    let itemElement = document.createElement("div")
    itemElement.classList.add(`pro`)

    itemElement.setAttribute("data-aos", "flip-left");
    
    var productImage = document.createElement('img');
    productImage.src = ImageArray[i]

    var productTitle = document.createElement('p');
    productTitle.textContent = productComapany[i];

    var productDescription = document.createElement('h5');
    productDescription.textContent = productDes[i];

    var starDiv = document.createElement('div');
    starDiv.classList.add('starDiv')

     
        for (var s = 0 ; s < stars[i] ; s++){
            var strtA = document.createElement('a');
            var strtSpan = document.createElement('span');
            strtSpan.className = 'material-icons-outlined starGolden';
            strtSpan.textContent = 'star';
            strtA.appendChild(strtSpan);
            starDiv.appendChild(strtA);
        }



    var priceDetails = document.createElement('h4');
    priceDetails.textContent = priceDet[i]


    var cartImageAnchor = document.createElement('a');
    var cartImageSpan = document.createElement('span');
    cartImageSpan.className = ('material-icons-outlined cart');
    cartImageSpan.textContent = 'shopping_cart';
    cartImageAnchor.appendChild(cartImageSpan);

    
    
    itemElement.appendChild(productImage);
    itemElement.appendChild(productTitle);
    itemElement.appendChild(productDescription);
    itemElement.appendChild(starDiv)
    itemElement.appendChild(priceDetails);
    itemElement.appendChild(cartImageAnchor);

    listViewElement.appendChild(itemElement)
}
for (var i = 0 ; i < ImageArray.length ; i++){

    let itemElement = document.createElement("div")
    itemElement.classList.add("pro")
    itemElement.setAttribute("data-aos", "zoom-in");




    var productImage = document.createElement('img');
    productImage.src = newArrivals[i]

    var productTitle = document.createElement('p');
    productTitle.textContent = productComapany[i];

    var productDescription = document.createElement('h5');
    productDescription.textContent = productDes[i];

    var starDiv = document.createElement('div');
    starDiv.classList.add('starDiv')

    
    
    for (var s = 0 ; s < newStars[i] ; s++){
        var strtA = document.createElement('a');
        var strtSpan = document.createElement('span');
        strtSpan.className = 'material-icons-outlined starGolden';
        strtSpan.textContent = 'star';
        strtA.appendChild(strtSpan);

        starDiv.appendChild(strtA);
    }
    
 


    var priceDetails = document.createElement('h4');
    priceDetails.textContent = priceDet[i]


    var cartImageAnchor = document.createElement('a');
    var cartImageSpan = document.createElement('span');
    cartImageSpan.className = ('material-icons-outlined cart');
    cartImageSpan.textContent = 'shopping_cart';
    cartImageAnchor.appendChild(cartImageSpan);

    
    
    itemElement.appendChild(productImage);
    itemElement.appendChild(productTitle);
    itemElement.appendChild(productDescription);
    itemElement.appendChild(starDiv)
    itemElement.appendChild(priceDetails);
    itemElement.appendChild(cartImageAnchor);

    newArrivalsListView.appendChild(itemElement)
}


function loadBanner2(){

    var xhttp = new XMLHttpRequest();

    // Specify the file path of the HTML file to load
    var htmlFilePath = '../HTML/target.html';

    // Configure the AJAX request
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Replace the content of the targetDiv with the loaded HTML file
        document.getElementById('banner2Loader').innerHTML = this.responseText;
        }
    };

    // Send the AJAX request to load the HTML file
    xhttp.open('GET', htmlFilePath, true);
    xhttp.send();

}


