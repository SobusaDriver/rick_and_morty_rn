import LocationPlanet from "./Location";

type Character = {
	id: number;
	name: string;
	status: string;
	species: string;
	type: string;
	gender: string;
	origin: LocationPlanet;
	location: LocationPlanet;
	image: string;
	episode: Array<string>;
	url: string;
	created: string;
};

export default Character;
