import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { routes } from '@/mocks/routes';
import Header from '@/components/Header';
import Menu from '@/components/Menu';
import { useAppSelector } from '@/store/storeHook';
import ContentComponent from '@/components/ContentComponent';
import AddTransaction from '@/components/AddTransaction';
import AddTransactionModal from '@/components/AddTransactionModal';

const App: React.FC = () => {
  const showMenu = useAppSelector(state => state.main.menuOpened);
  const showTransactionMenu = useAppSelector(state => state.main.addTransactionOpened);
  return (
    <Router>
      <Header/>
      <CSSTransition
        in={showTransactionMenu}
        timeout={300}
        classNames="transactionMenu"
        unmountOnExit
      >
        <AddTransaction/>
      </CSSTransition>
      <CSSTransition
        in={showTransactionMenu}
        // timeout={300}
        // classNames='transactionModal'
        unmountOnExit
      >
        <AddTransactionModal/>
      </CSSTransition>
      <CSSTransition
        in={showMenu}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <Menu/>
      </CSSTransition>
      <Routes>
        <Route path={'/'} element={<ContentComponent/>}/>
        {routes &&
          routes.map((route, index) =>
            <Route key={index} path={route.link} element={route.component({}, undefined)}/>
          )
        }
      </Routes>
    </Router>
  );
};

export default App;
