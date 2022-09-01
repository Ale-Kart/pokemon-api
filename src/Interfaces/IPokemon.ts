
export interface IPokemonTypes {
	slot: number;
	type: {
		name: string;
		url: string
	}
}

export interface IPokemonAbilities {
	ability: {
		name: string,
		url: string,
	}
	is_hidden: boolean,
	slot: number
}

type abilities = {
	ability: {
		name: string,
		url: string
	}
	is_hidden: boolean,
	slot: number
}

type PokemonMoves = {
	move: {
		name: string,
		url: string,
	}
}

export interface IPokemon {
	id: number;
	abilities: abilities[];
	name: string;
	weight: number;
	height?: number;
	is_default?: boolean;
	sprites: {
		other: {
			dream_world: {
				front_default: string;
			}
		}
	};
	types: IPokemonTypes[],
	moves: PokemonMoves[]
}

export interface IUrlDataPokemon {
	name: string;
	url: string;
}

export interface IUrlData {
	count: number,
	next: string,
	previous: string,
	results: IUrlDataPokemon[]
}
