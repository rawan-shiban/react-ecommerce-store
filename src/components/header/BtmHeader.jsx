import React, { useEffect, useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import '../header/header.css'

// مصفوفة روابط التنقل الرئيسية (كل عنصر يحتوي على عنوان ومسار)
const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

function BtmHeader() {
  const location = useLocation();


  const [categories, setCategories] = useState([]);

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  useEffect(() => {
    setIsCategoryOpen(false)
  }, [location])


  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json()) // تحويل الاستجابة إلى JSON
      .then((data) => setCategories(data)); // تخزين البيانات في categories
  }, [])

  return (
    <div className='btm-header'>
      <div className="container">
        <nav className="nav">
          <div className="category-nav">
            <div className="category-btn" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <FiMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>


            <div className={`category-nav-list ${isCategoryOpen ? "active" : ""}`}>
              {categories.map((category) => (
                // كل عنصر يحتاج key فريد (نستخدم slug)
                <Link key={category.slug} to={`category/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* روابط التنقل الرئيسية */}
          <div className="nav-links">
            {NavLinks.map((item) => (
              // location.pathname === item.link ? 
              // إذا كان المسار الحالي يساوي رابط العنصر، نضيف class "active"
              <li key={item.link} className={location.pathname === item.link ? "active" : ""}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>

        {/* أيقونات تسجيل الدخول والتسجيل */}
        <div className="sign-regs-icon">
          <Link to="/"><PiSignInBold /></Link>
          <Link to="/"><FaUserPlus /></Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;