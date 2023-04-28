import {
	API_CHARACTERS,
	API_EPISODES,
	API_LOCATIONS,
	API_PAGINATION,
	API_ROUTE,
} from "../../CONSTANTS";

export async function getCharacters(pageNumber: number = 1) {
	const url = `${API_ROUTE}${API_CHARACTERS}${API_PAGINATION}${pageNumber}`;
	const req = await fetch(url);
	return await req.json();
}

export async function getLocations(pageNumber: number = 1) {
	const url = `${API_ROUTE}${API_LOCATIONS}${API_PAGINATION}${pageNumber}`;
	const req = await fetch(url);
	return await req.json();
}

export async function getEpisodes(pageNumber: number = 1) {
	const url = `${API_ROUTE}${API_EPISODES}${API_PAGINATION}${pageNumber}`;
	const req = await fetch(url);
	return await req.json();
}
