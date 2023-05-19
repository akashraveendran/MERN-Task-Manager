import { Box, Button, Card } from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import axios from "axios";



function EditTask() {
    const location = useLocation()
    const [taskName, setTaskName] = useState(location.state.taskName);
    const [description, setDescription] = useState(location.state.description);
    const [dueDate, setDueDate] = useState(location.state.dueDate);
    const [difficulty, setDifficulty] = useState(location.state.difficulty);
    const navigate = useNavigate()
    const submitted = async () => {
        const updatedTask = {
            taskName,
            description,
            dueDate,
            difficulty
        }
        console.log(updatedTask)
        await axios.patch("http://localhost:5000/api/tasks/" + location.state.taskID, updatedTask)
        navigate("/all-tasks")
    }

    return (
        <div>
            <SideBar />
            <div className='tasks-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: '25vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}>Update Task</h2>
                <Card sx={{ margin: '100px', padding: '30px 0', minHeight: '40vh' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                        <input required type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder='Enter Task title' style={{ width: "60%", marginBottom: 20, padding: 7, background: '#E0EAFC', border: 'none' }} />

                        <textarea required name="" value={description} onChange={(e) => setDescription(e.target.value)} id="" cols="21" rows="5" style={{ width: "60%", marginBottom: 20, padding: 5, background: '#E0EAFC', border: 'none', fontFamily: 'Epilogue, sans-serif' }} placeholder='Enter task description'></textarea>
                        <Box style={{ display: 'flex', width: "60%", margin: 10 }}>
                            <label style={{ alignSelf: 'center' }} htmlFor="">Due Date</label>
                            <input required type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} placeholder='Due date' style={{ width: "67%", marginLeft: 'auto', padding: 5, background: '#E0EAFC', border: 'none' }} />
                        </Box>
                        <Box style={{ display: 'flex', width: "60%", margin: 10 }}>
                            <label style={{ alignSelf: 'center' }} htmlFor="">Difficulty :</label>
                            <select onClick={(e) => setDifficulty(e.target.value)} required id="" style={{ width: "70%", padding: 5, marginLeft: 'auto', background: '#E0EAFC', border: 'none' }}>
                                <option >Select difficulty</option>
                                <option selected={difficulty == "Easy"} value="Easy">Easy</option>
                                <option selected={difficulty == "Normal"} value="Normal">Normal</option>
                                <option selected={difficulty == "Hard"} value="Hard">Hard</option>
                            </select>
                        </Box>
                        <Button variant="contained" onClick={submitted}>Update Task</Button>
                    </form>
                </Card>
            </div>
        </div >
    )
}

export default EditTask