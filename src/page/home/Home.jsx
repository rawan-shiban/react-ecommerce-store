import React, { useEffect, useState } from 'react'
import HeroSlider from '../../components/slideProducts/HeroSlider'
import SlideProduct from '../../components/slideProducts/SlideProduct'
import './home.css'
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading'
import PageTransition from '../../components/PageTransition'

const categories = [
    "smartphones",
    "mobile-accessories",
    "laptops",
    "tablets",
    "sports-accessories",
    "sunglasses"
]

function Home() {
    const [products, setProducts] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const results = await Promise.all(
                    categories.map(async (category) => {
                        const res = await fetch(`https://dummyjson.com/products/category/${category}`);
                        const data = await res.json();
                        return { [category]: data.products || [] }
                    })
                )

                const productsData = Object.assign({}, ...results);
                setProducts(productsData)
            } catch (error) {
                console.error("Error Fetching", error)
                // ✅ في حالة الخطأ، ضع مصفوفات فارغة
                const emptyData = {}
                categories.forEach(cat => {
                    emptyData[cat] = []
                })
                setProducts(emptyData)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    return (
     <PageTransition>
           <div>
            <HeroSlider />

            {loading ? (
                categories.map((category) => (
                    <SlideProductLoading key={category} />
                ))
            ) : (
                categories.map((category) => {
                    const categoryProducts = products[category] || []  // ✅ تأكد من وجود مصفوفة
                    return (
                        <SlideProduct 
                            key={category} 
                            data={categoryProducts} 
                            title={category.replace("-", " ")}  // ✅ استخدم مسافة بدلاً من *
                        />
                    )
                })
            )}
        </div>
     </PageTransition>
    )
}

export default Home