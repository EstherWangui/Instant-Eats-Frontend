// import {  Link } from 'react-router-dom';
import '../components/styles/Home.css'
import React, { useEffect, useState } from 'react'
// import SignUp from './SignUp';
import FoodPop from './FoodPop';
import { Link} from 'react-router-dom'

function Home({user}) {
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        fetch("/foods")
        .then((res)=>res.json())
        .then((foodInfo)=> {
            setFoods(foodInfo)})
            .catch((err)=> console.log(err));
       
    },[]);
    console.log(user)

    {user? (
      <Link to='/home' />
    ) : (
      <Link to='/signup'/>
    )}
    // if(!user) return <SignUp setUser={user}/>
  return (
    <div className='foodies'>
        {foods.map(foodSingle=>
        <FoodPop key={foodSingle.id} id={foodSingle.id} name={foodSingle.name} food_url={foodSingle.food_url} price={foodSingle.price} review={foodSingle.review} description={foodSingle.description}></FoodPop>)}
    </div>
  )
}

export default Home