document.addEventListener('DOMContentLoaded', function(){
    let linkSobre = document.querySelector('#abrir')

    linkSobre.addEventListener('click', function(){
        window.api.send('abrir-link-secundaria')
    })
})