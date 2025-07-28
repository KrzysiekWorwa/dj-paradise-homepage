import About from "./About";
import Address from "./Address";
import Offer from "./Offer";
import { Container } from "./styled";

const Content = () => {
    return (
        <Container>
            <About />
            <Offer />
            <Address />
        </Container>
    );
};

export default Content;