import { Container} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
      cardGrid: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        fontFamily: "system-ui",
        // fontFamily: "cursive !important",
      },
      icon:{
        marginLeft: theme.spacing(3),
      },
      spanh:{
        paddingLeft: theme.spacing(1),
      },
      pcont:{
        paddingLeft:theme.spacing(3),
      },
      lid:{
        lineHeight: "30px",
        fontSize: "initial",
        "&::marker":{
          color:"red"
        }
      }
  }));

export default function Body()
{
    
    const classes = useStyles();

    return(
        <>
        <Container className={classes.cardGrid}>
           <div>
             <h4 style={{paddingBottom: "10px"}}><CardGiftcardIcon color="secondary" className={classes.icon}/><span className={classes.spanh}>Shipping Times and Costs</span></h4>
             <ul>
               <li className={classes.lid}>Complimentary ground shipping within 1 to 7 business days</li>
               <li className={classes.lid}>In-store collection available within 1 to 7 business days</li>
               <li className={classes.lid}>Next-day and Express delivery options also available</li>
               <li className={classes.lid}>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
               <li className={classes.lid}>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
             </ul>
           </div>

           <div>
             <h4 style={{paddingBottom: "10px"}}><AccountBalanceWalletIcon color="secondary" className={classes.icon}/><span className={classes.spanh}>Payment Methods</span></h4>
             <p className={classes.pcont}>Xton accepts the following payment methods:</p>
             <ul>
               <li className={classes.lid}>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the order is shipped.</li>
               <li className={classes.lid}>Xton features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter them for future purchases.</li>
               <li className={classes.lid}>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
             </ul>
           </div>

           <div>
             <h4 style={{paddingBottom: "10px"}}><AutorenewIcon color="secondary" className={classes.icon}/><span className={classes.spanh}>Exchanges, Returns and Refunds</span></h4>
             <p className={classes.pcont}>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit. Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.</p>
           </div>
        </Container>
        </>
    )
}