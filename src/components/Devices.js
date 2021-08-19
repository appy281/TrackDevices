import {useState,useEffect} from 'react';

function Devices(props){
    const [devices, setDevices] = useState([]);
    const tile ={
        border: "solid black 1px",
        padding: "4px",
        display:"inline-block",
        margin:"5px"

    }

    useEffect(() => {
       const getProducts = ()=>{
           fetch('https://dl5opah3vc.execute-api.ap-south-1.amazonaws.com/latest/devices',{
            method:'GET',
            headers: new Headers({
               'Authorization': `Bearer ${props.token}` })
            }
           ).then(response=> response.json())
           .then(data=> setDevices(data.result));
        }
        getProducts();
    
    },[]);
    let dev = devices ? devices.map(device=>{
        return <div key={device.device} style={tile}>{device.device}</div>;
    }) :null; 
    return(
      <>{dev}</>
    );
 }
 export default Devices;