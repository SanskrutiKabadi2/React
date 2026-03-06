import {useState,useEffect,useMemo} from 'react';

const products=[
        { "id": 1, "name": "iPhone 15", "category": "Phone", "price": 999, "rating": 4.8 },
        { "id": 2, "name": "Samsung Galaxy S23", "category": "Phone", "price": 899, "rating": 4.7 },
        { "id": 3, "name": "Google Pixel 8", "category": "Phone", "price": 699, "rating": 4.6 },
        { "id": 4, "name": "OnePlus 12", "category": "Phone", "price": 749, "rating": 4.6 },
        { "id": 5, "name": "Xiaomi Redmi Note 13", "category": "Phone", "price": 299, "rating": 4.4 },

        { "id": 6, "name": "MacBook Air M2", "category": "Laptop", "price": 1199, "rating": 4.9 },
        { "id": 7, "name": "Dell XPS 13", "category": "Laptop", "price": 1099, "rating": 4.6 },
        { "id": 8, "name": "HP Spectre x360", "category": "Laptop", "price": 1299, "rating": 4.7 },

        { "id": 9, "name": "Sony WH-1000XM5 Headphones", "category": "Electronics", "price": 349, "rating": 4.8 },
        { "id": 10, "name": "Apple Watch Series 9", "category": "Electronics", "price": 399, "rating": 4.7 },
        { "id": 11, "name": "Samsung 27 inch Monitor", "category": "Electronics", "price": 299, "rating": 4.6 },

        { "id": 12, "name": "Nike Air Max Shoes", "category": "Fashion", "price": 150, "rating": 4.5 },
        { "id": 13, "name": "Adidas Running Shoes", "category": "Fashion", "price": 130, "rating": 4.4 },
        { "id": 14, "name": "Levi's Men's Jeans", "category": "Fashion", "price": 80, "rating": 4.3 },

        { "id": 15, "name": "Philips Air Fryer", "category": "Home Appliances", "price": 199, "rating": 4.6 },
        { "id": 16, "name": "Dyson V11 Vacuum Cleaner", "category": "Home Appliances", "price": 599, "rating": 4.7 },
        { "id": 17, "name": "Instant Pot Pressure Cooker", "category": "Home Appliances", "price": 149, "rating": 4.5 },

        { "id": 18, "name": "IKEA Study Table", "category": "Furniture", "price": 250, "rating": 4.4 },
        { "id": 19, "name": "Ergonomic Office Chair", "category": "Furniture", "price": 320, "rating": 4.5 },
        { "id": 20, "name": "Wooden Bookshelf", "category": "Furniture", "price": 200, "rating": 4.3 }
        ];


function FilterProduct(){

        const [theme,setTheme]=useState("light");
        const [text,setText]=useState("");
        const [searchText,setSearchText]=useState("");
        

    useEffect(()=>{
        const timeId=setTimeout(()=>{setSearchText(text)},400);

        return ()=>{clearTimeout(timeId)};
    },[text]);

    const filteredproducts=useMemo(()=>{
        console.log("usememo runnig...");
        if (searchText=== "") {
         return products;
        }
        return products.filter((p)=>p.category.toLowerCase()===searchText.toLowerCase());


    },[searchText]);

    return(
        <>
            <button onClick={()=>{theme==="light"?setTheme("dark"):setTheme("light")}}>Change Theme</button>
            <p>{theme}</p>
            <input type="text"
             value={text}
              onChange={(e)=>setText(e.target.value)}
            />
             {
                filteredproducts.map((pr)=>{
                    return <p key={pr.id}>{pr.name}</p>
                })
             }
        
        
        
        </>
    );


}
export default FilterProduct;
