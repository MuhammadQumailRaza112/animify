
import * as Styled from './Styled';
import logo1 from "@/assets/svg/Logo.svg";
import logo2 from "@/assets/svg/logo2.svg";
import logo3 from "@/assets/svg/logo3.svg";
import logo4 from "@/assets/svg/logo4.svg";
import logo5 from "@/assets/svg/logo5.svg";
import Image from 'next/image';


const scrollList = [logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3, logo4, logo5]

const OurClents = () => {
    return(
        <Styled.Container>
            <Styled.Heading>
                Our Clients
            </Styled.Heading>
        <Styled.ScrollContainer>
            {scrollList.map((logo, index) => (
                <Image src={logo} key={index} alt='logo' />
            ))}
        </Styled.ScrollContainer>
        </Styled.Container>
    )
}

export default OurClents;