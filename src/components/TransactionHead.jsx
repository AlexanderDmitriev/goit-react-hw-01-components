import {TableHeadRow} from './TransactionHistory.styled';

export const TransactionHead = () => {
    return (
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    );
};