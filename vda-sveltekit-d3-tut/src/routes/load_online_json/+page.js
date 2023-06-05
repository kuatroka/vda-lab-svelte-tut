// fetch data from internet/ online JSON file
/** @type {import('../$types').PageLoad} */

export async function load({ fetch }) {
	const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    const flowers = await res.json()
    
    flowers.forEach((d,i) => {
        d.id = i, d.species = "Iris " + d.species        
    });
    // console.log(flowers)
	return { flowers }
}

