import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../api/Api';


const CustomCard = styled(Card)`
  background: #fff;
  margin:10px;
`;

function Singletask(props) {
    const navigate = useNavigate()
    const editTask = () => {
        navigate('/edit-task', { state: props.data })
    }
    const deleteTask = async () => {
        let response = await axios.delete(`${BASE_URL}/${props.data.taskID}`)
        console.log(response)
        window.location.reload()
    }
    const completed = async () => {
        let updatedStatus = { status: "completed" };
        await axios.patch(`${BASE_URL}/${props.data.taskID}`, updatedStatus)
        window.location.reload()
    }
    return (
        <CustomCard sx={{ minWidth: 275 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {props.data.dueDate}
                    </Typography>
                    <Button variant="contained" color="success" onClick={completed}>mark as Completed</Button>
                </Box>
                <Typography variant="h5" component="div">
                    {props.data.taskName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.data.difficulty}
                </Typography>
                <Typography variant="body2">
                    {props.data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="small" onClick={editTask}>Edit</Button>
                <Button variant="contained" color='error' size="small" onClick={deleteTask}>Delete</Button>
            </CardActions>
        </CustomCard>
    )
}

export default Singletask