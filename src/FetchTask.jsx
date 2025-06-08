import axios from 'axios';

const getAllTask = (setMyTask) => {
    axios.get('https://daily-planning-waeo.onrender.com')
    .then(({data}) => {console.log(data)
    setMyTask(data);
    })
}

const addTask = (name, setName, setMyTask) => {
    axios.post('https://daily-planning-waeo.onrender.com/saveDay', {name})
    .then((data) => {
        console.log(data);
        setName("");
        getAllTask(setMyTask)
    })
}

const editDay = (taskId, name, setName, setMyTask, setEditing) => {
 axios.post('https://daily-planning-waeo.onrender.com/editDay', {_id:taskId, name:name})
 .then((data) => {
    console.log(data)
    setName("")
    setEditing(false)
    getAllTask(setMyTask)
 })
}

const deleteDay = (_id, setMyTask) => {
    axios.post('http://localhost:4000/deleteDay', {_id})
    .then((data) => {
        console.log(data)
        getAllTask(setMyTask)
    })
}

export {getAllTask, addTask, editDay, deleteDay};