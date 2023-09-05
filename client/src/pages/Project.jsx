import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { GET_PROJECT } from '../queries/projectQ'
import ClientInfo from '../components/ClientInfo'
import DeleteProjectButton from '../components/DeleteProjectButton'
import EditProject from '../components/EditProject'

const Project = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });
  
    if (loading) return <Spinner />;
    if (error) return (alert(id));
  
    return (
    <>
    {!loading && !error && (
        <div className="mx-auto card w-50 p-5">
            <Link to="/" className='btn btn-light mb-3 btn-sm w-25 d-inline ms-auto'>Go Back</Link>
            <h3>{data.project.name}</h3>
            <div className="card-body">
                {data.project.description}
            </div>
            <h5 className="mt-3">Project Status</h5>
            <p className="lead">{data.project.status}</p>
            <ClientInfo client = {data.project.client}/>
            <EditProject project = {data.project}/>
            <DeleteProjectButton  projectId= {data.project.id}/>
        </div>



    )}
    </>
  )
}

export default Project