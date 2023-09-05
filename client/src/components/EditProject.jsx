import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { UPDATE_PROJECT } from "../mutations/projectM";
import { GET_PROJECTS } from "../queries/projectQ";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQ";
import { useQuery } from "@apollo/client";
import { Spinner } from "./Spinner";


const EditProject = ({project}) => {
  // states
  const [name,setName] = useState(project.name);
  const [status,setStatus] = useState(project.status);
  const [description, setDescription] = useState(project.description);
 
// // //  // query
 const [updateProject] = useMutation(UPDATE_PROJECT, {
  variables: {id:project.id , name, status, description },
  refetchQueries :[{query : GET_PROJECTS}],
});
 
 // get clients

 const onSubmit = (e) => {
  e.preventDefault();
    // alert('working')
  if (name === '' || status === '' || description === '') {
    return alert('Please fill in all fields');
  }

  updateProject(name, status,description);
  setName('');
  setStatus('new');
  setDescription('');
//   setClientId('')
};
   return (
  
  <>
      <button type="button" className="btn btn-dark mt-3 mb-3 text-center" data-bs-toggle="modal" data-bs-target="#EditProject">
  <div className="items-center justify-items-center ">
    <div>Edit </div>
  </div>
</button>
<div className="modal fade" id="EditProject" aria-labelledby="EditProjectLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="EditProjectLabel">Edit Project</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" id = 'name'
              value={name} onChange={(e)=>setName(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <select id="status" value={status} onChange={(e)=>setStatus(e.target.value)} className="form-select">
                    <option value="new">Not Started</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
              </select>
            </div>
           
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" id = 'description'
              value={description} onChange={(e)=>setDescription(e.target.value)} >
              </textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark text-center" data-bs-dismiss ="modal"> Edit Project</button>                           
        </form>
      </div>
    </div>
  </div>
</div>
        

  </>
  );
};

export default EditProject;
