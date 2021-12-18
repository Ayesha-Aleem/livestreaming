import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
// import "font-awesome/css/font-awesome.css";
const Signup = () => {
  const YourCurrency=[
    {
        value:"USD",
        label:"$",
    },
    {
       value: 'EUR',
       label: '€',
    },
    {
       value: 'JPY',
       label: '¥',
    },
  ]; 
   const state={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    gender:'',
    currency:'',
  }
  const handleChange=(event)=>{
    const target=event.target
    const firstname=target.firstname
    const lastname=target.lastname
    const email=target.email
    const password=target.password
    const gender=target.gender
    const currency=target.currency

    const value=target.value
    console.log(value);
    this.setState({
      //dynamically passed whenever value comes it update title
      [firstname]:value,
      [lastname]:value,
      [email]:value,
      [password]:value,
      [gender]:value,
      [currency]:value

    })
  }
    const submit=(event)=>{
      event.preventDefault();
      const payload={
        firstname:this.state.firstname, //the data 
        lastname:this.state.lastname,
        email:this.state.email,
        password:this.state.password,
        gender:this.state.gender,
        currency:this.state.currency
      }
      axios({
       url:'http://localhost:7800/save', //when the server is waiting for req
       method:'POST',  //post req bcz we are sending data
       data:payload  //what data you want to send
      })
      .then(()=>{
        alert("Dta has send to the server")
      })
      .catch(()=>{
       console.log("Internal server error server")
      })
    }
    return (
     <>
        <div id="container">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="first">First Name</label>
              <input onChange={handleChange} type="text" value={this.state.firstname} name="firstname" className="form-control" id="first" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            
            <div className="form-group">
              <label htmlFor="Last">Last Name</label>
              <input onChange={handleChange} type="text" value={this.state.lastname} name="lastname" className="form-control" id="last" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
           
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onChange={handleChange} type="email" value={this.state.email} name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input onChange={handleChange} type="password" value={this.state.password} name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
           
            <div className="form-group">
              <label htmlFor="gender" name="gender" className="col-sm-2 control-label">Gender:</label>
              
                <select onChange={handleChange} className="form-control inputstl" name="gender" value={state.gender} id="gender">
                  <option>Male</option>
                  <option>Female</option>
                </select>          
              
            </div>    
            <div className='form-group' name="currency">
              <label htmlFor='currency'>Choose Your currency
              <select onChange={this.handleChange} value={this.state.currency}>
              {YourCurrency.map(item => {
                return (<option key={item.value} value={item.value}>{item.text}{item.label}</option>);
              })}
              </select> 
              </label>
            </div>       
          
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        </div>
         
     </>
      
      );
}

 
export default Signup;