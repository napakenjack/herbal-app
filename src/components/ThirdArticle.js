import {advItem} from "../data"

import classes from './ThirdArticle.module.scss'

const ThirdArticle = () => {
    return (
        <>{advItem.map((card,index) =>{
            return(
                <div key={index} className={classes.third_art_cont}>
                <div className={classes.article_field}>                    
                    <img src={card.img} className={classes.card_image}/>
                    <div className={classes.display_cont}>
                    <div className={classes.adv_title}>
                        {card.title}
                    </div>
                    <div className={classes.adv_article}>
                    {card.desc}
                    </div>
                    <button className={classes.det_btn}>詳細</button>
                    </div>
                    
                </div>
            </div>
            )
        })}
        </>
    )
}

export default ThirdArticle
