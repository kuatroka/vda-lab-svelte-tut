// /** @type {import('../$types').PageLoad} */


export async function load({ fetch, params }) {
	const res = await fetch('https://raw.githubusercontent.com/domoritz/maps/master/data/iris.json')
    let flowers = await res.json()
    
    flowers.forEach((d,i) => { d.id = i });
    // console.log(flowers)
    flowers = flowers.filter(d => d.id == params.slug)[0];
    console.log(flowers);

    return { flowers };
}

