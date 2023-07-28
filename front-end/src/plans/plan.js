import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button } from '@material-ui/core';
import './plan.css'


const Plan =()=>{
    return(
      <div>
        <div className='Plan'><h1>Explore your Investment Plans here!</h1></div>
      <div className="card-container">
        <Card sx={{  maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689228694/SSCs_ojobvn.png" 
             alt="SCSS"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Senior Citizen Saving Scheme
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A senior citizen savings plan (SCSS) is a wonderful investing choice if 
            you are a senior citizen and is the . It is backed by the government, and 
            only senior people (over the age of 60) are permitted to invest.This service is available at
             certain bank branches and post offices. You must join the plan within one month after retiring.
              SCSS is offering an annual interest rate of 8.2 per cent, payable weekly.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button>
          <Link to="/Bank"><h3>Invest</h3></Link> 
          </Button>
          </Card>
          <Card sx={{  maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689229117/POMI_gnaoyt.png"
            alt="POMIC"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Post Office Monthly Income Scheme
            </Typography>
            <Typography variant="body2" color="text.secondary">
            India Post's Post Office Monthly Income Scheme (POMIS) is
             a type of investment and is a nice way of . Because it is backed by the government,
              it is a great investment choice for risk-averse individuals seeking consistent regular income.
              The POMIS is presently giving 7.4 per cent annual interest, payable monthly.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{  maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image= "https://res.cloudinary.com/dadr6zgas/image/upload/v1689229458/Govn_odxovo.png"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Long-Term Government Bonds
            </Typography>
            <Typography variant="body2" color="text.secondary">
            For risk-averse investors, government bonds are a great low-risk investing choice.
             These bonds have maturities ranging from 5 to 40 years. Government bonds payout monthly 
             interest or give coupon payments set by the Indian government.
            Government bonds have a fixed maturity date. The primary goal of issuing government
             bonds is to raise funds for government spending.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{  maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689229680/corp_ecpogk.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Corporate Deposits
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Corporate deposits are available from a wide range of non-banking financial firms (NBFCs) 
            and housing finance businesses (HFCs). These are comparable to bank deposits in that you invest
             with a corporate organization, but they are not as safe as a bank deposit.
             Corporate deposits pay a high-interest rate and provide additional flexibility 
             that bank deposits do not.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
          </Card>
   
      <Card sx={{ maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689230483/monthly_bz9ckc.png"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Monthly Income Plans
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A Monthly Income Plan is a mutual fund that invests mostly in fixed income and a minor percentage
             in equity and equity-related securities and is the .The fund firms pay out a consistent income to
              their investors on a regular basis. This amount is not set and is determined by the fund's performance.
               The returns are not guaranteed since mutual fund performance drives them.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689241371/bjp12_emxfti.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Pradhan Mantri Vaya Vandana
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This is a scheme that is specifically designed for senior citizens to give them financial
             security after their retirement. It is the .It provides an individual with a stable income 
             to senior citizens with fixed interest rates from 7.4% for a year. It also comes with a policy
              term of 10 years according to the payment mode that is chosen by the pensioner.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689241577/lic_ooqjds.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Life Insurance Plus Saving
            </Typography>
            <Typography variant="body2" color="text.secondary">
            A guaranteed income insurance policy is another investment option for a consistent monthly income. 
            These are life insurance plans that provide the investor with the option of receiving a predetermined
             monthly payout once the maturity period has passed.Life insurance combined with savings is an 
             excellent method to guarantee your family's future while also maintaining financial stability when 
             you retire.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689241735/saving_wgsi9u.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Systematic Withdrawal Plans
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Every individual has a different financial need. Hence, every investor has a 
            unique investment plan and can turn out to be your .While some investors prefer investing in a lump sum,
             some others like to stagger their investments and use a systematic investment plan (SIP). While some 
             investors seek capital growth, others want regular income from their investments.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689241889/divided_jxuuh3.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Equity Share Dividends
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This option promises a consistent income as well as long-term investment gains,
             but the risk level is very high. To enable a high dividend payout ratio, you must
              create a diverse portfolio with a number of stocks. Companies that don't pay regular
               dividends have a higher-than-average chance because you only get dividends on profits, not capital.
            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      <Card sx={{ maxWidth: 450, marginBottom: '20px', backgroundImage: ''}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            background image="https://res.cloudinary.com/dadr6zgas/image/upload/v1689242095/annual_l3flpp.jpg"
            alt="POMIC"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Annuity Plans            </Typography>
            <Typography variant="body2" color="text.secondary">
            Annuity plans, which provide a consistent income at a lower risk, are offered by Indian insurance
             companies. This can be used as a retirement plan by investing in a lump sum to generate income at
              regular intervals.A deferred annuity and an immediate annuity are the two main categories used to 
              categorize annuity plans, depending on how long the payment period is. An immediate annuity involves
               receiving regular income as soon as you make the lump sum payment, whereas a deferred annuity 
                involves providing money after a fixed-tenor period you specify.

            </Typography>
          </CardContent>
          
        </CardActionArea>
        <Button>
          <Link to="/Register"><h3>Invest</h3></Link> 
          </Button>
      </Card>
      </div>
      </div>

      
      


)
};
export default Plan;





