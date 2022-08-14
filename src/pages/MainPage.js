import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd'
import '../assets/css/mainPage.css'

const MainPage = () =>{

  const navigate = useNavigate();


  const redirect = route => {

    switch (route) {
      case 'places':
        navigate("/places");
        break;
        case 'addPhoto':
        navigate("/add-photo");
        break;
      default: console.log("NO ROUTE");
    } 
  }
  return (
    <div className="firstPage" > 
       <div className="buttons" >
        <Button style={{ fontSize: "18px", marginRight: "25px"}} type="default" size={'large'}  onClick={() => redirect("places")} >Vietovės</Button>
        <Button style={{ fontSize: "18px", marginLeft: "25px"}} type="default" size={'large'}  onClick={() => redirect("photos")} >Nuotraukos</Button>  
       </div>
      <p>Mano pirmasis puslapis</p>        
    </div>
  )
}

export default MainPage;