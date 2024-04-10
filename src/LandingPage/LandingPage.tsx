import CardsContainer from './components/CardsContainer';
import {
  CardsSection,
  LandingHeader,
} from './components/styled-poke-components/ContainerStyles';

function LandingPage() {
  return (
    <div className="landing-page">
      <LandingHeader />
      <CardsSection>
        <CardsContainer />
      </CardsSection>
    </div>
  );
}

export default LandingPage;
