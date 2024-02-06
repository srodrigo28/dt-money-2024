import Modal from "react-modal";
import { FormEvent, useState } from "react";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import { api } from "../../services/api";

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal( { isOpen, onRequestClose } : NewTransactionModalProps) {
    const [title, setTitle] = useState('Title')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('Category')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = {title, value, category, type};

        api.post('/transactions', data)
    }

    return(
        <Container>
            <Modal 
                isOpen={isOpen} 
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <button 
                    type="button" 
                    onClick={onRequestClose} 
                    className="react-modal-close"
                >
                <img src={closeImg} alt="fechar modal" />
                </button>
                <Container onSubmit={handleCreateNewTransaction}>
                    <h2>Cadastrar transação</h2>

                    <input 
                        type="text" 
                        value={title}
                        placeholder="Titulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <input 
                        type="number" 
                        value={value}
                        placeholder="R$ 0,00"
                        onChange={(e) => setValue(Number(e.target.value))}
                    />

                    <TransactionTypeContainer>
                        <RadioBox 
                            // className={ type === 'deposit' ? 'active' : ''}
                            type="button" 
                            value={type}
                            activeColor="green"
                            isActive={ type === 'deposit' }
                            onClick={() => { setType('deposit'); }}
                            
                        >
                            <img src={incomeImg} alt="Entrada" />
                            <span>Entrada</span>
                        </RadioBox>

                        <RadioBox 
                            type="button" 
                            onClick={() => { setType('withdraw'); }}
                            isActive={ type === 'withdraw' }
                            activeColor="red"
                        >
                            <img src={outcomeImg} alt="Saída" />
                            <span>Saída</span>
                        </RadioBox>
                    </TransactionTypeContainer>

                    <input 
                        type="text"
                        value={category}
                        placeholder="Categoria"
                        onChange={(e) => setCategory(e.target.value)}
                    />

                    <button type="submit">Cadastrar</button>


                </Container>

            </Modal>
        </Container>
    )
}