import React from 'react'
import Modal from 'react-modal';
import {useDispatch} from 'react-redux';
import {useState} from "react";
import {editTask} from "../Redux/Action/action"
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  Modal.setAppElement('#root')

  const Edit = ({description}) => {
const[editedText,setEditedText]=useState({
    description:{description},
     id:
});
const dispatch= useDispatch();

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
  
  
    function closeModal(){
      setIsOpen(false);
    }
    const handleEdit =(e)=>{
        setEditedText(e.target.value);
        
    }
    const handleSave =()=>{
      dispatch(editTask(editedText));
    }
    return (
        <div>
        <button onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >


          <button onClick={closeModal}>close</button>
          <div>Edit</div>
          <form>
            <input type="text" onChange={handleEdit} defaultValue={description} />
            <button onClick={handleSave}>Save changes</button>
          </form>
        </Modal>
      </div>
    )
}

export default Edit
