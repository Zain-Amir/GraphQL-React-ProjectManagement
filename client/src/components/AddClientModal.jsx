import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { ADD_CLIENT } from "../mutations/clientM";
import { GET_CLIENTS } from "../queries/clientQ";
import { useMutation } from "@apollo/client";

const AddClientModal = () => {

  

  // states
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
 
 // query
 const [addClient] = useMutation(ADD_CLIENT, {
  variables: { name, email, phone },
  refetchQueries :[{query : GET_CLIENTS}],
});
 
 
  // on subit func
 const onSubmit = (e) => {
  e.preventDefault();

  if (name === '' || email === '' || phone === '') {
    return alert('Please fill in all fields');
  }

  addClient(name, email, phone);

  setName('');
  setEmail('');
  setPhone('');
};
  

  return (
  
  <>
      
<button type="button" className="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target="#addCLientModal">
  <div className="d-flex align-items-center justify-items-center">
    <FaUser />
    <div className="m-1">Add Client</div>
  </div>
</button>
<div className="modal fade" id="addCLientModal" aria-labelledby="addCLientModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="addCLientModalLabel">Add Client</h1>
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
              <label className="form-label">Email</label>
              <input type="text" className="form-control" id = 'email'
              value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control" id = 'phone'
              value={phone} onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-dark" data-bs-dismiss ="modal"> Add Client</button>                           
        </form>
      </div>
    </div>
  </div>
</div>
   </>
  );
};

export default AddClientModal;
