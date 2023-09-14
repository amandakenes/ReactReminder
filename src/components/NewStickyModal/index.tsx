import { useContext, useState } from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import { Button } from "../Button";
import NotesContext from "../../hooks/notesContext";

interface ModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewStickyModal({ isOpen, onRequestClose }: ModalProps) {
	Modal.setAppElement("#root");

	const { setNotes, notes } = useContext<any>(NotesContext);

	const [stickyName, setStickyName] = useState("");
	const [stickyDescription, setStickyDescription] = useState("");

	const formData = {
		title: stickyName,
		description: stickyDescription,
	};

	function handleFormSubmit(event: any) {
		event.preventDefault();
		event.target.reset();
		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			shouldCloseOnEsc={true}
			className="react-modal-content"
			style={{
				overlay: {
					backgroundColor: "rgba(0, 0, 0, 0.409)",
				},
			}}
		>
			<Container onSubmit={handleFormSubmit}>
				<h1>Criar Lembrete</h1>
				<div>
					<input
						type="text"
						placeholder="Nome"
						onChange={(event) => setStickyName(event.target.value)}
					/>
					<textarea
						placeholder="Descrição"
						onChange={(event) => setStickyDescription(event.target.value)}
					/>
				</div>
				<Button
					title="Adicionar lembrete"
					onClick={() => setNotes([...notes, formData])}
				/>
			</Container>
		</Modal>
	);
}
