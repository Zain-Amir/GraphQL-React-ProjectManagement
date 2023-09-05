import {FaTrash} from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutations/clientM'
import { GET_CLIENTS } from '../queries/clientQ'
import { GET_PROJECTS } from '../queries/projectQ'
export const ClientRow = ({client}) => {
    
  const [deleteClient] = useMutation(DELETE_CLIENT,{
      variables : { id : client.id},
      refetchQueries :[{query : GET_CLIENTS},
        {query : GET_PROJECTS}],
    })
  
  return (
    <tr> 
        <td>{client.name}</td>
        <td>{client.email}</td>
        <td>{client.phone}</td>
        <td>
            <button className="btn btn-secondary btn-sm" onClick={deleteClient}>
                <FaTrash/>
            </button>
        </td>
    </tr>
  )
}
