// If you put the data file in the static directory of your svelte project,
// you can access it directly, e.g. with code below

/** @type {import('./$types').PageLoad} */

import Papa from 'papaparse'


export const load = ({ fetch }) => {
    const fetchAirports_json = async () => {
        const res = await fetch('airports.json')
        const data = await res.json()
        // console.log(data)
        return data
    }
    const fetchAirports_csv = async () => {
    const res2 = await fetch('airports.csv', {
        headers: {
            'Content-Type': 'text/csv'
                }})
    let csv_data2 = await res2.text()
    let csv_parsed2 = Papa.parse(csv_data2, {header: true})
    // let airports_csv = csv_parsed2.data.slice(0,5) // fetches on
    // console.log(csv_parsed2)
    const airports_csv = csv_parsed2
    return airports_csv.data 
            }

    return {
        airports_json: fetchAirports_json(),
        airports_csv: fetchAirports_csv()
    }
  }

