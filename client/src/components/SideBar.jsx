import { Box, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBarWrapper = styled(Box)`
min-height:100vh;
width:20vw;
background:#fff;
position:fixed;
z-index:1;
padding:10vh 20px;
display:flex;
flex-direction:column;
align-items:center;
`

const StyledLink = styled(Link)`
margin-bottom:20px;
background:#fff;
min-width:15vw;
border:1px solid #243B55;
border-radius:5px;
color:#444;
text-align:left;
padding:10px;
transition: .75s ease;
text-decoration: none;
:hover{
    color:#fff;
    background:#243B55;
    transform:scale(1.1);
}
`

function SideBar(props) {
    return (
        <SideBarWrapper>
            <StyledLink to="/add-task" style={props.addTask && { background: '#243B55', color: '#fff' }}>Add New Task</StyledLink>
            <StyledLink to="/" style={props.today && { background: '#243B55', color: '#fff' }}>Todays Tasks</StyledLink>
            <StyledLink to="/weeks-tasks" style={props.weekTasks && { background: '#243B55', color: '#fff' }}>Tasks for the Week</StyledLink>
            <StyledLink to="/all-tasks" style={props.alltasks && { background: '#243B55', color: '#fff' }}>All Tasks</StyledLink>
        </SideBarWrapper>
    )
}

export default SideBar