import {React, useState} from 'react';
import AddQuote from './AddQuote';
function Contanier() {
const [list, setData] = useState([])
const [isEdit, setEdit] = useState(false)
const [selected, setSelected] = useState({})

const addQuote = (data)=>{
  setData([...list,{...data} ])
}
const setToggel = (id)=>{
  setEdit(true)
  const res = list.find(ele => ele.id === id)
  if(res){
    setSelected({...res})
  }
}
const updateData=(data) =>{
  const res = list.map(ele=>{
    if(ele.id === data.id){
      return {...data}
    }else{
      return {...ele}
    }
  })
  setData([...res])
  setSelected({})
  setEdit(false)
}

  return (
    <div >
        <h2>List</h2>
        <ul>
        {list.map((ele)=>{
          return <li key={ele.id}>{ele.username} <button onClick={(e) => {
            e.preventDefault()
            setToggel(ele.id)

          }}>Edit</button> </li>
        })}
        </ul>
        <h3> {isEdit ? "Update" : "Add Quote"}</h3>
      {isEdit ? <AddQuote {...selected} isEdit={isEdit} updateData={updateData}/> : <AddQuote  addQuote={addQuote}/> }
    </div>
  );
}

export default Contanier;