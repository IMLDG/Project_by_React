//useState를 통해 name,password action에 넘겨주기
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SignUpAction } from '../../../redux/index';

const Signup = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <input type="text" value = {name} onChange = {(e) => setName(e.target.value)}></input><br></br>
            <input type="text" value = {password} onChange = {(e) => setPassword(e.target.value)}></input><br></br>
            <button onClick = {() => props.SignUp(name, password)} type = "submit">회원가입</button>

            <h1>{props.name}</h1>
            <h1>{props.password}</h1>
        </div>

    )
}
// class Signup extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name : props.name,
//             password : props.password,
//         }
//         this.handleChange.bind(this);
//     }
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name] : e.target.value,
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <input name="name" onChange = {this.handleChange}></input><br></br>
//                 <input name="password" onChange = {this.handleChange}></input><br></br>
//                 <button onClick = {() => this.props.SignUp()} type = "submit">회원가입</button>

//                 <h1>{this.props.name}</h1>
//                 <h1>{this.props.password}</h1>
//             </div>
//         );
//     }
// }

//props 에서 name, password,SignUp 추출
// const Signup = ({name, password,SignUp}) => {
//     return (
//         <div>
//             아이디 : <input name="name"></input><br/>
//             비밀번호 : <input name="password"></input><br/>
//             <h2>{name}</h2>
//             <h2>{password}</h2>
//             <button onClick = {() => SignUp()}>회원가입</button>
//         </div>
//     )
// }

//State를 Props에 input
const mapStateToProps = (state) => {
    return {
        name : state.SignUps.name,
        password : state.SignUps.password,
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        SignUp : (name,password) => dispatch(SignUpAction(name, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Signup);