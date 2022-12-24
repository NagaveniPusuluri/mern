import React from 'react';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
const Details=()=>{

    return(
        <div className='container mt-3'>
            <h1 style={{fontWeight:400}}>Welcome Veni</h1>
        <Card sx={{maxWidth:600}}>
            <CardContent>
            
                <div className='row'>
                <div className="add-btn ">
                <button className='btn btn-primary mx-2 '><CreateIcon/></button>
                <button className='btn btn-danger'><DeleteIcon/></button>
                </div>
                <div className='left_view col-lg-6 col-md-6 col-12'>                
                <img src="/profile.jpg" style={{width:50}} alt=""/>
                    
                    <h3 className="mt-3">Name: <span style={{fontWeight:400}}>Veni</span></h3>
                    <h3 className="mt-3">Age: <span style={{fontWeight:400}}>25</span></h3>
                    <p className="mt-3"><EmailIcon/>Email: <span>veni@email.com</span></p>
                    <p className="mt-3"><LocalPhoneIcon/>Phone No: <span>9998889990</span></p>                
                </div>
                <div className='right_view col-lg-6 col-md-6 col-12'>
                   
                    <p className="mt-5"><WorkIcon/>Occupation: <span>Software</span></p>
                    <p className="mt-3">Location: <span>Guntur</span></p>
                    <p className="mt-3">Description: <span>Working in Freecharge Payment Technologies Pvt Ltd </span></p>
                </div>
            </div> 
            </CardContent>
        </Card>
    </div>
    )
}

export default Details;

