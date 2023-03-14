import React from 'react'

function BloodForm(props) {
  return (
    <div className='bloodform'>
      <div className='look4bloodform'>
      <h1>Search for Blood</h1>
        <form >
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

                    <select onChange={(e)=>{props.setstate(e.target.value)}}>
                        <option disabled selected>select state</option>
                        {props.data.map(i=>{
                            return(
                            <option >{i.state}</option>
                            )
                        })}
                    </select>

                    <select onChange={(e)=>{props.setdistricts(e.target.value)}}>
                          <option selected disabled>select districts</option>
                          {props.data.map(i=>{
                          if(i.state==props.state)
                          return(
                              i.districts.map(j=>{
                                  return(<option>{j}</option>)
                              }
                          ))
                          })}
                    </select>
        <button onClick={props.getDonors}>submit</button>
      </form> 
      </div>
      
      {props.showlist && <div>
        {props.donorsList.length && <div className='donorslist'>
            <table>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>State</th>
                <th>District</th>
              </tr>
            {props.donorsList.map(i=>{
              return(
              <tr>
                <td>{i.name}</td>
                <td>{i.age}</td>
                <td>{i.phoneno}</td>
                <td>{i.state}</td>
                <td>{i.districts}</td>
              </tr>
              )
            })}
            </table>
        </div>}
        {
          !props.donorsList.length && <diV>
            <h1>No results found!!!</h1>
          </diV>
        }
      </div>}
    </div>
        
  )
}

export default BloodForm