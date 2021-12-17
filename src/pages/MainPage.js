import React from 'react'
import ProductList from '../components/ProductList';
import MainSwiper from '../components/Swiper';

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
        </>
    )
}

export default MainPage;