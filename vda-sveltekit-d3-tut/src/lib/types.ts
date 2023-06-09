import type { float } from "aws-sdk/clients/cloudfront";

export type Record = {
	cusip: string;
	value: float;
	shares: float;
	cusip_ticker: string;
	name_of_issier: string;
	quarter: string;
};