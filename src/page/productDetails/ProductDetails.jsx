import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../../components/slideProducts/Product'
import SlideProduct from '../../components/slideProducts/SlideProduct'
import ProductDetailsLoading from './ProductDetailsLoading'
import "./ProductDetails.css"
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { BsCart4 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import ProductImages from './ProductImages'
import ProductInfo from './ProductInfo'
import PageTransition from '../../components/PageTransition'

function ProductDetails() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true)

  // جلب المنتج
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)  // ✅ data هو المنتج نفسه
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  // جلب المنتجات المشابهة
  useEffect(() => {
    if (!product) return

    fetch(`https://dummyjson.com/products/category/${product.category}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedProducts(data.products || [])  // ✅ استخدم data.products
      })
      .catch((error) => console.error(error))
      .finally(() => setLoadingRelatedProducts(false))
  }, [product?.category])

  if (loading) return <ProductDetailsLoading />
  if (!product) return <p>Product Not Found</p>

  return (
    <PageTransition key={id}>
          <>
       {loading ? (
       <ProductDetailsLoading/>
        ) : (
          // <SlideProduct
          //   key={product.category}
          //   data={relatedProducts}
          //   title={product.category?.replace('-', ' ') || 'Related Products'}
          // />


          <div className="item-details">
        <div className="container">
          {/* <ProductImages product={product} /> */}
          <ProductInfo product={product} />
        </div>
      </div>

        )}
      
      <div>
        {loadingRelatedProducts ? (
          <p>Loading....</p>
        ) : (
          <SlideProduct
            key={product.category}
            data={relatedProducts}
            title={product.category?.replace('-', ' ') || 'Related Products'}
          />
        )}
      </div>
    </>
    </PageTransition>

  )
}

export default ProductDetails