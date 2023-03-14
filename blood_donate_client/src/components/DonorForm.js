import React from 'react'



function DonorForm(props) {
  return (
    <div>
        
        <form className="donorform">
            {!props.donorsubmission && <h1>Become a Blood Donor</h1>}
            {props.donorsubmission && <h1>You Became a Blood Donor</h1>}
            {/* <label>name</label> */}
            <input type="text" placeholder="enter your name" onChange={(e)=>{props.setName(e.target.value)}}></input>
            {/* <label>age</label> */}
            <input type="number" placeholder="enter your age" onChange={(e)=>{props.setAge(e.target.value)}}></input>
            {/* <label>contact no</label> */}
            <input type="number" placeholder="enter contact no" onChange={(e)=>{props.setPhoneNo(e.target.value)}}/>
            {/* <label>blood group</label> */}
            <select name="" id="" onChange={(e)=>{props.setBloodGroup(e.target.value)}}>
                <option selected disabled>select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
            </select>
            {/* <label>select state</label> */}
            <select onChange={(e)=>{props.setstate(e.target.value)}}>
                    <option disabled selected>select state</option>
                    {props.data.map(i=>{
                        return(
                        <option >{i.state}</option>
                        )
                    })}
            </select>
            {/* <label>select district</label> */}
            <select onChange={(e)=>{props.setdistricts(e.target.value)}}>
                    <option selected disabled>select district</option>
                    {props.data.map(i=>{
                    if(i.state==props.state)
                    return(
                        i.districts.map(j=>{
                            return(<option>{j}</option>)
                        }
                    ))
                    })}
            </select>
            <button onClick={props.addDonor}>submit</button>
        </form>
    </div>
  )
}

export default DonorForm;