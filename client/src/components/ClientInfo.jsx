import React from 'react'
import { GET_CLIENT } from '../queries/clientQ'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { FaIdBadge, FaEnvelope, FaPhone } from 'react-icons/fa'

const ClientInfo = ({client}) => {

      return (
    <div className='mt-3 b-2'>
        <h4>Client Information</h4>
        <ul className="list-group">
            <li className="list-group-item"><FaIdBadge className='icon'/> {client.name}</li>
            <li className="list-group-item"><FaEnvelope className='icon'/> {client.email}</li>
            <li className="list-group-item"><FaPhone className='icon'/> {client.phone}</li>
        </ul>
    </div>

  )
}

export default ClientInfo