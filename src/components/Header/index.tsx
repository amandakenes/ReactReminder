import { Logo } from "../Logo";
import { Container } from "./styles";
import {Button} from "../Button";
import {useState} from "react";
import { NewStickyModal } from "../NewStickyModal";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
    <Container>
        <Logo />
        <Button title="Adcicionar Lembrete" onClick={() => handleOpenModal()} />
        <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Container>
)};



