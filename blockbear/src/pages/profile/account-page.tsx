import { Button } from "@mui/material";
import {
    BrowserRouter as Router, 
    Routes, 
    Route
  } from 'react-router-dom';
import Nav from "./profile-stats";
import Test from "./test";

const AccountPage = () => {
    return(
        <div>
            <div className="account-left-side">
                <Router>
                    <Routes>
                        <Route path='/' element={<Nav/>}>
                        </Route>
                        <Route path='/' element={<Test/>}>
                        </Route>
                    </Routes>
                </Router>
            </div>
            <div className="feed-right-side">

            </div>
        </div>
    );
}

export default AccountPage;