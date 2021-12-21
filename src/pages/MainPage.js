import React from 'react'
import ProductList from '../components/ProductList';
import MainSwiper from '../components/Swiper';
import ThirdArticle from '../components/ThirdArticle';

import classes from './MainPage.module.scss'

const MainPage = () => {
    return (
        <>
        <div className={classes.main_page_container}> 
           <MainSwiper/>
           </div>
        <div className={classes.product_list}>
            <ProductList/>
        </div>
        <div className={classes.products_for}>
            <ThirdArticle/>
        </div>
        </>
    )
}

export default MainPage;