import {useState,useEffect} from 'react';

function LoginPage(props){

    const [user, setUsername] = useState('');
    const [password, setPassword] = useState('');


    let handleUserNameChanged = (e) =>{
        setUsername(e.target.value);
    }
    let handlePasswordChanged = (e) =>{
        setPassword(e.target.value);
    }
    
    let handleLogin = function(){
        fetch('https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest/login',{
            method:'POST',
            headers: new Headers({
                'Authorization': 'Basic '+btoa(`${user}:${password}`)})
        }).then(response => response.json())
        .then(data=>{
            if(data.token)
            props.setJWTToken(data.token);
        });
     };

    let view = <div>
        <input type="text" placeholder="Username" onChange={handleUserNameChanged} />
        <input type="text" placeholder="Password" onChange={handlePasswordChanged}/>
        <button onClick={handleLogin}>Login</button>
    </div>


    return(<>{view}</>);
}

export default LoginPage;