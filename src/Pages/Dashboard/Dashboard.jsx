import React, {useEffect} from 'react';
import './Dashboard.css';
import { useCollection } from '../../hooks/useCollection';
import toast from 'react-hot-toast';
import ProjectList from '../../Components/ProjectList/ProjectList';

const Dashboard = () => {
  const {documents, error} = useCollection('projects');

  useEffect(() => {
    error &&  toast.error(error, {style: {
      border: '1px solid #ff0000',
      padding: '16px',
      color: '#fff',
      backgroundColor: '#FF0000'
    }});
  }, [error]);

  return (
    <div>
      {error && <div></div>}
      {!documents && <div className="ui active text loader" bis_skin_checked="1">Loading...</div>}
      {documents && <ProjectList projects={documents}/>}
    </div>
  )
}

export default Dashboard