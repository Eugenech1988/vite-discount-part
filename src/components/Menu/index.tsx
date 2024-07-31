import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '@/mocks/routes';
import closeIcon from '@/assets/close.svg';
import logo from '@/assets/logo.svg';
import { useAppDispatch } from '@/store/storeHook';
import { setMenuOpened, setTransactionMenu } from '@/slices/mainSlice';
import './style.scss';

const Menu: React.FC = () => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setMenuOpened());
    dispatch(setTransactionMenu());
  };
  const onLinkClick = () => {
    dispatch(setTransactionMenu());
    dispatch(setMenuOpened());
  };
  return (
    <div className='menuWrapper'>
      <div className='menuHeader'>
        <div className='container'>
          <div className='menuHeaderInner flex-s-b'>
            <img className='menuLogo' src={logo}/>
            <button className='menuClose' onClick={handleClose}>
              <img src={closeIcon} className='closeIcon'/>
            </button>
          </div>
        </div>
      </div>
      <div className='menuContent'>
        <div className='container'>
          <ul className='menuLinks'>
            {routes &&
              routes.map((route, index) =>
                <Link key={index} to={route.link} className='menuLink' onClick={onLinkClick}>
                  {route.name}
                </Link>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
