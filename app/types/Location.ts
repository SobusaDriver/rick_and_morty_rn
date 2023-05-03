type Location = {
	id: number;
	name: string;
	url: string;
	type?: string;
	dimension?: string;
	residents?: Array<string>;
	created?: string;
};

export default Location;
