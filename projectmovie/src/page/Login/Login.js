import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

export default function Login(props) {

  console.log(props)
  let [user,setUserAccount] = useState({
    username:'',
    password:'',
    isSaveForm:true
  });
  console.log(user)
  const hanleInput = (event) => {
      let {value,name} = event.target;

      setUserAccount({
        ...user,
        [name]:value
      })
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if(user.username ==="cyber"){
          //đăng nhap thành công
          // Home1 -> Login push Home2
          // => back tro lai Login
          // props.history.push("/home");


          //Home1 -> Login replace Home2
          //=> back tro lai Home1
          props.history.replace("/home");
      }else{

        alert("Tài khoản không đúng")
      }
  }

  return (
    <div className='container'>
      <form onSubmit={(event) => { 
        handleSubmit(event)
       }} >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">UserName</label>
          <input onChange={(event) => { 
              hanleInput(event);
           }} name="username" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input onChange={(event) => { 
              hanleInput(event);
           }} name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        
        <button onClick={() => { 
            props.history.goBack();
         }} type="button" className="btn btn-primary">Go Back</button>
     
         <Prompt when={user.isSaveForm} message={(location) => { 
            console.log(location);
            return "Bạn có chắc muốn rời khỏi không ?"
          }} />

      </form>

    </div>
  )
}
