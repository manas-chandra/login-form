import React, {useState} from 'react';
import avatar  from './avatar.svg'
import bg  from './personalization.svg'
import wave  from './wave.png'
import './App.css';


function App() {

  const handleSubmit = e => {
    e.preventDefault()
  }

  const [values, setValues] = useState({userName: '', password: ''})

  const handleTextChange = e => {
    console.log(e.target.id)
    console.log('TCL: : handleTextChange -> values', values)
    setValues({...values, [e.target.id]: e.target.value})
  }

  return (
    <React.Fragment>
      <img className="wave" src={wave} alt="" />
      <div className="container">
        <div className="img">
          <img src={bg} alt=""/>
        </div>
        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img className="avatar" src={avatar} alt="" />
            <h2 className="title">Welcome</h2>
                  <div id="username-container" className={`input-div one `}>
                    <div className="i">
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="div">
                        <h5>Username</h5>
                        <input onFocus={() => {
                          document.getElementById('username-container').classList.remove('blur')
                          document.getElementById('username-container').classList.add('focus')
                        }}
                        onBlur={() => {
                          if (values.userName.length === 0) {
                            document.getElementById('username-container').classList.remove('focus')
                            document.getElementById('username-container').classList.add('blur')
                          }
                        }}
                        onChange={handleTextChange} id="userName" type="text" className="input" />
                    </div>
                  </div>
                  <div id="password-container" className={`input-div pass `}>
                    <div className="i">
                        <i className="fas fa-lock"></i>
                    </div>
                    <div className="div">
                      <h5>Password</h5>
                      <input onFocus={() => {
                          document.getElementById('password-container').classList.remove('blur')
                          document.getElementById('password-container').classList.add('focus')
                        }}
                        onBlur={() => {
                          if (values.password.length === 0) {
                            document.getElementById('password-container').classList.remove('focus')
                            document.getElementById('password-container').classList.add('blur')
                          }
                        }}
                        onChange={handleTextChange} id="password" type="password" className="input focus" />
                    </div>
                  </div>
                  <a href="#">Forgot Password?</a>
                  <input type="submit" className="btn" value="Login" />
            </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
