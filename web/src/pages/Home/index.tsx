import {Container,Title, Button, Image, LeftContainer, RightContainer, SubTitle, ButtonBox,} from './styles'
import { Link } from 'react-router-dom'



export default function Home(){


    return(
    <Container>
        <LeftContainer>
            <Title>Pedra Azul inteira na Palma de sua mão</Title>
            <SubTitle> Encontre no comercio local tudo o que precisa</SubTitle>

<Link to='/new'>
            <Button>

                <ButtonBox>{'>'}</ButtonBox>
                Cadastre o seu comercio

            </Button></Link>
        </LeftContainer>
        <RightContainer>
            <Image></Image>


        </RightContainer>
    </Container>
    )
} 