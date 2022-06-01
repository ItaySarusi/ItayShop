import React, { useEffect } from 'react';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';
import Checkout from './pages/checkout/checkcout.component';
import Footer from './components/footer/footer.component';
import { useDispatch, useSelector } from 'react-redux';
import Order from './pages/order/order.component';
import Shipping from './pages/shipping/shipping.component';
import ProtectedRoute from './components/protected-route/protected-route.component';
import AdminProtectedRoute from './components/protected-route/protected-route-admin.component';
import { Container } from './components/header/header.styles';
import NotFoundPage from './pages/not-found/not-found.component';
import About from './pages/about/about.component';
import ViewOrders from './pages/view-orders/view-orders';
import AdminViewOrders from './pages/admin/admin.view-orders';
import axios from 'axios';
import { setUsers } from 'redux/user/user.actions';

const App = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((store) => store.user);

  useEffect(() => {
    axios
      .get('users.json')
      .then((res) => {
        dispatch(
          setUsers({
            currentUser: currentUser ? currentUser : null,
            users: res.data.users,
          })
        );
      })
      .catch((err) => console.log(err.message));
  }, [currentUser, dispatch]);

  return (
    <div className='App'>
      <Header />
      <Container main>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
          <Route extact path='/checkout' component={Checkout} />
          <Route extact path='/about' component={About} />
          <ProtectedRoute exact path='/shipping' component={Shipping} />
          <ProtectedRoute exact path='/order' component={Order} />
          <ProtectedRoute exact path='/view-orders' component={ViewOrders} />
          <AdminProtectedRoute
            exact
            path='/admin'
            component={AdminViewOrders}
          />
          <Route path='/*' component={NotFoundPage} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
