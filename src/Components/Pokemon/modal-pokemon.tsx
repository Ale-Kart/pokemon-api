import { useState } from "react";
import { IPokemon } from "../../Interfaces/IPokemon";

interface IModalPokemon {
	handleClose(): void;
	show: boolean;
	pokemon?: IPokemon;
}

function ModalPokemon({ handleClose, show, pokemon }: IModalPokemon) {

	console.log(pokemon);
	// const [modalState, setModalState] = useState(false);
	const showHideClassName = show ? "modal-open" : "modal-closed"

	return (
		<div className="modal-pokemon" id={showHideClassName}>
			<div className={"modal-pokemon_content"}>
				<div className="modal-head">
					<button type="button" className="btn-close-modal" onClick={handleClose}>Close</button>
				</div>
				<div className="modal-body">
					<div className="modal-column">
						<img src={pokemon?.sprites.other.dream_world.front_default} width="100%" />
					</div>
					<div className="modal-column">
						<h1 className="modal-pokemon_name">{pokemon?.name}</h1>
						<div className="modal-status">
							{pokemon?.types.map(item => {
								return <i className="modal-pokemon_type">{item.type.name}</i>
							})}
						</div>
						<ul className="modal-pokemon_info">
							<li>
								<span>Height</span>
								<strong>{pokemon?.height}</strong>
							</li>
							<li>
								<span>Height</span>
								<strong>{pokemon?.weight}</strong>
							</li>
							<li>
								<span>Height</span>

							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalPokemon;