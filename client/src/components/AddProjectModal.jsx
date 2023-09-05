import React, { useState } from "react";
import { ADD_PROJECT } from "../mutations/projectM";
import { GET_PROJECTS } from "../queries/projectQ";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQ";
import { useQuery } from "@apollo/client";
import { FaBriefcase } from "react-icons/fa";
const AddProjectModal = () => {
  // states
  const [name,setName] = useState('');
  const [status,setStatus] = useState('new');
  const [description,setDescription] = useState('');
  const [clientId,setClientId] = useState('');
 
// //  // query
 const [addProject] = useMutation(ADD_PROJECT, {
  variables: { name, status, description, clientId },
  refetchQueries :[{query : GET_PROJECTS}],
});
 
 // get clients

const {loading,error,data} = useQuery(GET_CLIENTS);

  // on subit func
 const onSubmit = (e) => {
  e.preventDefault();
// alert('working')
  if (name === '' || status === '' || description === '') {
    return alert('Please fill in all fields');
  }

  addProject(name, status,description, clientId);
  setName('');
  setStatus('new');
  setDescription('');
  setClientId('')
};
   return (
  
  <>
      {!loading && !error && (
        <> 
            <button type="button" className="m-3 btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#addProjectModal">
  <div className="d-flex align-items-center justify-items-center">
    <FaBriefcase />
    <div className="m-1">Add Project</div>
  </div>
</button>
<div className="modal fade" id="addProjectModal" aria-labelledby="addProjectModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addProjectModalLabel">Add Project</h1>
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
            
            <div className='mb-3'>
                      <label className='form-label'>Client</label>
                      <select
                        id='clientId'
                        className='form-select'
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value=''>Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>


                    

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" id = 'description'
              value={description} onChange={(e)=>setDescription(e.target.value)} >
              </textarea>
            </div>
            <button type="submit" className="btn btn-dark" data-bs-dismiss ="modal"> Add Project</button>                           
        </form>
      </div>
    </div>
  </div>
</div>
        
      </>
      )}
   </>
  );
};

export default AddProjectModal;
