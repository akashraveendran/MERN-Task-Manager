import React, { useEffect, useState } from 'react'
import Singletask from '../components/Singletask'
import SideBar from '../components/SideBar'
import axios from "axios"
import { BASE_URL } from '../api/Api';



function TasksList() {
    const [taskList, setTaskList] = useState();
    const fetchAllTasks = async function () {
        let { data } = await axios.get(BASE_URL) //destruscturing response from the axios request and getting data
        // console.log(data.tasks);
        setTaskList(data.tasks)
    }
    useEffect(() => {
        fetchAllTasks()
    }, [])
    return (
        <>
            <SideBar alltasks />
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}> Tasks List</h2>
                <div className="tasks" style={{ padding: '0 10vw' }}>
                    {
                        taskList &&
                        taskList.map((singleTask) => {
                            console.log(singleTask)
                            return <Singletask data={singleTask} />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TasksList