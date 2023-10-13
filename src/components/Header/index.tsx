import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

import { AddCardOutlined } from '@mui/icons-material'

export function Header() {
    return (
        <div>
            <HeaderContainer>
                <AddCardOutlined/>
                <HeaderContent>
                    <NewTransactionButton>Nova transação</NewTransactionButton>
                </HeaderContent>
            </HeaderContainer>
        </div>
    ) 
}