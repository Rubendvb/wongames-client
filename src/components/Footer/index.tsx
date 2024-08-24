import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" $lineBottom $lineColor="secondary">
          Contact
        </Heading>

        <a href="#">suporte@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" $lineBottom $lineColor="secondary" size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            YouTube
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            YouTube
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            YouTube
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            YouTube
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" $lineBottom $lineColor="secondary" size="small">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">Home</Link>
          <Link href="/games">Store</Link>
          <Link href="/search">Buscar</Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <Heading color="black" $lineBottom $lineColor="secondary" size="small">
          Location
        </Heading>

        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2024 All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
