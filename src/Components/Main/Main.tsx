import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import Users from "../Users/Users";
import Login from "../Login/Login";
import DailyQuote from "../DailyQuote/DailyQuote";
import News from "../News/News";
import classes from "./Main.module.css";


const Main = React.memo((props: any) => {

    return(
        <main className={classes.main}>
            <Navbar/>

            <Routes>
                <Route path={'/kid-social-network'} element={<Navigate to={'/profile'}/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/profile/:id'} element={<Profile/>}/>
                <Route path={'/news'} element={<News/>}/>
                <Route path={'/users'} element={<Users/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/daily-quote'} element={<DailyQuote/>}/>
            </Routes>
        </main>
    )
})

export default Main