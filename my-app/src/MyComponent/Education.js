import React, { useState } from 'react'

export default function Education() {
  let [array,setArray]=useState([])
  let [inputdata, setInputdata]=useState({school:"", degree:"", grade:"", poy:""})
  let [index, setIndex]=useState()
  let [bolin, setBolin]=useState(false)
  

  function data(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }

let{school,degree,grade,poy}=inputdata;
function addinputdata(){
   setArray([...array,{school,degree,grade,poy}])
   //console.log(inputdata)
   setInputdata({school:"", degree:"", grade:"", poy:""})
}
//console.log(array,"total array")


//delete row
function deletedate(i){
   console.log(i, "this row want to delete")
   let total=[...array]
   total.splice(i,1)
   setArray(total)
  }

// updating data
function updatedate(i){
  let {school, degree, grade, poy}=array[i]
  setInputdata({school, degree, grade, poy})
  setBolin(true)
}


  return (
    
      <><h4 className='text-left p-3'><i>Education</i></h4>
      
    <div className='container-fluid p-3'>

    <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">+NEW</button>
    

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-dark">
        <h5 class="modal-title text-white" id="exampleModalLabel">Add Education Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="school" class="col-form-label">School/University</label>
            <input type="text" name="school" value={inputdata.school || ""} class="form-control" id="school" onChange={data} />
            <label for="degree" class="col-form-label">Degree</label>
            <input type="text" name="degree"  value={inputdata.degree || ""} class="form-control" id="degree"  onChange={data}/>
            <label for="grade" class="col-form-label">Grade</label>
            <input type="text" name="grade"  value={inputdata.grade || ""} class="form-control" id="grade"  onChange={data} />
            <label for="poy" class="col-form-label">Passing Of Year</label>
            <input type="date" name="poy" value={inputdata.poy || ""} class="form-control" id="poy"  onChange={data} />
          </div>
        </form>
      </div>
      <div class="modal-footer shadow-lg bg-dark">
        <button type="reset" class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
        <button type="submit" onClick={addinputdata} class="btn btn-outline-light">{!bolin? 'Submit':'Update data' }</button>
      </div>
    </div>
  </div>
</div>        
</div>

<div className='container-fluid'>
<div class="table-responsive">
  <table class="table table-bordered">
  <thead className='text-center'>
    <tr>
      <th scope="col">School/University</th>
      <th scope="col">Degree</th>
      <th scope="col">Grade</th>
      <th scope="col">Passing Of Year</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
    {
      array && array.map( 
        (item,i)=>{
        return(
          <tr key={i}>
            <td>{item.school}</td>
            <td>{item.degree}</td>
            <td>{item.grade}</td>
            <td>{item.poy}</td>
            <td><button onClick={() => updatedate(i)} class="btn btn-outline-dark">Update</button></td>
            <td><button onClick={() => deletedate(i)} class="btn btn-outline-dark">Delete</button></td>
          </tr>
        )
       }
      )
    }
 
  </thead>
  </table>
</div>
</div>

    </>
    
      )
}
