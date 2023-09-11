const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 12000,
      desc: "Elevate your style with the Nike Air Force 1, a timeless classic known for its sleek all-white leather design. Experience unrivaled comfort with the signature Air-Sole unit, making it perfect for everyday wear.",
      colors: [
        {
          code: "black",
          img: "./images/air.png",
        },
        {
          code: "darkblue",
          img: "./images/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 10000,
      desc: "Air Jordan: Iconic athletic footwear brand known for its stylish and performance-oriented basketball sneakers, synonymous with Michael Jordan's legacy.",
      colors: [
        {
          code: "lightgray",
          img: "./images/jordan.png",
        },
        {
          code: "green",
          img: "./images/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 12599,
      desc: "Step up your style with Nike Blazer shoes. These iconic sneakers feature a classic silhouette with a retro twist, perfect for adding a touch of vintage flair to your wardrobe.",
      colors: [
        {
          code: "lightgray",
          img: "./images/blazer.png",
        },
        {
          code: "green",
          img: "./images/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 18500,
      desc: "Unleash your creativity with the Nike Creator shoe. Designed for innovators and trendsetters, these sneakers combine cutting-edge style with all-day comfort.",
      colors: [
        {
          code: "black",
          img: "./images/crater.png",
        },
        {
          code: "lightgray",
          img: "./images/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 11000,
      desc: "Embrace your inner hippie spirit with these groovy shoes. Designed for free-spirited souls, these sneakers exude a bohemian vibe with vibrant colors and a comfortable, earthy feel. ",
      colors: [
        {
          code: "gray",
          img: "./images/hippie.png",
        },
        {
          code: "black",
          img: "./images/hippie2.png",
        },
      ],
    },
  ];


  let chosenProduct = products[0];

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice =  document.querySelector(".productPrice");
  const currentProductDesc = document.querySelector(".productDesc");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");




menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // this is to change the slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;
        // here the x axis is manipulated with the value of negative to slide the items


        // Here change the chosen product
        chosenProduct = products[index];   
        
        //Here change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductDesc.textContent = chosenProduct.desc;
        currentProductPrice.textContent = "₹"+ chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;


        //assing new colors
        currentProductColors.forEach((color,index)=>{
          color.style.backgroundColor = chosenProduct.colors[index].code
        });

    });
});


// This is the function to change the color of the product which is chosen


currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = chosenProduct.colors[index].img
  });
});


// This is the function to change the background color of the size

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach((size)=>{
      size.style.backgroundColor="white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  })
})

// This is for the payement pop up

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");


productButton.addEventListener("click",()=>{
  payment.style.display = "flex";
});

close.addEventListener("click",()=>{
payment.style.display = "none";
});


