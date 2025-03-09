import Image from "next/image";
import Logo from '../../assets/svg/Logo.svg'
import * as Styled from "./Styled";
import Link from "next/link";

export default function HeaderContainer() {
  return (
    <Styled.HeaderContainer>
        <Image src={Logo} alt="Logo" width={50} height={50} />
    <Styled.LinkWrapper>
      <Link href={"/"}>
        <Styled.Text>Home</Styled.Text>
      </Link>
      <Link href={"/"}>
        <Styled.Text>Template</Styled.Text>
      </Link>
      <Link href={"/"}>
        <Styled.Text>Pricing</Styled.Text>
      </Link>
      <Link href={"/"}>
        <Styled.Text>About</Styled.Text>
      </Link>
      </Styled.LinkWrapper>
      <Styled.ExploreButton  variant="contained">
       <Styled.Text>Try it now</Styled.Text>
      </Styled.ExploreButton>
    </Styled.HeaderContainer>
  );
}
