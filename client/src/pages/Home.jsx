import React from 'react'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddClientModal from '../components/AddClientModal'
import AddProjectModal from '../components/AddProjectModal'
const Home = () => {
  return (
    <div className='container  '>
        <div className="justify-items-center align-items-center p-3 border  text-center">
          <h3 className="text-dark">Project Management</h3>
            <AddClientModal />
        <AddProjectModal/>
        </div>

        <Projects />
        <Clients />
    </div>
  )
}

export default Home