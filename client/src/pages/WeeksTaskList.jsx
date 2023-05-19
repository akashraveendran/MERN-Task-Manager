import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Singletask from '../components/Singletask'
import SideBar from '../components/SideBar'
import { BASE_URL } from '../api/Api';


function WeeksTaskList() {
    const [taskList, setTaskList] = useState();
    const fetchAllTasks = async function () {
        //destruscturing response from the axios request and getting data
        let { data } = await axios.get(BASE_URL)
        console.log(data.tasks);
        const todayObj = new Date();
        const todayDate = todayObj.getDate();
        const todayDay = todayObj.getDay();

        // get first date of week
        const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

        // get last date of week
        const lastDayOfWeek = new Date(firstDayOfWeek);
        lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);
        console.log("dates ", firstDayOfWeek, lastDayOfWeek)

        const weeksTasks = data.tasks.filter((single) => {
            let taskDay = new Date(single.dueDate);
            if (taskDay >= firstDayOfWeek && taskDay <= lastDayOfWeek) {
                console.log(single)
                return single;
            }
        })
        setTaskList(weeksTasks)
    }
    useEffect(() => {
        fetchAllTasks()
    }, [])
    return (
        <div>
            <SideBar weekTasks />
            <div className='tasks-container' style={{ display: 'flex', flexDirection: 'column', marginLeft: '20vw' }}>
                <h2 style={{ textAlign: 'center', fontSize: 35, color: '#fff' }}> Tasks for the Week</h2>
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
        </div >
    )
}

export default WeeksTaskList