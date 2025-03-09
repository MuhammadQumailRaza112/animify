"use client"

import HeaderContainer from "@/components/Header";
import PageContainer from "@/components/PageContainer"
import Header from "./sections/Header";
import OurClents from "./sections/OurClients";


const HomeScreen = () => {
    return(
        <PageContainer>
            <HeaderContainer />
            <Header />
            <OurClents />
        </PageContainer>
    )
}

export default HomeScreen;