import { useMemo, useState } from "react";

function ShoppingCart(){
     const products=[
        { "id": 1, "name": "Nike Running Shoes", "category": "Shoes", "price": 120, "qty": 1 },
        { "id": 2, "name": "Adidas Sports Shoes", "category": "Shoes", "price": 110, "qty": 2 },
        { "id": 3, "name": "Women's Cotton Top", "category": "Clothing", "price": 35, "qty": 1 },
        { "id": 4, "name": "Men's Casual T-Shirt", "category": "Clothing", "price": 25, "qty": 3 },
        { "id": 5, "name": "Lip Balm Strawberry", "category": "Cosmetics", "price": 8, "qty": 2 },
        { "id": 6, "name": "Matte Lipstick", "category": "Cosmetics", "price": 15, "qty": 1 },
        { "id": 7, "name": "Leather Wallet", "category": "Accessories", "price": 40, "qty": 1 },
        { "id": 8, "name": "Sunglasses UV Protection", "category": "Accessories", "price": 30, "qty": 2 },
        { "id": 9, "name": "Bluetooth Earbuds", "category": "Electronics", "price": 75, "qty": 1 },
        { "id": 10, "name": "Stainless Steel Water Bottle", "category": "Home", "price": 20, "qty": 2 }
    ];

    const [openSidebar,setOpenSidebar]=useState("Close");
    const [cart, setCart] = useState(products);
    
    const subtotal=useMemo(()=>{
        console.log("sub Memo");
        const st=cart.reduce((acc,curr)=>acc+(curr.qty*curr.price),0);
        return st;

    },[cart]);

     const tax=useMemo(()=>{
       console.log("tax Memo");
        return subtotal*0.5;

    },[subtotal]);

    const total=useMemo(()=>{
       console.log("total Memo");
        return subtotal+tax;

    },[subtotal,tax]);


   
    function addProduct(){
        const obj={
            "id":cart.length+1,
            "name": "Water Bottle",
            "category": "Home",
            "price": 70, 
            "qty": 1

        }
        setCart([...cart, obj]);

    }

    return(
        <>
            <p>{openSidebar}</p>
            <button onClick={() =>setOpenSidebar(openSidebar === "Close" ? "Open" : "Close")}>open SideBar</button>
            {
                cart.map((pr)=>{
                    return(
                         <div key={pr.id}>
                        <h1>{pr.name}</h1>
                        <p>{pr.category}</p>
                        <p>{pr.price}</p>
                        </div>
                    );
                       
                       
                })
            }
            <p>Subtotal : {subtotal}</p>
            <p>Tax : {tax}</p>
            <p>Total : {total}</p>
            <button onClick={addProduct}>Add Product</button>
        
        </>
    );
   
}
export default ShoppingCart;
