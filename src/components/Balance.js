import {Box, Typography, styled} from '@mui/material';

const BalanceText = styled(Typography)`
font-size:25px;
margin-bottom:20px;
`

const Balance = ({transactions})=>{

    //Calculate The Total Amount
    const amount = transactions.map(transactions => transactions.amount);
    const total = amount.reduce((amount,item) => (amount += item) , 0).toFixed(2);

    return(
        <Box>
            <BalanceText>Balance: ₹{total}</BalanceText>
        </Box>
    )
}

export default Balance;