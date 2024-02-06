import { useContext } from 'react';
import './CSS/shopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../component/Item';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return(
        <div className='container'>
            <img src={props.banner} alt="" />
            <div className='category-container'>
                <div className='showing'>
                    <p>Showing 1-12 out of 36 products</p>
                    <p>Sort by <ion-icon  name="chevron-down-outline" ></ion-icon> </p>
                </div>

                <div className='category-product'>
                {all_product.map((item,i) =>{
                    if (props.category === item.category){
                        return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                    }else{
                        return null;
                    }
                })}
                </div>
                

            </div>

        </div>
    );
}

export default ShopCategory;