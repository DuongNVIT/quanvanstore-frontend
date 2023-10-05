import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AlertModal from './components/AlertModal/AlertModal';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import MyProfilePage from './pages/MyProfilePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import TestPage from './pages/TestPage';

import "./firebase.js"
import { onMessageListener, requestForToken } from './firebase.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pushNotification } from './store/actions/pushNotification';
import OrderPage from './pages/OrderPage';
import NewsPage from './pages/NewsPage';
import GeneralInforPage from './pages/GeneralInforPage';

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const [noti, setNoti] = useState({title: "" , body: ""});

    useEffect(() => {
        console.log("Vao day nay")
        // getMessagingToken();
        requestForToken();
    }, [])
    onMessageListener()
        .then((payload) => {
            setNoti(prev => { return { title: payload?.notification?.title, body: payload?.notification?.body } });
            // console.log("Vào onmessage");
            dispatch(pushNotification({ title: payload?.notification?.title, body: payload?.notification?.body }));
        })
        .catch((err) => console.log('failed: ', err));
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return (
        <div className="App">
            {/* {isTokenFound &&
                "Notification permission enabled 👍🏻 "
            }
            {!isTokenFound &&
                "Need notification permission ❗️ "
            } */}
            {/* <h1>{noti.title}</h1>
            <h2>{noti.body}</h2> */}
            <AlertModal />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detail/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<ShoppingCartPage />} />
                <Route path="/profile/*" element={<MyProfilePage />} />
                <Route path="/list" element={<ProductListPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/general-infor" element={<GeneralInforPage />} />
                <Route path="/news/:id" element={<NewsPage />} />
                <Route path="/admin/*" element={<AdminPage />} />
                <Route path="/test" element={<TestPage />} />
            </Routes>
            {/* <HomePage/>
      <ProductDetailPage/>
      <ShoppingCartPage/> 
      <MyProfilePage/>
      <ProductListPage/>
      <MyBillPage/>
      <ChangePassWordPage/>
      <SignIn/> 
      <SingInPage/> */}
            {/* <AdminPage/> */}
            {/* <TestPage/> */}
        </div>
    );
}

export default App;
