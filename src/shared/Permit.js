import React from 'react'
import { useSelector } from 'react-redux'


const Permit = (props) => {
    const yes_session = sessionStorage.getItem('token');
    const user_info = useSelector((state) => state.user.user)

    if(yes_session && user_info){
        return <React.Fragment>{props.children}</React.Fragment>
    }

    return null;
}

export default Permit;
