// @ts-nocheck

import * as Arrow from 'apache-arrow';
import * as aq from 'arquero';







export async function load({ fetch }) {
	const resp = await fetch('1762068-TICKER-2023-05-31.parquet')

    console.log(resp)
    const parquetUint8Array = new Uint8Array(await resp.arrayBuffer())
    console.log(parquetUint8Array)

    // const decoder = new TextDecoder();
    // const decodedString = decoder.decode(parquetUint8Array);
    // console.log(decodedString); // "Hello"
}



/////////////////////////////////////////////////

// import { initDB } from '$lib/duckdb';
// import * as Plot from '@observablehq/plot';
// import { base } from '$app/paths';

