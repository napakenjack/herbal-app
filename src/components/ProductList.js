import { useState } from "react"
import items from "../category"
import CategoryButton from "./CategoryButton";
import ProductCategoryList from "./ProductCategoryList";
//styles
import './ProductList.css'

const allCategories = ['All', ...new Set(items.map(item => item.category))];

export default function ProductList() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);

    const filter = (button) =>{

        if(button === 'All'){
          setMenuItem(items);
          return;
        }
    
        const filteredData = items.filter(item => item.category ===  button);
        setMenuItem(filteredData)
      }
      return (
        <div className="list_container">

        <CategoryButton button={buttons} filter={filter} />
        <ProductCategoryList menuItem={menuItem}/>
            
        </div>
      );
}
