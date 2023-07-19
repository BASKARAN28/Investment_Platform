import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          Basic definitions
1. “Age” means age as on the last birthday; i.e. the age of the Life Insured in completed years as on
Date of Commencement of Policy and is as shown in the Policy Schedule;
2. “Annualised Premium” shall be the Premium payable in a year chosen by the Policyholder under
a non-Single Pay option, excluding Extra Premiums, loading for Modal Premiums, taxes and rider
premiums, if any; as specified in the Policy Schedule;
3. “Assignee” is the person to whom the rights and benefits under the Policy are transferred by way of
an Assignment;
4. “Assignment” is the process of transferring the rights and benefits under the Policy to an Assignee
in accordance with the provisions of Section 38 of Insurance Act, 1938 as amended from time to
time;
5. “Claimant” means the person entitled to receive the Policy benefits and includes the Policyholder,
surviving Life Insured, the nominee, the Assignee, the legal heir, the legal representative(s) or the
holder(s) of succession certificate as the case may be;
6. “Date of Inception/Commencement of Policy” is the date mentioned on the Policy Schedule;
7. “Date of Commencement of Risk” means the date as specified in the Policy Schedule;
8. “Date of Maturity of Policy” means the date specified in the Policy Schedule on which the Policy
Term expires;
9. “Distance Marketing” shall mean and includes every activity of solicitation (including lead
generation) and sale of insurance products through the following modes:
i. Voice mode, which includes telephone-calling;
ii. Short Messaging service (SMS);
iii. Electronic mode which includes e-mail, internet and interactive television (DTH);
iv. Physical mode which includes direct postal mail and newspaper & magazine inserts;
and,
v. Solicitation through any means of communication other than in person.
Distance Marketing will include sales through Direct Sales (other than in person).
10. “Extra Premium” means an additional amount charged by Us, as per Our Underwriting Policy (if
any), which is determined on the basis of disclosures made by You in the Proposal Form or any
other information received by Us including medical examination report of the Life Insured;
11. “Grace Period” means a period of 15 (Fifteen) days from the due date of the first unpaid Premium
for monthly Premium payment mode and 30 (Thirty) days from the due date of first unpaid Premium
for all other Premium payment mode, except Single Pay;
12. “Guaranteed Annual Income” shall be a fixed percentage of the Annualised Premium / Single
Premium excluding discount (as chosen by You at the inception of the Policy) payable in a year as
detailed in the Benefits below. For applicable Guaranteed Annual Income Factors, please refer our
website (www.tataaia.com) or visit the nearest branch of the Company;
13. “Guaranteed Surrender Value” shall be the minimum Surrender Value computed in accordance
with Clause 4.2.1 of Part D, which is guaranteed by Us. The Guaranteed Surrender Value will be
determined in the Policy Year in which the Surrender is effected;
14. “Income Frequency” is periodicity of the Guaranteed Annual Income as payable under the Policy and shall commence from the end of the Policy Year, following Date of Maturity of Policy or where
Option 2 is opted, following the next Policy Anniversary after date of diagnosis of Critical Illness,
whichever is earlier. The default frequency of the payment will be Annual. The chosen frequency is
as mentioned in the Policy Schedule. 

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}