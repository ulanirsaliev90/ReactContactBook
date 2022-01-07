
import React, {useState} from 'react';
import './App.css'
import AddContact from './Components/AddContact/AddContact';
import ContactCard from './Components/ContactCard/ContactCard';
import ContactList from './Components/ContactList/ContactList';

function App() {
  let[contacts, setContacts] = useState([]);
  let[editContact, setEditContact] = useState({})
  let[isEdit, setIsEdit] = useState(false);

function handleNewContact(newContact){
  let newContactArray = [...contacts];
  newContactArray.push(newContact);

  setContacts(newContactArray)

}

function handleDeleteContact(id){
  let newContactsArray = contacts.filter(item => {
    return item.id !== id
  })
  setContacts(newContactsArray)
}

function handleEditIndex(index){
  setIsEdit(true)
  setEditContact(contacts[index])
}

function handleSaveEditedContact(newContact){
  let newContactArray = contacts.map(item => {
    if(item.id === newContact.id){
    return newContact
    }
    return item
  })
  setContacts(newContactArray)
  setIsEdit(false)
}


  return (
    <div className="App">
     <AddContact 
     handleNewContact={handleNewContact}
     />
      {isEdit ? <ContactCard
      editContact={editContact}
      handleSaveEditedContact={handleSaveEditedContact}
      /> : null }
      <ContactList 
      contacts={contacts}
      handleDeleteContact={handleDeleteContact}
       handleEditIndex={handleEditIndex}
      />
    </div>
  );
}

export default App;
