import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { Link } from 'react-router-dom';
import './login.css';

export  const Additional = () => {
    const paperStyle={padding:'50px 20px',width:600,margin:'20px auto'}
    const[acname,setName]=useState("")
    const[acno,setAcc]=useState("")
    const[occupation,setOccu]=useState("")
    const[income,setIncoem]=useState("")
    const[adhar,setAdhar]=useState("")
    const[pan,setpan]=useState("")
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  
    const handleRegiter = (e) => {
      e.preventDefault();

    };
  
    return (
      <div className='Body'>
        <Paper elevation={3} style={paperStyle} > 
            <h1 style={{textAlign:'center',color:"BLACK"}}ge>ADDITONAL INFORMATION</h1>
            <form onSubmit={handleRegiter}>
            
        <h2 style={{textAlign:'left',color:"black"}}>Account holder Name:</h2>
        <Paper elevation={7} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id='outline' label="Name as per Adhar" variant="outlined" fullWidth
      value={acname}
      onChange={(e)=>setName(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>Account Number :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic2" label="Enter Account Number" variant="outlined" fullWidth
      value={acno}
      onChange={(e)=>setAcc(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:" black"}}>Occupation :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic3" label="Enter your Occupation" variant="outlined" fullWidth
      value={occupation}
      onChange={(e)=>setOccu(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:" black"}}>Monthly Income :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic4" label="Enter your income" variant="outlined" fullWidth
      value={income}
      onChange={(e)=>setIncoem(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>Aadhar number :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic5" label="XXXX XXXX XXXX" variant="outlined" fullWidth
      value={adhar}
      onChange={(e)=>setAdhar(e.target.value)}/>
      </Paper>
      <h2 style={{textAlign:'left',color:"black"}}>Pan card :</h2>
      <Paper elevation={6} style={{width:"550px",margin:"10px",padding:"15px",textAlign:"center",justifyContent:'center'}}>
      <TextField id="outlined-basic5" label="Enter your Mobile Number" variant="outlined" fullWidth
      value={pan}
      onChange={(e)=>setpan(e.target.value)}/>
      </Paper>
    
    <Button variant="outlined" onClick={handleClickOpen}>
        Confirm Registration
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Terms and Conditions"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Basic definitions<br />
<b>1.</b> “Age” means age as on the last birthday; i.e. the age of the Life Insured in completed years as on
Date of Commencement of Policy and is as shown in the Policy Schedule;
<br />
<b>2.</b>“Annualised Premium” shall be the Premium payable in a year chosen by the Policyholder under
a non-Single Pay option, excluding Extra Premiums, loading for Modal Premiums, taxes and rider
premiums, if any; as specified in the Policy Schedule;
<br />
<b>3.</b> “Assignee” is the person to whom the rights and benefits under the Policy are transferred by way of
an Assignment;in the Policy Schedule;
<br />
<b>4.</b> “Assignment” is the process of transferring the rights and benefits under the Policy to an Assignee
in accordance with the provisions of Section 38 of Insurance Act, 1938 as amended from time to
time;in the Policy Schedule;
<br />
<b>5.</b> “Claimant” means the person entitled to receive the Policy benefits and includes the Policyholder,
surviving Life Insured, the nominee, the Assignee, the legal heir, the legal representative(s) or the
holder(s) of succession certificate as the case may be;in the Policy Schedule;
<br />
<b>6.</b> “Date of Inception/Commencement of Policy” is the date mentioned on the Policy Schedule;in the Policy Schedule;
<br />
<b>7.</b> “Date of Commencement of Risk” means the date as specified in the Policy Schedule;in the Policy Schedule;
<br />
<b>8.</b> “Date of Maturity of Policy” means the date specified in the Policy Schedule on which the Policy
Term expires;in the Policy Schedule;
<br />
<b>9.</b>“Distance Marketing” shall mean and includes every activity of solicitation (including lead
generation) and sale of insurance products through the following modes:in the Policy Schedule;
<br />
i. Voice mode, which includes telephone-calling;<br />
ii. Short Messaging service (SMS);<br />
iii. Electronic mode which includes e-mail, internet and interactive television (DTH);<br />
iv. Physical mode which includes direct postal mail and newspaper & magazine inserts;
and,<br />
v. Solicitation through any means of communication other than in person.
Distance Marketing will include sales through Direct Sales (other than in person).<br />
<br></br>

<b>10.</b> “Extra Premium” means an additional amount charged by Us, as per Our Underwriting Policy (if
any), which is determined on the basis of disclosures made by You in the Proposal Form or any
other information received by Us including medical examination report of the Life Insured;
<br />
<b>11.</b>  “Grace Period” means a period of 15 (Fifteen) days from the due date of the first unpaid Premium
for monthly Premium payment mode and 30 (Thirty) days from the due date of first unpaid Premium
for all other Premium payment mode, except Single Pay;
<br />
<b>12.</b>  “Guaranteed Annual Income” shall be a fixed percentage of the Annualised Premium / Single
Premium excluding discount (as chosen by You at the inception of the Policy) payable in a year as
detailed in the Benefits below. For applicable Guaranteed Annual Income Factors, please refer our
website (www.tataaia.com) or visit the nearest branch of the Company;
<br />
<b>13.</b>  “Guaranteed Surrender Value” shall be the minimum Surrender Value computed in accordance
with Clause 4.2.1 of Part D, which is guaranteed by Us. The Guaranteed Surrender Value will be
determined in the Policy Year in which the Surrender is effected;
<br />
<b>14.</b>  “Income Frequency” is periodicity of the Guaranteed Annual Income as payable under the Policy and shall commence from the end of the Policy Year, following Date of Maturity of Policy or where
Option 2 is opted, following the next Policy Anniversary after date of diagnosis of Critical Illness,
whichever is earlier. The default frequency of the payment will be Annual. The chosen frequency is
as mentioned in the Policy Schedule. 

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus className="agree-button">
          <Link to="/Home">agree</Link>
          </Button>
        </DialogActions>
      </Dialog>
      </form>
    </Paper>
    </div>
  
      
    );
  };
 
  
  
  