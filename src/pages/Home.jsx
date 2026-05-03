import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import TrustBridge from '../components/sections/TrustBridge';
import HowItWorks from '../components/sections/HowItWorks';
import ForBrands from '../components/sections/ForBrands';
import ForCreators from '../components/sections/ForCreators';
import SampleCampaign from '../components/sections/SampleCampaign';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Hero />
            <ServicesSection />
            <TrustBridge />
            <HowItWorks />
            <ForBrands />
            <ForCreators />
            <SampleCampaign />
            <FinalCTA />
        </div>
    );
};

export default Home;
