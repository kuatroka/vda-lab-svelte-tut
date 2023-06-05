/** @type {import('./$types').PageLoad} */

import Papa from 'papaparse'

// fetch data from internet/ online csv file
export async function load({ fetch }) {
	const res = await fetch('https://vda-lab.gitlab.io/datavis-technologies/assets/flights_part.csv', {
        headers: {
            'Content-Type': 'text/csv'
                }})
    let csv_data = await res.text()
    let csv_parsed = Papa.parse(csv_data, {header: true})
    let flights = csv_parsed.data.slice(0,5) // fetches only 5 records.

    const res2 = await fetch('https://raw.githubusercontent.com/yoshishima/Stock_Data/master/CUSIP.csv', {
        headers: {
            'Content-Type': 'text/csv'
                }})
    let csv_data2 = await res2.text()
    let csv_parsed2 = Papa.parse(csv_data2, {header: true})
    let stocks = csv_parsed2.data.slice(0,5) // fetches only 5 records.
    

    console.log(flights)
    console.log(stocks)
	return { stocks, flights }

}


