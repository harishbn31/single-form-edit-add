import {React, useState,useEffect} from 'react';
function AddQuote(props) {
    const {isEdit,id, username,updateData, addQuote} = props
    const [firstName, setUsername] = useState(username || '')

    useEffect(() => {
        if(props.username){
            setUsername(props.username)
        }
    }, [props.username])
    
    const handleChange = (e)=>{
        e.preventDefault()
        setUsername(e.target.value)
    }
    const update = (e) =>{
        e.preventDefault()
        updateData({id: id, username: firstName})
        setUsername('')
    }
    const submitData = (e)=>{
        e.preventDefault()
        addQuote({id: Date.now(),username: firstName})
        setUsername('')
    }
  return (
    <div >
      <form onSubmit={isEdit ? update : submitData}>
          <label>
              Username
          </label>
          <input type="text"  value={firstName} onChange={handleChange} />
         <button> {isEdit ? "update" : "Add Quote"} </button>
      </form>
    </div>
  );
}

export default AddQuote;