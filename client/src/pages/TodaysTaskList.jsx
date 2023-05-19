import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Singletask from '../components/Singletask'
import SideBar from '../components/SideBar'
import { BASE_URL } from '../api/Api';

function TodaysTaskList() {
    const [taskList, setTaskList] = useState();
    const fetchAllTasks = async function () {
        let { data } = await axios.get(BASE_URL) //destruscturing response from the axios request and getting data
        // console.log(data.tasks);
        const todaystasks = data.tasks.filter((single) => {
            let today = new Date();
            let taskDay = new Date(single.dueDate);
            if (today.getDay() == taskDay.getDay()
                &&
                today.getMonth() == taskDay.getMonth()
                &&
                today.getFullYear() == taskDay.getFullYear()) {
                return single;
            }
        })
        setTaskList(todaystasks)
    }
    useEffect(() => {
        fetchAllTasks()
    }, [])
    return (
        <div >
            <SideBar today />
            <div className='tasks-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: '20vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}>Todays Tasks</h2>
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
        </div>
    )
}

export default TodaysTaskList