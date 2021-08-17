import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <Link to = "/">
                <button>Home</button>
            </Link>
            <Link to = "/Login">
                <button>로그인</button>
            </Link>
            <Link to = "/Sign Up">
                <button>회원가입</button>
            </Link>
        </>
    )
}

export default Nav;