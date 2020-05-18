import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderComponent from './Component/Header/Header';
import style from './App.module.css'
import VladContainer from './Component/Vlad/VladContainer';
import VitalContainer from './Component/Vitaliy/VitaliyContainer'
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import Buy from './Component/Vlad/Buy/BuyContainer';
import Order from './Component/Vlad/Order/Order';
import ClaculatorContainer from './Component/Vitaliy/Calculator/ClaculatorContainer';

const AppComponent = React.memo((props) => {
  return (
    <div classNamea={style.wrapper}>
      <HeaderComponent />
      <Switch>
        <Route path='/hryhoriv-vlad' render={() => <VladContainer />} />
        <Route path='/hryhoriv-vitaliy' render={() => <VitalContainer />} />
        <Route path='/buy/:pizzaId?' render={() => <Buy/>} />
        <Route path='/order' render={() => <Order/>} />
        <Route path='/calculator' render={() => <ClaculatorContainer/>} />
        <Route path='*' redact={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </div>
  )
})

export const AppContainer = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AppComponent somethingText="TEXT" />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  )
}