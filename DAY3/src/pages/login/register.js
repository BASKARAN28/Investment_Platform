import React, { useState } from 'react';
import { Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';

export  const Registration = () => {
    const paperStyle={padding:'50px 20px',width:600,margin:'20px auto'}
    const[fullname,setFname]=useState("")
    const[fathername,setFaName]=useState("")
    const[dateofBirth,setDob]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[phone,setPhone]=useState([])
    const[address,setAdd]=useState("")

  
    const handleRegiter = (e) => {
      e.preventDefault();

    };
  
    return (
      <div className='Body'>
        <Paper elevation={3} style={paperStyle} > 
            <h1 style={{textAlign:'center',color:"BLACK"}}ge>NEW USER REGISTRATION</h1>
            <form onSubmit={handleRegiter}>
            
        <h2 style={{textAlign:'left',color:"black"}}>Full Name :</h2>
        <Paper elevation={7} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id='outline' label="Enter your Fullname" variant="outlined" fullWidth
      value={fullname}
      onChange={(e)=>setFname(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>Father's Name :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic2" label="Enter Father's Name" variant="outlined" fullWidth
      value={fathername}
      onChange={(e)=>setFaName(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:" black"}}>Date Of Birth :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic3" label="Enter your Date of Birth" variant="outlined" fullWidth
      value={dateofBirth}
      onChange={(e)=>setDob(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:" black"}}>Age :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic4" label="Enter your age" variant="outlined" fullWidth
      value={age}
      onChange={(e)=>setAge(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>E-mail :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic5" label="Enter your E-mail" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>Mobile Number :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic5" label="Enter your Mobile Number" variant="outlined" fullWidth
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>Address :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic5" label="Enter your City" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAdd(e.target.value)}/>
      </Paper>
      
      <Link to="/add"><button type="button">Register</button></Link>
    
    
    </form>
    </Paper>
      </div>
    );
  };
 
  
  
  