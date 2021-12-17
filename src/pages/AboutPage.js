import React from 'react'

import './AboutPage.css'

const AboutPage = () => {
    return (
        <>
        <div className="container_title">
            <h2>
                お買い物ガイド
            </h2>
        </div>
        <div className='display_flex'>
            <div className='content_container'>
                <div className="small_container_title">
                    発送・送料について
                </div>

                <div className='content_text'>
                    送料:全国一律0円
                    <br/>※離島・一部地域でも追加送料がかかることはありません。
                    前払い決済の場合（例:銀行振込）⇒ご入金確認後、2営業日以内に発送いたします。
                    上記以外の決済の場合（例:クレジットカード）⇒ご注文確認後、2営業日以内に発送いたします。
                    <br/>※一部対象外の商品につきましては、送料が発生致します。詳細は各商品ページでご確認ください。
                </div>

                <div className='inner_container'>
                    <div className="small_container_title">
                        お支払い方法
                    </div>

                    <div className='content_text'>
                        クレジットカード決済
                        <br/><img src="https://www.rakuten.ne.jp/gold/herbal-i/images2/creditcard.png"/>
                        <br/>銀行振込・Apple Pay・コンビニ決済・郵便局ATMなど
                    </div>
                </div>

                <div className='inner_container'>
                    <div className="small_container_title">
                        お問い合わせ
                    </div>
                    <div className='display_cont'>                        
                        <div className='display_inner_cont'>
                        <img src="https://www.rakuten.ne.jp/gold/herbal-i/images2/tel.jpg"/>
                            <div className='tel_info'>
                               <div className='work_time'>受付時間 10:00~17:00（平日のみ）</div> 

                                <div className='tel_number'>0120-659-435</div>
                            </div>
                        </div>

                        <div className='content_text'>
                            ※お問い合わせには2営業日以内に返答します。
                            <br/>※営業時間外のお問い合わせに関しては翌営業日の受付となります。
                        </div>
                    </div>
                </div>

            </div>            

            <div className='content_container'>
                <div className="small_container_title">
                    返品について
                </div>
                <div className='content_text'>
                    当店ではお客様都合による交換は受け付けておりません。
                    <br/>商品等の不具合による返金の条件
                    <br/>商品の使用有無に関わらず、対応期間内に電話もしくはメールにてご連絡いただいたもののみ原則対応いたします。
                    <br/>対応可能期間:商品到着後7日以内にご連絡をいただいた場合
                    <br/>返金額:商品代金全額
                    <br/>返品送料:店舗負担
                    <br/>商品等の不具合による交換の条件
                    <br/>商品の使用有無に関わらず、対応期間内に電話もしくはメールにてご連絡いただいたもののみ原則対応いたします。
                    <br/>対応可能期間:商品到着後7日以内にご連絡をいただいた場合
                    <br/>返品送料:店舗負担
                    <br/>再送料:店舗負担
                    <br/>※同一商品の手配が不可能など交換に応じることができない場合がございます。その際は返金にてご了承ください。
                </div>

                <div className='inner_container'>
                    <div className="small_container_title">
                        会社概要
                    </div>
        
                    <div className='content_text'>
                    株式会社ハーバルアイ
                    <br/>〒810-0001
                    <br/>福岡県福岡市中央区天神5-7-3 福岡天神北ビル6階
                    <br/>TEL:0120-659-435 FAX:0120-892-489
                    <br/>代表者:橋口 遼
                    <br/>店舗運営責任者:早川 桃子
                    <br/>店舗セキュリティ責任者:早川 桃子
                    <br/>店舗連絡先:herbal-i_3@shop.rakuten.co.jp
                    </div>
                </div>
            </div>


        </div>


        </>

    )
}

export default AboutPage
