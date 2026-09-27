import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/Product'
import './CategoryPage.css'
import PageTransition from '../../components/PageTransition'
function CategoryPage() {

    const {category} = useParams()

    const [CategoryProducts , setCategoryProducts ] = useState([])
    const [loading , setloading ] = useState(true)

    useEffect(() => {
        fetch(``)
        .than((res)=>res.json())
        .than((data)=>{setCategoryProducts(data)})
        .catch((error) => console.error(error))
        .finally(() => setloading(false))
    },[category])

  return (
    <PageTransition key={category}>
          <div className="category-products">
        {loading ?  <SlideProductLoading key={category} />:
         <div className="container">
              <div className="top-slide">
                    <h2>{category}:{categoryProducts.limit}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut!</p>
                </div>
            <div className="products">
                {CategoryProducts.Product.map((item , index)=> (<Product item={item} key={index}/>))}
            </div>
        </div>}
       
    </div>
    </PageTransition>
  
  )
}

export default CategoryPage