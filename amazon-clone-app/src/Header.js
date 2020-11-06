import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider'


function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header__logo"
                    src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
                    alt=""/>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        HELLO GUEST
                    </span>
                    <span className="header__optionLineTwo">
                        SIGN IN
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        RETURNS
                    </span>
                    <span className="header__optionLineTwo">
                        &ORDERS
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        YOUR
                    </span>
                    <span className="header__optionLineTwo">
                        PRIME
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header;