import React from 'react'
import './App.css'
import Modal from 'react-modal'


const customStyles = {
  content: {
    height: '250px',
    width: '500px',
    background: '#ccc',

  },
};


const App = () => {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }


  return (
    <React.Fragment>
      <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
    </React.Fragment>
  )
}

export default App
