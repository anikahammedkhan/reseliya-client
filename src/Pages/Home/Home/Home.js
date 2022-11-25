import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import CustomerReview from '../CustomerReview/CustomerReview';
import FewProducts from '../FewProducts/FewProducts';
import Hero from '../Hero/Hero';
import QualityCard from '../QualityCard/QualityCard';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Reseliya-Home</title>
                    <meta name="description" content="Home" />
                </Helmet>
            </HelmetProvider>
            <Hero></Hero>
            <CategoryMenu></CategoryMenu>
            <FewProducts></FewProducts>
            <CustomerReview></CustomerReview>
            <QualityCard></QualityCard>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;