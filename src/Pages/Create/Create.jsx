import React, { useEffect, useState } from 'react'
import './Create.scss';
import Select from 'react-select';
import { useCollection } from '../../hooks/useCollection';

const categories = [
  {value: 'development', label: 'Development'},
  {value: 'design', label: 'Design'},
  {value: 'sales', label: 'Sales'},
  {value: 'marketing', label: 'Marketing'},
]


const Create = () => {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignedUsers, setAssignedUsers] = useState([]);
  const {documents} = useCollection('users');
  const [users, setUsers] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(name, details, dueDate, category, assignedUsers);
  }

  useEffect(() => {
    
    if(documents){
      const options = documents.map(el=>{
        return {value: el, label: el.displayName}
      })
      setUsers(options);
    }
    
  }, [documents])
  


  return (
    <div className="cardd">
		<div className="cardd-image">	
			<h2 className="cardd-heading">
				Create a Project
			</h2>
		</div>
		<form className="cardd-form" onSubmit={handleSubmit}>
			<div className="inpput">
				<input type="text" required className="inputt-field"  onChange={e=>setName(e.target.value)} value={name}/>
				<label className="inputt-label">Project name</label>
			</div>
						<div className="inpput">
				<textarea required type="text" className="inputt-field"  onChange={e=>setDetails(e.target.value)} value={details}/>
				<label className="inputt-label">Project Details</label>
			</div>
						<div className="inpput">
				<input required type="date" className="inputt-field"   onChange={e=>setDueDate(e.target.value)} value={dueDate}/>
			</div>
      <div className="inpput">
				<Select options={categories} onChange={e=>setCategory(e)}/>
				<label style={{color: '#A397A3'}}>Project Category</label>
			</div>
      <div className="inpput">
				<Select options={users} isMulti onChange={e=>setAssignedUsers(e)}/>
				<label style={{color: '#A397A3'}}>Assigned To</label>
			</div>
			<div className="actionn">
				<button type='submit' className="action-buttonn">Add Project</button>
			</div>
		</form>
	</div>
  )
}

export default Create