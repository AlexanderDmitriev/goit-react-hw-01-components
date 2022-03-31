import {TableRows,TableBody  } from "./TransactionHistory.styled";

export const TransactionsRows = ({type, amount, currency}) => {
    return (
            <TableBody>
                <TableRows>{type}</TableRows>
                <TableRows>{amount}</TableRows>
                <TableRows>{currency}</TableRows>
            </TableBody>
    );
}