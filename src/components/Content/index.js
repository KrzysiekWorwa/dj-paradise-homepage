import About from "./About";
import Address from "./Address";
import Cooperation from "./Cooperation";
import { Container } from "./styled";

const Content = () => {
    return (
        <Container>
            <About />
            <Cooperation />
            <Address />
        </Container>
    );
};

export default Content;