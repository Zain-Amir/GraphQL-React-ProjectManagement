import React from 'react'

export const ProjectCard = ({project}) => {
  return (
    <div className='col-md-6'>
    <div className="card mb-3 bg-light">
        <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title">
                    {project.name}
                </h5>
                <a href= {`projects/${project.id}`} className="btn btn-outline-dark"> VIEW</a>
            </div>
            <div className="card-body">
                <p>
                    <strong>{project.status}</strong>
                </p>
            </div>
        </div>
    </div>
</div>
  )
}
