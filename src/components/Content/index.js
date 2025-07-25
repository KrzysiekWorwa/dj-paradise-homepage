import About from "./About";
import Address from "./Address";
import Cooperation from "./Cooperation";
import { Container } from "./styled";
import WhyUs from "./WhyUs";

const Content = () => {
    return (
        <Container>
            <About />
            <Cooperation />
            <WhyUs />
            <Address />
        </Container>
    );
};

export default Content;