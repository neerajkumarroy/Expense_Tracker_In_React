import './App.css';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import Expense from './components/Expense';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';
import { useState } from 'react';

const Header = styled(Typography)`
   font-size: 36px;
  color: blue;
  text-transform: uppercase;
`;

const Component = styled(Box)`
  display: flex;
  background: #fff;
  width: 800px;
  padding:10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    height: 70vh;
    width:100%;
    padding: 10px;
  }
`;

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, text: "juice", amount: -100 },
    { id: 2, text: "salary", amount: 10000 },
    { id: 3, text: "momos", amount: -120 },
    { id: 4, text: "bonus", amount: 2000 },
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
