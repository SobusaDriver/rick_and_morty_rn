type PageInfo = { pageNumber: number; isLastPage: boolean };

export type RootStackParamsList = {
	Home: undefined;
	ListOfCharacters: PageInfo;
	ListOfLocations: PageInfo;
	ListOfEpisodes: PageInfo;
};
