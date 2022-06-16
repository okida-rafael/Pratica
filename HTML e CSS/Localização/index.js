    const res = document.querySelector('div#res')

    function coordenada(){
        navigator.geolocation.getCurrentPosition((location)=>{
        res.innerHTML = `Suas coordenadas são: Latitude:${location.coords.latitude} & Longitude: ${location.coords.longitude}`
        })
    }
