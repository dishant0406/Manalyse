import React from 'react'
import Avatar from '../../../Components/Avatar/Avatar'
import './ProjectSummery.css'
import { useFirestore } from '../../../hooks/useFirestore'
import { useAuthContext } from '../../../hooks/useAuthContext'

const ProjectSummery = ({project}) => {
  const dateOptions = {
    month:"long", day:"numeric", year: 'numeric'
 }
 const {deleteDocument} = useFirestore('projects');
 const {user} = useAuthContext();

 const handleDeleteClick = (e)=>{
   e.preventDefault();
   deleteDocument(project.id);
 }

  return (
    <div className='projectdetailcard'>
      <div className="courses-container">
	<div className="course">
		<div className="course-preview">
			<h6>{`Project Type: ${project.category.label}`}</h6>
        <h2>{project.name.toUpperCase()}</h2>
        {project.createdBy.id === user.uid && <button class="btn" onClick={handleDeleteClick}>Delete Project</button>}
        <div className='projectCreatedBy'>
			    <a href="#">{`Project By:\n ${project.createdBy.displayName}`}</a>
          <Avatar src={project.createdBy.photoURL} style={{margin: '0'}}/>
        </div>
		</div>
		<div className="course-info">
			<h6>{`Project Due Date: ${new Date(project.dueDate.toDate().toDateString()).toLocaleDateString('en-us', dateOptions)}`}</h6>
			<h2>{project.details}</h2>
      <a href="#" className='ausers'>Assigned To:</a>
      <ul className='avatarlist'>
                  {project.assignedUsersList.map(el=>{
                    return <li key={el.photoURL}><Avatar src={el.photoURL}/></li>
                  })}
                </ul>
		</div>
	</div>
</div>
    </div>
  )
}

export default ProjectSummery