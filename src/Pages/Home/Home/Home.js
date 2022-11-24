import React from 'react';
import CallToAction from '../CallToAction/CallToAction';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import CustomerReview from '../CustomerReview/CustomerReview';
import Hero from '../Hero/Hero';
import QualityCard from '../QualityCard/QualityCard';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CategoryMenu></CategoryMenu>
            <CustomerReview></CustomerReview>
            <QualityCard></QualityCard>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;