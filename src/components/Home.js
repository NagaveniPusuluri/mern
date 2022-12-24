import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from 'react-router-dom';
const Home=()=>{
    return(
        <div className='mt-5'>
        <div className='container'>
            <div className="add-btn mt-2">
            <NavLink to="/register" className='btn btn-primary'>Add Button</NavLink>
            </div>
            <table class="table mt-2">
  <thead>
    <tr className="table-dark">
      <th scope="col">Id</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Number</th>
      <th scope='col'></th>
    </tr>
  </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mark@mdo.com</td>
            <td>9588895888</td>
            <td className='d-flex justify-content-around'>
                <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                <button className='btn btn-primary'><CreateIcon/></button>
                <button className='btn btn-danger'><DeleteIcon/></button>
            </td>
            </tr>
            <tr>
            <th scope="row">1</th>
            <td>Amit</td>
            <td>amit@mdo.com</td>
            <td>9555595888</td>
            <td className='d-flex justify-content-around'>
                <button className='btn btn-success'><RemoveRedEyeIcon/></button>
                <button className='btn btn-primary'><CreateIcon/></button>
                <button className='btn btn-danger'><DeleteIcon/></button>
            </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
    )
}

export default Home;