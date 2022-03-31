import {TableHead} from './TransactionHistory.styled';

export const TransactionHead = () => {
    return (
        <thead>
            <TableHead>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </TableHead>
        </thead>
    );
};