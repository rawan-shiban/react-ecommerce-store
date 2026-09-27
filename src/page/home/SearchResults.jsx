import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import SlideProductLoading from '../../components/slideProducts/SlideProductLoading'; // أضف هذا الاستيراد
import Product from '../../components/slideProducts/Product'; // أضف هذا الاستيراد

function SearchResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // تصحيح: استخدام useLocation بشكل صحيح
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    console.log(query);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/search?q=${query}`
                );
                const data = await res.json();
                setResults(data.products || []);
            } catch (error) {
                console.error("Search Error : ", error); // تصحيح: إصلاح الإملاء
            } finally {
                setLoading(false);
            }
        };
        
        if (query) {
            fetchResults();
        } else {
            setLoading(false); // إذا لم يكن هناك query، إيقاف التحميل
        }
    }, [query]);

    return (
        <PageTransition> {/* تصحيح: إزالة key من هنا */}
            <div className="category-products">
                {loading ? (
                    <SlideProductLoading /> /* تصحيح: إزالة key من هنا */
                ) : results.length > 0 ? (
                    <div className="container">
                        <div className="top-slide">
                            <h2>Search Results for: "{query}"</h2> {/* تصحيح: استخدام query بدلاً من category */}
                            <p>{results.length} products found</p> {/* تصحيح: عرض عدد النتائج */}
                        </div>
                        <div className="products">
                            {results.map((item, index) => ( /* تصحيح: استخدام results بدلاً من CategoryProducts.Product */
                                <Product item={item} key={item.id || index} /> /* تصحيح: استخدام id كـ key إن وجد */
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className='container'>
                        <p>No Results found for "{query}".</p> {/* تصحيح: عرض الاستعلام */}
                    </div>
                )}
            </div>
        </PageTransition>
    );
}

export default SearchResults;