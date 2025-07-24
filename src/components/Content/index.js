import About from "./About";
import Address from "./Address";
import Cooperation from "./Cooperation";
import { Container } from "./styled";
import Team from "./Team";
import WhyUs from "./WhyUs";

const Content = () => {
    return (
        <Container>
            <About />
            <Cooperation />
            <Team />
            <WhyUs />
            <Address />
        </Container>
    );
};

export default Content;