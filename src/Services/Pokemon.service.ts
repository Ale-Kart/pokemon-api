import { IPokemon, IUrlData, IUrlDataPokemon } from "../Interfaces/IPokemon";

export async function getAllPokemons(url: string): Promise<IUrlData> {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then((result): Promise<IUrlData> => result.json())
			.then((data: any) => resolve(data))
	});
}

export async function getPokemon(url: string): Promise<IPokemon> {
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(res => res.json())
			.then((data: any) => resolve(data));
	})
};