import React from 'react';
import logo from '@/assets/logo.svg';
import './style.scss';

const Logo:React.FC = () => {
  return <img src={logo} alt='logo' className='logo inline-b-v-m'/>
}

export default Logo;
