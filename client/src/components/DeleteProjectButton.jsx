import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { FaTrash } from 'react-icons/fa'
import { DELETE_PROJECT } from '../mutations/projectM'
import { GET_PROJECTS } from '../queries/projectQ'
import { Navigate } from 'react-router-dom'

const DeleteProjectButton = ({projectId}) => {
    const navigate = useNavigate();
    // const deleteProject = useQuery(DELETE_PROJECT)
    // const deleteProject = (projectId) => alert(projectId)
    const [deleteProject] = useMutation(DELETE_PROJECT,{
        variables : { id : projectId},
        onCompleted :()=> navigate('/'),
        refetchQueries :[{query : GET_PROJECTS}],
      })
  return (

    <button className="btn btn-outline-danger btn-sm" onClick={deleteProject}>
                <FaTrash/>
   </button>
  )
}

export default DeleteProjectButton