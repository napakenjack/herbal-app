import React from 'react'

import classes from './ContactUs.module.scss'

const ContactUs = () => {
    return (
        <>
        <div className={classes.container_title}>
            <h2>
                Contact Us Page
            </h2>
        </div>
        <div className={classes.contact_display_flex}>
            <div className={classes.content}>
                <div className={classes.small_container_title}>
                【なんか店】
                </div>
                <div className={classes.inner_display}>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>許可の種類</div>
                <div className={classes.bot_text}>店舗販売業許可証 許可番号 第富店999号</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>許可年月日</div>
                <div className={classes.bot_text}>令和99年99月99日</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>有効期限</div>
                <div className={classes.bot_text}>令和99年99月99日</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>店舗開設者</div>
                <div className={classes.bot_text}>株式会社 9999</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>店舗の名称</div>
                <div className={classes.bot_text}>とってもいい病院 富士山店</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>店舗の所在地</div>
                <div className={classes.bot_text}>富士通県富山市境野新124番1</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>所轄自治体</div>
                <div className={classes.bot_text}>何処か</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>取り扱う一般用医薬品の区分</div>
                <div className={classes.bot_text}>医薬品、二類医薬品、第三類医薬品</div>
                </div>
                <div className={classes.inner_text_container}>
                <div className={classes.top_text}>この店舗に勤務する者の名札等による区分に関する説明</div>
                <div className={classes.bot_text}><br/>  登録販売者:「登録販売者」の名札、白い白衣
                                          <br/>  その他:「一般従事者」の名札</div>
                </div>
                </div>
            </div>
            <div className={classes.second_content_container}>
                <div className={classes.left_container}>
                    <div className={classes.container_name}>
                        【医薬品販売に必要な許認可証の情報】
                    </div>
                    <div className={classes.item_cont}>                        
                    店舗管理者(登録販売者)
                    </div>
                    <hr className={classes.hr_color}/>
                    <div className={classes.display_content}>
                        <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" />
                    <div className={classes.item_cont}>                        
                        <div className={classes.name_font}>店舗管理者(登録販売者):名前</div> 
                    <br/><div className={classes.cert_font}>販売従事登録番号:9999号</div> 
                    </div>
                    </div>
                    <div className={classes.item_cont, classes.back_color}>                        
                        店舗の営業時間
                        <br/>     月〜日 AM 10:00～PM 5:00 （不定休）
                    </div>
                    <div className={classes.item_cont, classes.back_color}>                        
                        専門家が相談応需を受ける連絡先電話番号
                        <br/>     07-44150--101
                        <br/>     相談応需可能時間:月〜日 AM 10:00～PM 5:00 （不定休）
                    </div>
                    <div className={classes.item_cont, classes.back_color}>                        
                        緊急連絡先
                        <br/>     07-44150--101
                        <br/>     相談応需可能時間:月〜日 AM 10:00～PM 5:00 （不定休）
                    </div>

                    

                    

                    

                </div>

                <div className={classes.right_container}>
                    <div className={classes.container_name}>
                        店舗の写真
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ContactUs
