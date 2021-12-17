import React from 'react'
import './ProductList.css'

function Menu({menuItem}) {
    return (
        <div className="product_list anim">
           
            <ul>
                {menuItem.map(product =>(
                    <li key={product.id}>
                        <img className="product_image" src={product.img}/>
                        <h3 className="product_title">{product.title}</h3>
                        <p className="product_price">{product.price}円（税込）</p>
                        <p className="product_category" >{product.category}</p>
                        <p className="product_desc">{product.desc}</p>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Menu;