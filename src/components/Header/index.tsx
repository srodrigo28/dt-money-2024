import logo from "./../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps{
    onOpen: () => void;
}

export function Header({ onOpen }: HeaderProps){
   

    return(
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={onOpen}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}