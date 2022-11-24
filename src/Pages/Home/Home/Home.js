import React from 'react';
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import CustomerReview from '../CustomerReview/CustomerReview';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <CategoryMenu></CategoryMenu>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;