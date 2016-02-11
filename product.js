var products = [
  {title: "HELLo2",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
  {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
    {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
    {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
    {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
    {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
    {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  },  
    {title: "HELLO",
    price: "$99.99",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis neque ea rem adipisci, hic explicabo iure ab. Reprehenderit natus nihil quo accusamus, officia aut odit iste repudiandae, nisi fugiat, ullam?",
    url: "image.jpg"
  }
];

var productCard = "";
for (var i = 0; i < products.length; i++) {
  productCard += "<div class='card'>";
  productCard += "<h1>" + products[i].title + "</h1>";
  productCard += "<img src= ' " + products[i].url + " '>";
  productCard += "<p class='price'>" + products[i].price + "</p>";
  productCard += "<p class='description'>" + products[i].description + "</p>";
  productCard +="</div>";

};

document.getElementById("products").innerHTML = productCard;



