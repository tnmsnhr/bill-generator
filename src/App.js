import { Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Invoice from './pages/invoice/invoice';
import Layout from './components/layout/layout';
import Preview from './pages/preveiew/preview';

function App() {
  return (
    <div className='app'>
      {/* <Header /> */}
      <Layout>
        <div className='inv-prev'>
          <Invoice />
          <Preview />
        </div>
      </Layout>
      {/* <Switch> */}
      {/* <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage}/> */}
      {/* <Route exact path='/signin' render={()=> props.currentUser ? <Redirect to='/'/>:<SignInAndSignUpPage />}/> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
