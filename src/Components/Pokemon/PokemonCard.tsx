import { IPokemon } from '../../Interfaces/IPokemon';
import './pokemon-card.scss';
import { useState } from 'react';

import bugIcon from "../../Icons/bug.svg";
import darkIcon from "../../Icons/dark.svg";
import dragonIcon from "../../Icons/dragon.svg";
import electricIcon from "../../Icons/electric.svg";
import fairyIcon from "../../Icons/fairy.svg";
import fightingIcon from "../../Icons/fighting.svg";
import fireIcon from "../../Icons/fire.svg";
import ghostIcon from "../../Icons/ghost.svg";
import grassIcon from "../../Icons/grass.svg";
import groundIcon from "../../Icons/ground.svg";
import iceIcon from "../../Icons/ice.svg";
import normalIcon from "../../Icons/normal.svg";
import poisonIcon from "../../Icons/poison.svg";
import psychicIcon from "../../Icons/psychic.svg";
import rockIcon from "../../Icons/rock.svg";
import steelIcon from "../../Icons/steel.svg";
import waterIcon from "../../Icons/water.svg";
import flyingIcon from "../../Icons/flying.svg";
// import ModalPokemon from './modal-pokemon';

interface IPokemonCard {
	modalPokemon(pokemon: IPokemon): void;
	Pokemon: IPokemon;
}

function PokemonCard(props: IPokemonCard) {

	const icons = [
		{ name: "bug", icon: bugIcon },
		{ name: "dark", icon: darkIcon },
		{ name: "dragon", icon: dragonIcon },
		{ name: "electric", icon: electricIcon },
		{ name: "fairy", icon: fairyIcon },
		{ name: "fighting", icon: fightingIcon },
		{ name: "fire", icon: fireIcon },
		{ name: "ghost", icon: ghostIcon },
		{ name: "grass", icon: grassIcon },
		{ name: "ground", icon: groundIcon },
		{ name: "ice", icon: iceIcon },
		{ name: "normal", icon: normalIcon },
		{ name: "poison", icon: poisonIcon },
		{ name: "psychic", icon: psychicIcon },
		{ name: "rock", icon: rockIcon },
		{ name: "steel", icon: steelIcon },
		{ name: "water", icon: waterIcon },
		{ name: "flying", icon: flyingIcon },
	];

	function FindIcon(icon: string) {
		const _icon = icons.find(arr => arr.name === icon);
		return _icon?.icon
	}

	return (
		<div className="pokemon-card" id={"pokemon-" + props.Pokemon.types[0].type.name}>
			<div className="pokemon-card_head">
				{props.Pokemon.types.map((_class, i) => {
					return <img key={i} src={_class.type.name ? FindIcon(_class.type.name) : "../../Icons/" + _class.type.name} />
				})}
			</div>
			<img className="pokemon-card_img" src={props.Pokemon.sprites.other.dream_world.front_default} alt='pokemon image' width='100%' />
			<div className="pokemon-card_body">
				<div className="pokemon-card_details">
					<small className="pokemon-card_id">#{props.Pokemon.id}</small>
					<h2 className="pokemon-card_name">{props.Pokemon.name}</h2>
				</div>
				<button className='btn-scan-pokemon' type='button' onClick={() => props.modalPokemon(props.Pokemon)}>Scan</button>
			</div>

		</div>
	);
};
export default PokemonCard;