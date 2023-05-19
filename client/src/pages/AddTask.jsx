import { Box, Button, Card } from '@mui/material'
import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import { BASE_URL } from "../api/Api"



function AddTask() {

    const taskNameRef = useRef();
    const descriptionRef = useRef();
    const difficultyRef = useRef();
    const dateRef = useRef();

    const navigate = useNavigate()

    const submitted = async () => {
        let task = {
            taskName: taskNameRef.current.value,
            description: descriptionRef.current.value,
            difficulty: difficultyRef.current.value,
            dueDate: dateRef.current.value
        }
        // console.log(task)
        await axios.post(BASE_URL, task)
        navigate("/all-tasks")
    }
    return (
        <Box>
            <SideBar addTask />
            <Box style={{ display: 'flex', flexDirection: 'column', marginLeft: '25vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}>Add New Task</h2>
                <Card sx={{ margin: '100px', padding: '30px 0', minHeight: '40vh' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

                        <input type="text" ref={taskNameRef} placeholder='Enter Task title' style={{ width: "60%", marginBottom: 20, padding: 7, background: '#E0EAFC', border: 'none' }} />

                        <textarea name="" ref={descriptionRef} id="" cols="21" rows="5" style={{ width: "60%", marginBottom: 20, padding: 5, background: '#E0EAFC', border: 'none', fontFamily: 'Epilogue, sans-serif' }} placeholder='Enter task description'></textarea>

                        <Box style={{ display: 'flex', width: "60%", margin: 10 }}>
                            <label style={{ alignSelf: 'center' }} htmlFor="">Due Date</label>
                            <input type="date" ref={dateRef} placeholder='Due date' style={{ width: "67%", marginLeft: 'auto', padding: 5, background: '#E0EAFC', border: 'none' }} />
                        </Box>

                        <Box style={{ display: 'flex', width: "60%", margin: 10 }}>
                            <label style={{ alignSelf: 'center' }} htmlFor="">Difficulty :</label>
                            <select name="" id="" ref={difficultyRef} style={{ width: "70%", padding: 5, marginLeft: 'auto', background: '#E0EAFC', border: 'none' }}>
                                <option value="Easy">Easy</option>
                                <option value="Normal">Normal</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </Box>

                        <Button variant="contained" onClick={submitted}>Add Task</Button>
                    </form>
                </Card>
            </Box>
        </Box >
    )
}

export default AddTask