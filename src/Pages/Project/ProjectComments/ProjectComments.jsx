import React, {useState} from 'react'
import { timestamp } from '../../../firebase/config';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useFirestore } from '../../../hooks/useFirestore';

const ProjectComments = ({project}) => {
  const {updateDocument, response} = useFirestore('projects')
  const [newComment, setNewComment] = useState('')
  const {user} = useAuthContext();


  const handleSubmit = async (e)=>{
    e.preventDefault();
    
    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: newComment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random() * Math.random() * 10000
    }

    await updateDocument(project.id, {
      comments: [...project.comments, commentToAdd]
    })

    if (!response.error){
      setNewComment('');
    }
  }

  return (
    <>
    <div className="box" style={{padding: '20px 10px 10px 20px', marginTop: '0'}}>
  <div className="headerr">
    <div className='signheader'>
    <i className="comments icon"></i>
  <p >Add Comment</p>
  </div>
  </div>
  
  <form className="form" onSubmit={handleSubmit} style={{paddingTop: '60px'}}>
    <label>Comments: </label>
    <div style={{height: '7rem', overflowY: 'scroll'}}>
    <div className="ui comments" bis_skin_checked="1">
      {project.comments.length >0 && project.comments.map(comment=>{
        return <div className="comment" bis_skin_checked="1" key={comment.id}>
        <a className="avatar">
          <img src={comment.photoURL}/>
        </a>
        <div className="content" bis_skin_checked="1">
          <a className="author">{comment.displayName}</a>
          <div className="metadata" bis_skin_checked="1">
            <div className="rating" bis_skin_checked="1">
            </div>
          </div>
          <div className="text" bis_skin_checked="1">
            {comment.content}
          </div>
        </div>
      </div>
      })}
    </div>
    </div>
    <label htmlFor='comment'>Enter Comment
  <textarea name='comment' className='signupinput field' style={{marginBottom: '5px'}} type="text" placeholder="Start Typing..." onChange={e=>setNewComment(e.target.value)} value={newComment}/>
  </label>
   <button type="submit" style={{marginBottom: '5px'}} className="buttonn signupinput"> Add Comment </button>
 
  

  </form>
</div>

</>
  )
}

export default ProjectComments