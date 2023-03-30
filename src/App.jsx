import LandingPage from "./View/LandingPage";
import SignInInvestor from './View/SignInInvestor'
import SignInBussiness from './View/SignInBussiness'
import SignUpView from './View/SignUpView'
import Detail from './View/Profile'
import ChangePassword from './View/ChangePassword'
import ForgotPassword from './View/ForgotPassword'
import NewPassword from './View/NewPassword'
import StartupList from './View/StartupList'
import InvestorList from './View/InvestorList'
import Home from './View/Home'
import Profile from "./View/Profile";
import EmailCode from "./View/EmailCode";
import PasswordChanged from "./View/PasswordChanged";
import CardDetail from "./View/CardDetail"
import Activity from "./View/Activity"
import SignInRole from "./View/SignInRole"
import InvestorDetail from "./View/InvestorDetail";
import ActivityInvestor from "./View/ActivityInvestor";
import { Routes, Route, HashRouter } from "react-router-dom";
import React from "react";
class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignInRole" element={<SignInRole />}/>
            <Route path="/SignInInvestor" element={<SignInInvestor />}/>
            <Route path="/SignInBussiness" element={<SignInBussiness />}/>
            <Route path="/SignUpView" element={<SignUpView />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/Detail" element={<Detail />}/>
            <Route path="/ChangePassword" element={<ChangePassword />}/>
            <Route path="/ForgotPassword" element={<ForgotPassword />}/>
            <Route path="/EmailCode" element={<EmailCode />}/>
            <Route path="/NewPassword" element={<NewPassword />}/>
            <Route path="/PasswordChanged" element={<PasswordChanged />}/>
            <Route path="/StartupList" element={<StartupList />}/>
            <Route path="/InvestorList" element={<InvestorList />}/>
            <Route path="/CardDetail" element={<CardDetail />}/>
            <Route path="/InvestorDetail" element={<InvestorDetail />}/>
            <Route path="/Activity" element={<Activity />}/>
            <Route path="/ActivityInvestor" element={<ActivityInvestor />}/>
            {/* <Route path="/ChangeEmail" element={<ChangeEmail />}/> */}
          </Routes>
        </HashRouter>
      </>
    );
  }
}

export default App;
