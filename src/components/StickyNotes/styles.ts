import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;

	width: 100%;

	.reminderTitle {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;

		margin: 2rem 0;

		> h1 {
			color: var(--yellow-600);
			font-family: "inter";
		}
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 1.5rem;
	grid-column-gap: 2.5rem;

	width: 90%;

	margin-bottom: 5rem;

	> div {
		display: flex;
		flex-direction: column;

		align-items: center;

		height: 15rem;

		gap: 1rem;
		padding: 1rem;

		background-color: var(--blue-300);
		border-radius: 0.4rem;

		> h2 {
			font-family: "Inter";
			color: var(--blue-600);
		}

		> p {
			font-family: "Roboto";
			width: 90%;

			overflow: auto;
			text-align: center;

			::-webkit-scrollbar {
				display: none;
			}
		}
	}
`;
