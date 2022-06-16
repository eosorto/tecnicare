document.addEventListener('DOMContentLoaded', e => {
    fetchdata()
})
const fetchdata = async() => {
    try {
        const res = await fetch('./api2.json')
        const data = await res.json()
        console.log(data)
        pintar(data)
    } catch (error) {
        console.log(error)
    }
}

const cotenedorP = document.querySelector('.carrito')

function pintar(data) {
    const templatecard = document.querySelector('.templateCard').content
    const fragment = document.createDocumentFragment()

    data.forEach(producto => {
        templatecard.querySelector('.imgcardc').setAttribute('src', producto.thumbnailUrl)
        templatecard.querySelector('.span1').textContent = producto.title
        templatecard.querySelector('.precioU').textContent = producto.precio
        templatecard.querySelector('.especificaciones').textContent = producto.especificaciones





        const clone = templatecard.cloneNode(true)
        fragment.appendChild(clone)
    });

    cotenedorP.appendChild(fragment)
}