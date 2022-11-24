import React from 'react';
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
        </div>
    );
};

export default Home;