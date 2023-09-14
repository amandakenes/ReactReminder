import { Container } from "./styles";
import RRLogo from "../../assets/images/RRLogo.jpg";

export function Logo() {
    return <Container>
        <img src={RRLogo} alt="React Reminder Logo" />
    </Container>
};