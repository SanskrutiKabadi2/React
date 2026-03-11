import { useReducer} from "react";

const products = [
  { id: 1, name: "Laptop", price: 70000, category: "Electronics" },
  { id: 2, name: "Smartphone", price: 30000, category: "Electronics" },
  { id: 3, name: "Headphones", price: 4000, category: "Accessories" },
  { id: 4, name: "Smart Watch", price: 9000, category: "Wearables" },
  { id: 5, name: "Keyboard", price: 1500, category: "Accessories" },
  { id: 6, name: "Mouse", price: 800, category: "Accessories" },
  { id: 7, name: "Tablet", price: 25000, category: "Electronics" },
  { id: 8, name: "Monitor", price: 12000, category: "Electronics" },
  { id: 9, name: "Bluetooth Speaker", price: 3500, category: "Audio" },
  { id: 10, name: "Gaming Chair", price: 15000, category: "Furniture" }
];
const initialState={
    cart:[]
}
const reducer=(state,action)=>{
     switch(action.type){
        case "ADD_ITEM":
            const existing=state.cart.find((ele)=>ele.id===action.payload.id);
            if(existing){
                return {
                    cart: state.cart.map((ele)=>{
                        return ele.id===action.payload.id?{...ele,quantity:ele.quantity+1}:ele;
                    })
                }
            }
            return {
                    cart: [...state.cart,{...action.payload,quantity :1}]
                };

        case "REMOVE_ITEM" :
            return {
                 cart: state.cart.filter((ele)=>ele.id!==action.payload.id)
            };
           

        case "INCREMENT":
            return {
            cart: state.cart.map((ele)=>{
                return ele.id===action.payload.id? {...ele,quantity:ele.quantity+1}:ele;

            })
            }

        case "DECREMENT":
            return {
                cart: state.cart.map((ele)=>{
                    return ele.id===action.payload.id? {...ele,quantity:ele.quantity-1}:ele

                })
             }

        case "CLEAR_CART":
            return {
                cart:[]
            }
            

    }

}


function ShoppingCart(){
     const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <>
            <h1>Products</h1>
            {
               products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>Category: {product.category}</p>
                    <button onClick={()=>dispatch({type:"ADD_ITEM",payload:{  id: state.cart.length+1, name: "Laptop", price: 100000, category: "Electronics"}})}> Add to cart</button>
                </div>
                ))
            }
            <br />
            <h1>Cart</h1>
            {
               state.cart.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>Category: {product.category}</p>
                    <p>Quantity : {product.quantity}</p>
                    <button onClick={()=>dispatch({type:"INCREMENT",payload:{id:product.id}})}> increase quantity</button>
                    <button onClick={()=>dispatch({type:"DECREMENT",payload:{id:product.id}})}> decrese quantity</button>
                    <button onClick={()=>dispatch({type:"REMOVE_ITEM",payload:{id:product.id}})}> Remove item</button>
                </div>
                ))
            }  
            </>
        );
}
export default ShoppingCart;
