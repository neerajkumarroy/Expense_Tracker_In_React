import { Box, Divider, List, Typography } from '@mui/material';
import Transaction from './Transaction';


const Transactions = ({transactions, setTransactions})=>{
    return(
       <Box>
        <Typography>Transactions History</Typography>
        <Divider />
        <List>
            {
                transactions.map(transaction =>(
                    <Transaction transaction={transaction} setTransactions = {setTransactions} transactions = {transactions} />
                ))
            }
        </List>
       </Box> 
    )
}

export default Transactions;