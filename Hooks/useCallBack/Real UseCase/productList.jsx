import React, { useCallback, useState } from "react";

const products=[
  {
    "id": 1,
    "name": "iPhone 15",
    "price": 79999,
    "category": "Smartphone",
    "description": "Apple smartphone with A16 chip, advanced camera system and OLED display."
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S23",
    "price": 74999,
    "category": "Smartphone",
    "description": "Samsung flagship phone with Snapdragon processor and high refresh rate display."
  },
  {
    "id": 3,
    "name": "MacBook Air M2",
    "price": 114999,
    "category": "Laptop",
    "description": "Lightweight Apple laptop powered by M2 chip with long battery life."
  },
  {
    "id": 4,
    "name": "Dell XPS 13",
    "price": 99999,
    "category": "Laptop",
    "description": "Premium ultrabook with Intel processor and InfinityEdge display."
  },
  {
    "id": 5,
    "name": "Sony WH-1000XM5",
    "price": 29999,
    "category": "Headphones",
    "description": "Noise-cancelling wireless headphones with excellent sound quality."
  },
  {
    "id": 6,
    "name": "Apple Watch Series 9",
    "price": 41999,
    "category": "Smartwatch",
    "description": "Apple smartwatch with health tracking, GPS, and fitness monitoring."
  },
  {
    "id": 7,
    "name": "iPad Air",
    "price": 59999,
    "category": "Tablet",
    "description": "Powerful tablet with M1 chip, perfect for productivity and entertainment."
  },
  {
    "id": 8,
    "name": "Logitech MX Master 3",
    "price": 9999,
    "category": "Accessories",
    "description": "Advanced wireless mouse designed for productivity and precision."
  },
  {
    "id": 9,
    "name": "Canon EOS R50",
    "price": 85999,
    "category": "Camera",
    "description": "Mirrorless camera with 24MP sensor ideal for photography and video."
  },
  {
    "id": 10,
    "name": "Amazon Echo Dot",
    "price": 4999,
    "category": "Smart Home",
    "description": "Smart speaker with Alexa voice assistant for home automation."
  }
];

function ProductList(){

    const [cart,setCart]=useState(0);
    const addTocart=useCallback((productname)=>{
        console.log(productname+"is added to the cart!");
        setCart((prev)=>prev+1);

    },[]);
    console.log(" parent rendered");
    return(
        <>
        <h1>No of products : {cart}</h1>
        {
            products.map((pr)=>{
                return (
                    <Card key={pr.id} name={pr.name} category={pr.category} price={pr.price} addTocart={addTocart}/>
                )
            })
        }
        
        </>

    );

}
const Card=React.memo((props)=>{
    console.log(props.name+"rendered");
    return(
        <div >
                        <h1>{props.name}</h1>
                        <p>{props.category}</p>
                        <p>{props.price}</p>
                        <button onClick={()=>{props.addTocart(props.name)}}>Add to Cart</button>
                    </div>
    );

});
export default ProductList;
