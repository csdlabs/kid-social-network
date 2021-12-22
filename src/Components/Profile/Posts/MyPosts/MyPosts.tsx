import React from "react";
import {incLikesAC, PostType} from "../../../../BLL/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "../../../../BLL/store";
import classes from "./MyPosts.module.css";
import crownIcon from  './images/crown.svg'


const MyPosts = () => {
    let posts = useSelector<RootReducerType, Array<PostType>>(state => state.profilePage.posts)
    let dispatch = useDispatch()
    const onClickHandler = (postId: string, likesCounter: number) => {
        dispatch(incLikesAC(postId, likesCounter))
    }

    let myPosts = posts.map( t => {
        return(
            <div key={t.id} id={t.id} className={classes.post}>
                <div className={classes.info_line}>
                    <div className={classes.avatar}></div>
                    <p className={classes.message}>{t.message}</p>
                </div>
                <div className={classes.likesInner}>
                    <button className={classes.likesBtn} onClick={()=>onClickHandler(t.id, t.likesCounter)}>
                        <img src={crownIcon} alt="crown" className={classes.crown}/>
                    </button>
                    <p className={classes.likesCount}>{t.likesCounter}</p>
                </div>

            </div>
        )
    } )
    return(
        <div>
            {myPosts}
        </div>

    )
}
export default React.memo(MyPosts)
// export default MyPosts