import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            phone : "",
        }
        this.handleChange.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        });
    }
    render() {
        return (
            <div>
                <input name="name" onChange = {this.handleChange}></input><br></br>
                <input name="phone" onChange = {this.handleChange}></input><br></br>
                <button type="submit">로그인</button>
                <h1>name : {this.state.name}</h1>
                <h1>phone : {this.state.phone}</h1>
            </div>
        );
    }
}

export default Login;