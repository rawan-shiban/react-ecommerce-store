import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './header.css'

function SearchBox() {
    // نص البحث الذي يكتبه المستخدم
    const [searchTerm, setSearchTerm] = useState("");
    // قائمة الاقتراحات القادمة من الـ API
    const [suggestions, setSuggestions] = useState([]);

    // للتنقل برمجياً + معرفة المسار الحالي
    const navigate = useNavigate();
    const location = useLocation();

    // عند إرسال النموذج: ننتقل لصفحة البحث
    const handleSubmit = (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        if (searchTerm.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
        }
        setSuggestions([]);
    };

    // جلب الاقتراحات مع Debounce (تأخير 300ms بعد توقف الكتابة)
    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!searchTerm.trim()) {
                setSuggestions([]);
                return;
            }
            try {
                const res = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
                const data = await res.json();
                setSuggestions(data.products.slice(0, 5) || []); // أول 5 نتائج فقط
            } catch (error) {
                console.error("Search Error :", error);
                setSuggestions([]);
            }
        };

        // Debounce: تأخير الطلب لتقليل عدد مرات الاتصال بالـ API
        const debounce = setTimeout(() => {
            fetchSuggestions();
        }, 300);

        // تنظيف المؤقت عند تغيّر searchTerm أو إزالة المكوّن
        return () => clearTimeout(debounce);
    }, [searchTerm]);

    // تفريغ الاقتراحات عند الانتقال لصفحة جديدة
    useEffect(() => {
        setSuggestions([]);
    }, [location]);

    return (
        <div className='SearchBox-container'>
            <form onSubmit={handleSubmit} className="search-box">
                {/* Controlled Input: القيمة مرتبطة بالـ State */}
                <input
                    type="text"
                    className='search'
                    name='search'
                    id='search'
                    placeholder='Search For Products'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type='submit'>
                    <CiSearch />
                </button>
            </form>

            {/* عرض الاقتراحات فقط إذا وُجدت */}
            {suggestions.length > 0 && (
                <ul className='suggestions'>
                    {suggestions.map((item) => (
                        // key فريد لتمكين React من إدارة القائمة بكفاءة
                        <Link to={`/products/${item.id}`} key={item.id}>
                            <li>
                                <span>{item.title}</span>
                                {/* alt ضروري للوصولية و SEO */}
                                <img src={item.images[0]} alt={item.title} />
                            </li>   
                        </Link>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBox;