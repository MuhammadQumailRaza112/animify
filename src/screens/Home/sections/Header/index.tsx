import * as Styled from "./styled";
import Background from "@/assets/svg/AnimatedBackground.svg";

export default function Header() {
  return (
    <>
      <Styled.HeaderWrapper>
        <Styled.Text>
          Transform Concepts into,{"\n"}
          <Styled.Hightlight> Dynamic </Styled.Hightlight> Animations
        </Styled.Text>
        <Styled.Description>
          Unleash your creativity with our intuitive animation tool. Create
          stunning videos and bring your vision to life in just a few clicks!
        </Styled.Description>
        <Styled.ButtonWrapper>
          <Styled.ExploreButton>
            <Styled.ButtonText>Try it now</Styled.ButtonText>
          </Styled.ExploreButton>
          <Styled.DemoButton>
            <Styled.ButtonText>Book your demo</Styled.ButtonText>
          </Styled.DemoButton>
        </Styled.ButtonWrapper>
      </Styled.HeaderWrapper>
      <Styled.LayoutImage src={Background} layout="contain" alt="background" />
    </>
  );
}
