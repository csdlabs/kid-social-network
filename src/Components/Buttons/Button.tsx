import React from "react";


type ButtonPropsType = {
    className: string
    onClick: () => void
    text: string

}


const Button = React.memo(({className, onClick, text}: ButtonPropsType) => {

    const onClickHandler = () => {
        onClick();
    }

    return(
        <button onClick={onClickHandler} className={className}>
            {text}
        </button>
    )
})

export default Button