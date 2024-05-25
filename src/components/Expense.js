import { Box, Card, CardContent, Typography, styled } from '@mui/material';

const Container = styled(Box)`
display:flex;
& > div {
    flex:1;
    padding: 10px;
}
` 

const Expense = ({transactions}) =>{

  //Calculate the Total Income 
  const amount = transactions.map(transactions => transactions.amount);
  const Income = amount.filter(item => item > 0).reduce((acc,item) => (acc += item) , 0).toFixed(2);

   //Calculate the Total Income 
   const expense = (amount.filter(item => item < 0).reduce((acc,item) => (acc += item) , 0)* -1).toFixed(2);


    return(
        <Container>
           <Card>
             <CardContent>
                <Typography>Income:</Typography>
                <Typography style={{color:"Green"}}> ₹{Income}</Typography>
             </CardContent>
           </Card>
           <Card>
             <CardContent>
                <Typography>Expense:</Typography>
                <Typography style={{color:"Red"}}>{expense}</Typography>
             </CardContent>
           </Card>
        </Container>
    )
}

export default Expense;