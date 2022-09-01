import { useEffect, useState } from "react";
import { IPokemon, IUrlData, IUrlDataPokemon } from "../../Interfaces/IPokemon";
import { getAllPokemons, getPokemon } from "../../Services/Pokemon.service";
import PokemonCard from "./PokemonCard";
import './pokemon.scss';
import ModalPokemon from "./modal-pokemon";


function Pokemon() {

	const [modalState, setModalState] = useState({ show: false }); // open modal

	const [uniquePokemon, setUniquePokemon] = useState<IPokemon>();

	const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);
	// setPokemonData(old => [...old,...newArr]);
	const [nextUrl, setNextUrl] = useState<string>('');
	// const [prevUrl, setPrevUrl] = useState<string>('');
	const [loading, setLoading] = useState(true);
	const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemons(initialUrl);
			setNextUrl(response.next);
			// setPrevUrl(response.previous);
			await loadingPokemon(response.results);
			setLoading(false);
		};
		fetchData();
	}, []);

	const Next = async () => {
		setLoading(true);
		let data = await getAllPokemons(nextUrl);
		await loadingPokemon(data.results);
		setNextUrl(data.next);
		// setPrevUrl(data.previous);
		setLoading(false);
	};

	// const Previous = async () => {
	// 	if (!prevUrl) return;
	// 	setLoading(true);
	// 	let data = await getAllPokemons(prevUrl);
	// 	await loadingPokemon(data.results);
	// 	setNextUrl(data.next);
	// 	setLoading(false);
	// };

	const loadingPokemon = async (data: IUrlDataPokemon[]) => {
		let _pokemonData: IPokemon[] = await Promise.all(data.map(async pokemon => {
			let pokemonRecord: IPokemon = await getPokemon(pokemon.url);
			return pokemonRecord;
		}));
		setPokemonData([...pokemonData, ..._pokemonData]);
		console.log(pokemonData);
	};


	const showModal = () => {
		setModalState({ show: true });
	};// open modal

	const hideModal = () => {
		setModalState({ show: false });
	}; // open modal

	const cardToContainer = (pokemon: IPokemon): void => {
		console.log(pokemon);
		setUniquePokemon(pokemon);
		showModal();
	} // do filho pro pai

	return (
		<section className="pokemon-app">
			<div className="pokemon-container">
				{loading ? pokemonData.map((pokemon, i) => { return <PokemonCard Pokemon={pokemon} modalPokemon={cardToContainer} key={i} /> }) : pokemonData.map((pokemon, i) => {
					return <PokemonCard
						Pokemon={pokemon}
						modalPokemon={cardToContainer}
						key={i}
					/>
				})}
			</div>
			<ModalPokemon show={modalState.show} handleClose={hideModal} pokemon={uniquePokemon} />
			<div className="pokemon-controllers">
				<button className="btn" onClick={Next}>Next</button>
			</div>
		</section>
	);
};

export default Pokemon;
// https://www.youtube.com/watch?v=HaEB0vdxpdg