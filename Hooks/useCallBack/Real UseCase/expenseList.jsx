import {useState, useCallback } from "react";
import React from "react";

const ex=[
  {
    "id": 1,
    "title": "Groceries",
    "amount": 1500,
    "category": "Food",
    "date": "2026-03-01"
  },
  {
    "id": 2,
    "title": "Bus Ticket",
    "amount": 120,
    "category": "Transport",
    "date": "2026-03-02"
  },
  {
    "id": 3,
    "title": "Electricity Bill",
    "amount": 2200,
    "category": "Utilities",
    "date": "2026-03-03"
  },
  {
    "id": 4,
    "title": "Movie Ticket",
    "amount": 350,
    "category": "Entertainment",
    "date": "2026-03-04"
  },
  {
    "id": 5,
    "title": "Lunch",
    "amount": 250,
    "category": "Food",
    "date": "2026-03-05"
  },
  {
    "id": 6,
    "title": "Mobile Recharge",
    "amount": 499,
    "category": "Utilities",
    "date": "2026-03-06"
  },
  {
    "id": 7,
    "title": "Taxi Ride",
    "amount": 300,
    "category": "Transport",
    "date": "2026-03-07"
  },
  {
    "id": 8,
    "title": "Gym Membership",
    "amount": 2000,
    "category": "Health",
    "date": "2026-03-08"
  },
  {
    "id": 9,
    "title": "Coffee",
    "amount": 180,
    "category": "Food",
    "date": "2026-03-09"
  },
  {
    "id": 10,
    "title": "Online Course",
    "amount": 1200,
    "category": "Education",
    "date": "2026-03-10"
  }
];

function ExpenseList(){
    const [expenses,setExpences]=useState(ex);

    const editExpense=useCallback((name,id)=>{
        console.log(name+"is updated!");
        setExpences((prev)=>{
            return prev.map((ele)=>{
                return ele.id===id ?{...ele,title:"Pizza"}:ele;
            
            });
        
        });
    },[]);

        console.log("parent rendering")
    return(
        <>
        <h1>My Expenses</h1>
        {
            expenses.map((expense)=>{
                return (
                    <Expense key={expense.id} id={expense.id} title={expense.title} amount={expense.amount} category={expense.category} date={expense.date} editExpense={editExpense}/>
                )

            })
        }
        </>
    );
}

const Expense=React.memo((props)=>{
    console.log(props.title+"render");
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.amount}</p>
            <p>{props.category}</p>
            <p>{props.date}</p>
            <button onClick={()=>props.editExpense(props.title,props.id)}>Edit Expense</button>
        </>
    );

});
export default ExpenseList;
