var products = [
  {title: "Gently Used Starbucks Cup",
    price: "$999.99",
    description: "Gently used 2016 Starbucks cup found off of Murfreesboro Road next to the gutter. Mint condition, had little coffee left when found. ",
    url: "http://archive.onearth.org/files/onearth/feature_starbucks.jpg"
  },  
  {title: "Broken Table",
    price: "$299.99",
    description: "Having a table with 3 legs is lame. Have a table where it falls over when the wind blows over it. What better way to prove yourself to the Art Major down the studio apartment block.",
    url: "http://cdn.freshome.com/wp-content/uploads/2014/03/Tafel.01-LVU4.jpg"
  },  
    {title: "Worn T-Shirt",
    price: "$399.99",
    description: "T-Shirt worn and stained, so you don't have to. Probably no one famous wore it. ", 
    url: "http://farm3.static.flickr.com/2065/2399504172_45ff2fcef4.jpg"
  },  
    {title: "Yo Quiero Broken Dog",
    price: "$59.99",
    description: "This was worthless in the 1990's, take it and be cool like James Franco.",
    url: "https://images-na.ssl-images-amazon.com/images/I/51EI9KOAljL.jpg"
  },  
    {title: "Stores Trash Spray Painted Gold",
    price: "$499.99",
    description: "You buy our trash, there may be cool stuff in there! You never know until you buy it!", 
    url: "https://s-media-cache-ak0.pinimg.com/236x/69/be/5a/69be5a0d37c378dc9378660f85d78d25.jpg"
  },  
    {title: "Sea Glass",
    price: "$299.99",
    description: "Glass form the sea, not from a wine bottle....well....yeah.", 
    url: "http://www.cowineco.com/stuff/contentmgr/files/6dc6c8191501606a9c770f93d41d0b19/misc/broken_wine_bottle.jpg"
  },  
    {title: "Used Q-Tip",
    price: "$39.99",
    description: "What a mystery this is! Who's earwax is this? Someone famous? The cashiers? You'll never know, and neither will your party guests!",
    url: "http://s3-media1.fl.yelpcdn.com/bphoto/TabpRK5TGnL74tDzAuAezA/348s.jpg"
  },  
    {title: "Toaster on Fire",
    price: "$99999.99",
    description: "We put a mixtape in it, and it won't stop being on fire. ",
    url: "http://greggestbloggest.com/wp-content/uploads/2015/03/bigstock-Toaster-with-two-slices-of-toa-84786521.jpg"
  }
];

var productCard  = "";
for (var i = 0; i < products.length; i++) {
  productCard += "<div class='card'>";
  productCard += "<h1>" + products[i].title + "</h1>";
  productCard += "<img class ='picture' src= ' " + products[i].url + " '>";
  productCard += "<p class='price'>" + products[i].price + "</p>";
  productCard += "<p class='description'>" + products[i].description + "</p>";
  productCard +="</div>";

};

document.getElementById("products").innerHTML = productCard;



