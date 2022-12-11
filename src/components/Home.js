// import {  Link } from 'react-router-dom';
import '../components/styles/Home.css'
// import React, { useEffect, useState } from 'react'
// import SignUp from './SignUp';
// import FoodPop from './FoodPop';
import { Link} from 'react-router-dom'
import Chicken from '../assets/Chicken.jpg'
import Bread from '../assets/Bread.jpg'
import Burger from '../assets/Burger.jpg'
import ChillieBurger from '../assets/ChillieBurger.jpg'
import Pasta from '../assets/Pasta.jpg'
import Stew from '../assets/Stew.jpg'

// function Home({user}) {
    // const [foods, setFoods] = useState([]);

    // useEffect(()=>{
    //     fetch("https://instant-eats-production.up.railway.app/foods")
    //     .then((res)=> res.json())
    //     .then((foodInfo)=> {
    //         setFoods(foodInfo)})
    //         .catch((err)=> console.log(err));
       
    // },[]);
    // console.log(user)

    // {user? (
    //   <Link to='/home' />
    // ) : (
    //   <Link to='/signup'/>
    // )}
    // // if(!user) return <SignUp setUser={user}/>
    // if (!foods) {
    //   return null
    // }
    
  // return (

    
  //   <div className='foodies'>
  //       {foods.map(foodSingle=>
  //       <FoodPop key={foodSingle.id} id={foodSingle.id} name={foodSingle.name} food_url={foodSingle.food_url} price={foodSingle.price} review={foodSingle.review} description={foodSingle.description}></FoodPop>)}
  //   </div>
  // )
// }

function Home() {
  return (
     <div className='all-foods'>
     <marquee behavior="" direction="right to left">      
        <h3>All-Inclusive Foods, Choose Your Choice</h3>
    </marquee>
              <div className="img-palour">
              <Link to='/about' className='na-link' >about us</Link>

                <div className="one_food">
                  <img  className="chick"src={Chicken} alt="/"/>
                  <p class="overlay">Order now Price: 500</p>
                </div>

                <div className="one_food">
                  <img  className="chick"src={Bread} alt="/"/>
                  <p class="overlay"> Order now Price: 400</p>
                </div>

                <div className="one_food">
                  <img src={Burger} alt="/"/>
                  <p class="overlay"> Order now Price: 500</p>
                </div>

                <div className="one_food">
                  <img className="chick"src={ChillieBurger} alt="/"/>
                  <p class="overlay">Order now Price: 800</p>
                </div>

                <div className="one_food">
                  <img  className="chick"src={Pasta} alt="/"/>
                  <p class="overlay">Order now Price: 1500</p>
                </div>

                <div className="one_food">
                  <img  className="chick"src={Stew} alt="/"/>
                  <p class="overlay">Order now Price: 2000</p>
                </div>
              </div>
      </div>
      
            
       
  )
}

export default Home