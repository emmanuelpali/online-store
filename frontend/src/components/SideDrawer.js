import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import './SideDrawer.css';

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ["sidedrawer"];
    if (show) {
        sideDrawerClass.push("show")
    }

    
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const  getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    };


    return (
        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to='/cart'>
                    <i className="fas fa-shopping-cart"></i>
                    <span>
                        Cart <span className="sidedrawer___cartbadge">{getCartCount()}</span>
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to='/'>Shop</Link>
                </li>
            </ul>
            
        </div>
    )
}

export default SideDrawer
