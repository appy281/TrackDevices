import Devices from "./Devices"

 

 function Home(props){
     const left ={
         width:"50%",
         float:"left",
     }
     const right ={
        width:"50%",
        float:"right"
     }

    let oRightSection= <div style={right}>
        <Devices token ={props.token}/>
    </div>;
    let  oLeftSection = null;
    


  return(
      <>
      {oLeftSection}
      {oRightSection}
      </>
  );
 }
 export default Home;