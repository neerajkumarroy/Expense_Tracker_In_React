import './App.css';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import Expense from './components/Expense';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)`
   font-size: 36px;
  color: #4DEC0E;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  display: flex;
  background: #b8b0ae;
  width: 800px;
  padding:10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 90vh;
    width:100%;
    padding: 20px;
  }
`;

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "Burger", amount: -100 },
    { id: 2, text: "Salary", amount: 10000 },
    { id: 3, text: "Momos", amount: -120 },
    { id: 4, text: "Bonus", amount: 2000 },
  ]);

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
        <Balance transactions = {transactions} />
        <Expense transactions = {transactions}/>
        <NewTransactions setTransactions = {setTransactions}/>
      </Box>
      <Box>
        <Transactions transactions={transactions} setTransactions = {setTransactions} />
      </Box>
      </Component>
    </Box>
  );
}

export default App;
