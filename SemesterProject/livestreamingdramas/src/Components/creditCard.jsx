// bootstrap
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import axios from "axios";
const CreditCard = () => {
    const[name,setName]=useState("")
    const [credit,setCreditCard]=useState("")
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const dataCredit={
            name,
            credit,
        }
       
        await axios({
          url: "/api/Credit",
          method: "POST",
          data: dataCredit,
        })
          .then(() => {
            alert("Data has been sent to Server");
          })
          .catch((error) => console.log(error));
      };
    return ( 
    <>
     <div class="padding">
    <div class="row">
        <div class="col-sm-6">
            <div class="card">
                <div class="card-header">
                    <strong>Credit Card</strong>
                    <small>enter your card details</small>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input 
                                class="form-control" 
                                id="name" 
                                value={name}
                                type="text" 
                                placeholder="Enter your name"
                                onChange={(e)=>{setName(e.target.value)}}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <label for="ccnumber">Credit Card Number</label>
                                <div class="input-group">
                                    <input 
                                    class="form-control" 
                                    type="text" 
                                    placeholder="0000 0000 0000 0000" 
                                    autocomplete="email"
                                    value={credit}
                                    onChange={(e)=>{setCreditCard(e.target.value)}}
                                    />
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="mdi mdi-credit-card"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button 
                    class="btn btn-sm btn-success float-right" 
                    type="submit"
                    style={{ cursor: "pointer" }}
                    onClick={handleSubmit}
                    >
                        <i class="mdi mdi-gamepad-circle"></i> Submit</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </> );
}

 
export default CreditCard;