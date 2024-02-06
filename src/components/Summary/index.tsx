import { Container } from "./styles";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionContext } from "../../TransactionsContext";

export function Summary(){
    const transactions = useContext(TransactionContext);

    console.log(transactions);

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="logo entradas" />
                </header>
                <strong>R$ 9.000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saída</p>
                    <img src={outcomeImg} alt="logo saidas" />
                </header>
                <strong> - R$ 2.000,00</strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Saldo atual :)</p>
                    <img src={totalImg} alt="logo total" />
                </header>
                <strong>R$ 7.000,00</strong>
            </div>
        </Container>
    )
}