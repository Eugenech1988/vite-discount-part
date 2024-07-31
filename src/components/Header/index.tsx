import React from 'react';
import Burger from '@/components/Burger';
import AddDeposit from '@/components/AddDeposit';
import headerNotificationsImg from '@/assets/ring.svg';
import headerGiftsImg from '@/assets/gift.svg';
import headerSearchImg from '@/assets/search.svg';
import headerUserLogoImg from '@/assets/header-user-logo.png';
import logo from '@/assets/logo.svg';
import { useAppDispatch } from '@/store/storeHook';
import { setMenuOpened } from '@/slices/mainSlice';
import './style.scss';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  // const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const handleBurgerClick = (e: any) => {
    e.stopPropagation();
    dispatch(setMenuOpened());
  };
  // const handleSearchClick = () => {
  //   setSearchOpen(true);
  // }
  return (
    <header className='header'>
      <div className='container'>
        <div className='headerInner flex-s-b'>
          <div className='leftSide flex-s-b' onClick={handleBurgerClick}>
            <Burger/>
            <img src={logo} alt='logo' className='logo inline-b-v-m'/>
          </div>
          <div className='rightSide flex-s-b'>
            <div className='headerUserInteractions'>
              {/*{isSearchOpen ?*/}
              {/*  <div className='headerSearchInputWrapper'>*/}
              {/*    <input type='text' className='headerSearchInput'/>*/}
              {/*    <img src={headerSearchImg} className='headerSearchImgInput'/>*/}
              {/*  </div>*/}
              {/*  :*/}
              {/*  <img src={headerSearchImg} className='headerSearchImg'/>*/}
              {/*}*/}
              <img src={headerSearchImg} className='headerSearchImg'/>
              <img src={headerGiftsImg} className='headerGiftsImg'/>
              <img src={headerNotificationsImg} className='headerNotificationsImg'/>
            </div>
            <AddDeposit/>
            <div className='headerUserLogo'>
              <img src={headerUserLogoImg} className='headerUserLogoImg'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
