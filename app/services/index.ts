import {
	API_CHARACTERS,
	API_EPISODES,
	API_LOCATIONS,
	API_PAGINATION,
	API_ROUTE,
} from "../../CONSTANTS";

export async function getCharacters(pageNumber?: number) {
	const req = await fetch(
		API_ROUTE + API_CHARACTERS + API_PAGINATION + pageNumber ?? "1",
	);
	const req_parsed = await req.json();
	return req_parsed;
}

export async function getLocations(pageNumber?: number) {
	const req = await fetch(
		API_ROUTE + API_LOCATIONS + API_PAGINATION + pageNumber ?? "1",
	);
	const req_parsed = await req.json();
	return req_parsed;
}

export async function getEpisodes(pageNumber?: number) {
	const req = await fetch(
		API_ROUTE + API_EPISODES + API_PAGINATION + pageNumber ?? "1",
	);
	const req_parsed = await req.json();
	return req_parsed;
}