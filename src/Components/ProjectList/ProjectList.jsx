import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import './ProjectList.scss';

const ProjectList = ({projects}) => {
  const dateOptions = {
     month:"short", day:"numeric"
  }

  return (
    <div>
      {projects.length ===0 && <div className="ui blue message" bis_skin_checked="1">
                                <div className="header" bis_skin_checked="1">
                                  No projects to Show!!
                                </div>
                                Try adding a project!!
                              </div>}
      <section className="page-contain">
      {projects.map(pro=>{
        return <Link to={`/projects/${pro.id}`} className="data-card" key={pro.id}>
              <h3 className='card-date'>{new Date(pro.dueDate.toDate().toDateString()).toLocaleDateString('en-us', dateOptions)}</h3>
                <h4 className='card-title'>{pro.name}</h4>
                <div className='card-desc'>{pro.details}
                <ul className='avatarlist'>
                  {pro.assignedUsersList.map(el=>{
                    return <li key={el.photoURL}><Avatar src={el.photoURL}/></li>
                  })}
                </ul>
                </div>
                
                <span className="link-text">
                  View More
                  <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD"/>
            </svg>
                </span>
              </Link>
         
        
      })}
       </section>
    </div>
  )
}

export default ProjectList