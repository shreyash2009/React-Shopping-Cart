import React from 'react'
import FoodItem from './FoodItem';
import '../../Styles/Home/Home.css'
import { useGlobalContext } from '../../Context/Context'
const Home = () => {
    const {FoodData} = useGlobalContext();
    // console.log(FoodData)
  return (
    <section className='store-section'>
        {
            FoodData.map((item)=>{
                return(

                    <FoodItem key={item.id} {...item}/>
                )
            })
        }
    </section>
  )
}

export default Home