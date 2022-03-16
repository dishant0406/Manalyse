import React, {useEffect} from 'react'
import './Project.css'
import {useParams, useHistory} from 'react-router-dom';
import { useDocument } from '../../hooks/useDocument';
import toast from 'react-hot-toast';
import ProjectSummery from './ProjectSummery/ProjectSummery';
import ProjectComments from './ProjectComments/ProjectComments';

const Project = () => {
  const {id} = useParams();
  const history = useHistory();
  const {error, document} = useDocument('projects', id);

  useEffect(() => {
    error &&  toast.error(error, {style: {
      border: '1px solid #ff0000',
      padding: '16px',
      color: '#fff',
      backgroundColor: '#FF0000'
    }});

    error && history.push('/');
  }, [error]);


  if(!document){
    return <div className="ui active text loader" bis_skin_checked="1">Loading...</div>
  }

  return (
    <div>
      <div><ProjectSummery project={document}/></div>
      <div><ProjectComments project={document}/></div>
      <br/>
    </div>
  )
}

export default Project