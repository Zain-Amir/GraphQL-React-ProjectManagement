import { gql, useQuery} from '@apollo/client'
import {ClientRow} from './ClientRow'
import { Spinner } from './Spinner'
import { GET_CLIENTS } from '../queries/clientQ' 

export default function  Clients(){
    const  {loading , error, data} = useQuery(GET_CLIENTS)
    if (loading ) return <Spinner/>
    if (error ) return <p>Something went wrong ... </p>

    return <div className='container-fluid'>
        {!loading && !error && (
            <table className='table table-hover mt-3 ' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            </tr>
                    </thead>
                    <tbody>
                        {data.clients.map(client=>(
                            // <tr key={client.id}></tr>
                            <ClientRow key = {client.id} client = {client}/>
                        ))}
                    </tbody>
            </table>
        ) }
    </div>
}

