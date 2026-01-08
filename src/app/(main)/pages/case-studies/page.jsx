import PortfolioCard from '@/components/case-studies/PortfolioCard';
import PortfolioFqs from '@/components/case-studies/PortfolioFqs';
import PortfolioReady from '@/components/case-studies/PortfolioReady';
import React from 'react';

const Portfoliopage = () => {
    return (
        <div className="min-h-screen bg-black overflow-x-hidden pb-30">
            <section>
                <PortfolioCard/>
            </section>
            <section>
                <PortfolioFqs />
            </section>
            <section>
                <PortfolioReady/>
            </section>
        </div>
    );
};

export default Portfoliopage;