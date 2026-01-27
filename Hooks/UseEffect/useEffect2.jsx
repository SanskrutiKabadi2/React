import { useEffect, useState } from "react";

function UseEfApi(){
    const [products,setProducts]=useState([]);

    useEffect(()=>{
       fetch('https://dummyjson.com/products').then(data=>data.json()).then(data=>setProducts(data["products"])).catch(err=>console.log(err));

    },[]);

    return(
        <>
            <h1>Products</h1>

            {products.map((pr)=>{
                return <>
                    <div style={{width:"100%",height:"200px",border:"1px black solid"}}>
                         <h1>{pr.title}</h1>
                        <p>{pr.description}</p>
                        <p>{pr.category}</p>
                        <p>{pr.price}</p>
                
                    </div>
                   
                </>

            }
                
        
            )
            }
        </>                                                                                                                                                                                                                                                                                                                                     
);}
export default UseEfApi;
