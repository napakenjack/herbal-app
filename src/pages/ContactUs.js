import React from 'react'

import './ContactUs.css'

const ContactUs = () => {
    return (
        <>
        <div className='container_title'>
            <h2>
                Contact Us Page
            </h2>
        </div>
        <div className='contact_display_flex'>
            <div className='content'>
                <div className='small_container_title'>
                【漢方生薬研究所（富山店）】
                </div>
                <div className='inner_display'>
                <div className='inner_text_container'>
                <div className='top_text'>許可の種類</div>
                <div className='bot_text'>店舗販売業許可証 許可番号 第富店0235号</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>許可年月日</div>
                <div className='bot_text'>令和3年8月18日</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>有効期限</div>
                <div className='bot_text'>令和9年8月17日</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>店舗開設者</div>
                <div className='bot_text'>株式会社 ハーバルアイ</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>店舗の名称</div>
                <div className='bot_text'>漢方生薬研究所 富山店</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>店舗の所在地</div>
                <div className='bot_text'>富山県富山市境野新124番1</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>所轄自治体</div>
                <div className='bot_text'>富山市保健所</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>取り扱う一般用医薬品の区分</div>
                <div className='bot_text'>第二類医薬品、指定第二類医薬品、第三類医薬品</div>
                </div>
                <div className='inner_text_container'>
                <div className='top_text'>この店舗に勤務する者の名札等による区分に関する説明</div>
                <div className='bot_text'><br/>  登録販売者:「登録販売者」の名札、白い白衣
                                          <br/>  その他:「一般従事者」の名札</div>
                </div>
                </div>
            </div>
            <div className='second_content_container'>
                <div className='left_container'>
                    <div className='container_name'>
                        【医薬品販売に必要な許認可証の情報】
                    </div>
                    <div className='item_cont'>                        
                    店舗管理者(登録販売者)
                    </div>
                    <hr className='hr_color'/>
                    <div className='display_content'>
                        <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" />
                    <div className='item_cont'>                        
                        <div className='name_font'>店舗管理者(登録販売者):安部 剛</div> 
                    <br/><div className='cert_font'>販売従事登録番号:16-15-10150号</div> 
                    </div>
                    </div>
                    <div className='item_cont back_color'>                        
                        店舗の営業時間
                        <br/>     月〜日 AM 10:00～PM 5:00 （不定休）
                    </div>
                    <div className='item_cont back_color'>                        
                        専門家が相談応需を受ける連絡先電話番号
                        <br/>     0120-659-435
                        <br/>     相談応需可能時間:月〜日 AM 10:00～PM 5:00 （不定休）
                    </div>
                    <div className='item_cont back_color'>                        
                        緊急連絡先
                        <br/>     0120-659-435
                        <br/>     相談応需可能時間:月〜日 AM 10:00～PM 5:00 （不定休）
                    </div>

                    

                    

                    

                </div>

                <div className='right_container'>
                    <div className='container_name'>
                        店舗の写真
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ContactUs
