import LandingPage from "./View/LandingPage";
import SignInView from './View/SignInView'
import SignUpView from './View/SignUpView'
import Detail from './View/Profile'
import ChangePassword from './View/ChangePassword'
import ForgotPassword from './View/ForgotPassword'
import NewPassword from './View/NewPassword'
import Home from './View/Home'
import Profile from "./View/Profile";
import EmailCode from "./View/EmailCode";
import PasswordChanged from "./View/PasswordChanged";
import { Routes, Route, HashRouter } from "react-router-dom";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignInView" element={<SignInView />}/>
            <Route path="/SignUpView" element={<SignUpView />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/Profile/Detail" element={<Detail />}/>
            <Route path="/Profile/ChangePassword" element={<ChangePassword />}/>
            <Route path="/ForgotPassword" element={<ForgotPassword />}/>
            <Route path="/EmailCode" element={<EmailCode />}/>
            <Route path="/NewPassword" element={<NewPassword />}/>
            <Route path="/PasswordChanged" element={<PasswordChanged />}/>
            {/* <Route path="/ChangeEmail" element={<ChangeEmail />}/> */}
          </Routes>
        </HashRouter>
      </>
    );
  }
}

export default App;
