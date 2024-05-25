import { ListItem, ListItemIcon, ListItemText, styled } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Detail = styled(ListItem)`
  margin-top: 25px;
`;

const Transaction = ({ transaction, setTransactions, transactions }) => {
  const color = transaction.amount > 0 ? 'green' : 'red';

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <Detail style={{ background: color, color: '#fff' }}>
      <ListItemIcon>
        <DeleteIcon onClick={() => deleteTransaction(transaction.id)} />
      </ListItemIcon>
      <ListItemText primary={transaction.text} />
      <ListItemText primary={transaction.amount} />
    </Detail>
  );
};

export default Transaction;
