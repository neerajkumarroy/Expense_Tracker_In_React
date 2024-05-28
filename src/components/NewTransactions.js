import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { useState } from 'react';

const Container = styled (Box)`
display:flex;
flex-direction:column;
& > h5, & > div, & > button{
    margin-top:25px;
}`

const NewTransactions = ({setTransactions}) =>{

    const [text, setText] = useState("");
    const [amount, setAmount] = useState();

    const AddTransaction = () =>{

        const transaction = {
            id: Math.floor(Math.random()* 1000000),
            text: text,
            amount: +amount
        }
        setTransactions(previousstate => [transaction, ...previousstate]);
        
    }
      return(
        <Container>
            <Typography variant="h5">New Transation</Typography>
            <TextField label='Enter Expense' value={text} onChange={(e)=>setText(e.target.value)}/>
            <TextField label='Enter Amount' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            <Button variant='contained' onClick={()=>AddTransaction()}>Add Transaction</Button>

        </Container>
    )
}
export default  NewTransactions;



//This is the valdation code of the amount input filds 

// import { Box, Button, TextField, Typography, styled } from '@mui/material';
// import { useState } from 'react';

// const Container = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   & > h5, & > div, & > button {
//     margin-top: 25px;
//   }
// `;

// const NewTransactions = ({ setTransactions }) => {
//   const [text, setText] = useState("");
//   const [amount, setAmount] = useState("");
//   const [amountError, setAmountError] = useState(false);

//   const AddTransaction = () => {
//     if (amountError) return;

//     const transaction = {
//       id: Math.floor(Math.random() * 1000000),
//       text: text,
//       amount: +amount
//     };
//     setTransactions(previousState => [transaction, ...previousState]);
//     setText("");
//     setAmount("");
//   };

//   const handleAmountChange = (e) => {
//     const value = e.target.value;
//     if (value === '' || /^\d+$/.test(value)) {
//       setAmount(value);
//       setAmountError(false);
//     } else {
//       setAmountError(true);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h5">New Transaction</Typography>
//       <TextField 
//         label="Enter Expense" 
//         value={text} 
//         onChange={(e) => setText(e.target.value)} 
//       />
//       <TextField 
//         label="Enter Amount" 
//         value={amount} 
//         onChange={handleAmountChange} 
//         error={amountError}
//         helperText={amountError ? 'Please enter only integers' : ''}
//       />
//       <Button variant="contained" onClick={AddTransaction}>Add Transaction</Button>
//     </Container>
//   );
// };

// export default NewTransactions;
