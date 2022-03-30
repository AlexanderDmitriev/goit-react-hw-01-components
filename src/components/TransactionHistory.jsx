import { Container} from "./App.styled";
import {TransactionsRows} from './TransactionsTable';
import PropTypes from 'prop-types'; 
import {TableBody} from './TransactionHistory.styled';
import {TransactionHead} from './TransactionHead';

export const TransactionHistory = ({items}) => {
    return (
        <Container>
            <table className="transaction-history">
                <TransactionHead/>
                <tbody>
                    {items.map(transactions =>
                        <TransactionsRows
                            key={transactions.id}
                            type={transactions.type}
                            amount={transactions.amount}
                            currency={transactions.currency}
                        />)}
                </tbody>
            </table>
        </Container> 
    );
};

TransactionsRows.propTypes={
    key:PropTypes.number.isRequired,
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string
};