import React, {useEffect} from "react";
import classes from "./Header.module.css";
import headerLogo from './headerImages/header-logo.png'
import Button from "../Buttons/Button";
import {AuthStateType, logOut, setMyAuthData} from "../../BLL/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../BLL/store";
const Header = React.memo(() => {

    let authData = useSelector<RootReducerType, AuthStateType>(state => state.authPage)
    let dispatch = useDispatch()

    useEffect( () => {
        dispatch(setMyAuthData())
    } ,[] )

    const onLogout = () => {
        dispatch(logOut())
    }
    return(
        <header>
            <div className={classes.inner}>
                <div className={classes.logoInner}>
                    <a href="#" className={classes.logo}>
                        <img src={headerLogo} alt="header-logo"/>
                    </a>
                    <p>Lumos</p>
                </div>
                {/*<div className={classes.bigMenuSwitcher}>*/}
                {/*    switcher*/}
                {/*</div>*/}
                {/*<ul className={classes.menu}>*/}
                {/*    <li>*/}
                {/*        <a href="#">Home</a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="#">Features</a>*/}
                {/*    </li>*/}
                {/*    <li>*/}
                {/*        <a href="#">More</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                {/*<div className={classes.search}>*/}
                {/*    <input type="search"/>*/}
                {/*</div>*/}
                {authData.isAuth
                    ?
                    <div className={classes.loginButtons}>
                        <p className={classes.userName}>Welcome {authData.data.login}</p>
                        <Button className={'commonBtn'} onClick={onLogout} text={'Log out'}/>
                    </div>
                    :
                    <Button className={'commonBtn'} onClick={()=>{} } text={'Login'}/>
                }
            </div>
        </header>
    )
})

export default Header