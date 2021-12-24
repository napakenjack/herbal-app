import React from 'react'
import ProductList from '../components/ProductList';
import SecondArticle from '../components/SecondArticle/SecondArticle';
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
            <SecondArticle/>
        </div>
        <div className={classes.third_article}>
            <ThirdArticle/>
        </div>
        </>
    )
}

export default MainPage;