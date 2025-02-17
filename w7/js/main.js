let products = {
    name: 'Product 1',
    price: 100,
    inStock: true
}

console.log(products);

let animeProps = {
    targets: '.box',
    translateX: 250,
    rotate: '1turn',
    duration: 800
}

console.log(animeProps);


//example1

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector('.box').addEventListener('mouseenter', () => {
        anime({
            targets: '.box',
            translateX: 250,
            rotate: '1turn',
            duration: 800
        })
    })

    //simplified

    let circle = document.querySelector('.circle');
    circle.addEventListener('mouseenter', () => {
        anime({
            targets: '.circle',
            translateX: 250,
            translateY: 50,
            scale: 1.5,
            duration: 1000,
            easing: 'easeInOutQuad'
        })
    })

    circle.addEventListener('mouseleave', () => {
        anime({
            targets: '.circle',
            translateX: 0,
            translateY: 0,
            scale: 1,
            duration: 500,
            easing: 'easeInOutQuad'
        })
    })



    //chaining-animation flow
    document.querySelector('.box2').addEventListener('click', () => {
        anime({
            targets: '.box2',
            translateX: 250,
            duration: 600,
            easing: 'easeInOutQuad',
            complete: function () {
                anime({
                    targets:'.box2',
                    rotate: '1turn',
                    duration:800,
                    easing: 'easeInOutQuad'
                })
            }
        })
    })

    document.querySelector('.staggered').addEventListener('click', () => {
        anime({
            targets: '.staggered .element',
            translateX: 250,
            duration: 800,
            easing: 'easeInOutQuad',
            delay: anime.stagger(200)
        })
    })


    document.querySelector('.three-d').addEventListener('click', () => {
        anime({
            targets: '.three-d',
            translateX: 250,
            duration: 300,
            easing: 'easeInOutQuad',
            rotateY: '1turn'
        })
    })
})


//google font to svg-------html-----anime.js library---svg----line-drawing-----copy-paste into your anime













