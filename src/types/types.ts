export interface ErrorConfig {
	baseUrl?: string;
}

export interface HttpErrorParams {
	type: string;
	title: string;
	status: number;
	detail: string;
	instance?: string;
}

export interface ValidationErrors {
	[field: string]: string[];
}
