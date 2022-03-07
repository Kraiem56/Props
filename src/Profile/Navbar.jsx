import React from 'react'
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Navbar = () => {
  return (
    <div >
        <table>
            <tbody>
            <tr>
                <th> 
                    <div>
                    <img className='logoJaguar' src="data:image/png;base64,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"
                     alt="" />
                    </div>
                </th>
                <th>
                <div className='VÉHICULES'>
                <h6>VÉHICULES</h6>
                </div>
                </th> 
                <th>
                <div className='ACHAT'>
                <h6>ACHAT</h6>
                </div>
                </th> 
                <th>
                <div className='PROPRIÉTAIRES'>
                <h6>PROPRIÉTAIRES</h6>
                </div>
                </th> 
                <th>
                <div className='EXPLOREZ'>
                <h6>EXPLOREZ</h6>
                </div>
                </th> 
                <th className='thq'></th>
                <th>
                    <div className='Search'>
                  <SearchIcon></SearchIcon>
                    </div>
                </th>
                <th>
                <div className='Location'>
                    <LocationOnIcon></LocationOnIcon>
                </div>
                </th>
                <th>
                    <div className='FR'>
                    <h4>FR</h4>
                    </div>
                </th>
            </tr>
       </tbody>
        </table> 
    </div>
  )
}

export default Navbar