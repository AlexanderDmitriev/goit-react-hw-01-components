import { Container} from "../App.styled";
import {TransactionsRows} from './TransactionsTable';
import PropTypes from 'prop-types'; 
import {Table} from './TransactionHistory.styled';
import {TransactionHead} from './TransactionHead';

export const TransactionHistory = ({items}) => {
    return (
        <Container>
            <Table>
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
            </Table>
        </Container> 
    );
};

TransactionsRows.propTypes={
    type:PropTypes.string,
    amount:PropTypes.string,
    currency:PropTypes.string
};