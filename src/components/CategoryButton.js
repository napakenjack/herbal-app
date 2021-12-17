import React from 'react'
import './CategoryButton.css'

function CategoryButton({button, filter}) {
    return (
        <div className="buttons">
            {
                button.map((category, i)=>{
                    return <button key={i} type="button" onClick={()=> filter(category)} className="btn">{category}</button>
                })
            }
        </div>
    )
}

export default CategoryButton;
