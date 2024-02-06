import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

interface Transaction{
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createAt: string;
}

interface TransactionProviderProps{
    children: ReactNode;
}

export const TransactionContext = createContext<Transaction[]>([]);

export function TransactionsProvider( {children} : TransactionProviderProps ){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions")
        .then( res => setTransactions(res.data.transactions))
    }, []);
    
    return(
        <TransactionContext.Provider value={transactions}>
            {children}
        </TransactionContext.Provider>
    )
}