const URL = 'https://dummyjson.com/products'

async function chamarAPI() {
    const res = await fetch(URL)
   

    if (res.status === 200){ 
        const obj = await res.json()
        console.log(obj) 
        const conteiner = document.getElementById('local')

        obj.products.forEach(aray => {
            const div = document.createElement('div')
            div.innerHTML = `<br>id: ${aray.id}<br> titulo: ${aray.title}`
            conteiner.appendChild(div)
        });
    }
}

chamarAPI()