import React from "react";
import {useSelector} from 'react-redux'
const Count = () => {
    const countone =  useSelector((state)=> state);
    console.log(countone)
    return(
        <>
            {countone}
        </>
    )
}

export default Count