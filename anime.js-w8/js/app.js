document.addEventListener('DOMContentLoaded', () => {

let menuIcon = document.querySelector('.menu-icon');
let menu = document.getElementById('menu');
let menuLines = document.querySelectorAll('#menu-lines path'); //converts it into an array
let menuItems = document.querySelectorAll('#menu ul li');

menuIcon.addEventListener('click', () => {
    let isMenuVisible = (menu.style.right == '0px');   //true or false

    let moveRightValue; //empty at start
    if (isMenuVisible) {
        moveRightValue = '-250px';
    } else {
        moveRightValue = '0px';
    }


    if (isMenuVisible) {
        anime({
            targets: menuItems, 
            tarnslateX: [0, 250],
            opacity: [1,0],
            easing: 'easeInOutQuad',
            duration:500,
            delay: anime.stagger(50),
            complete: () => {
                anime({
                    targets: '#menu',
                    duration: 500,
                    easing: 'easeInOutQuad',
                    right: moveRightValue
                })
            }
        })
    } else {
        anime({
            targets:'#menu',
            easing: 'easeInOutQuad',
            duration:500,
            right: moveRightValue,
            complete: () => {
                anime({
                    targets: menuItems,
                    targets: menuItems, 
                    tarnslateX: [250, 0],
                    opacity: [0, 1],
                    easing: 'easeInOutQuad',
                    duration:500,
                    delay: anime.stagger(100),
                })
            }
        })
    }

})


document.addEventListener('click', (event) => {
/*  console.log("Event", event);
    console.log("Event target", event.target); */

if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    anime({
        targets: menuItems,
        translateX: 250,
        opacity: 0,
        easing: 'easeInOutQuad',
        duration: 500,
        delay: anime.stagger(50),
        complete: () => {
            anime({
                targets: '#menu',
                right: '-250px',
                esing: 'easeInOutQuad',
                duration: 500
            });
        }
    });
}

})

menuIcon.addEventListener('mouseenter', () => {
    anime({
        targets: menuLines[1],
        opacity: 0,
        duration: 200,
        easing: 'easeInOutQuad'
    })

    anime({
        targets: menuLines[0],
        translateX: 15,
        translateY: 0,
        rotate: 45,
        duration: 200,
        easing: 'easeInOutQuad',
        strokeWidth: 3
    })

    anime({
        targets: menuLines[2],
        translateX: -20,
        translateY: 15,
        rotate: -45,
        duration: 200,
        easing: 'easeInOutQuad',
        strokeWidth: 3
    })
})

menuIcon.addEventListener('mouseleave', () => {
    anime({
        targets: menuLines[1],
        opacity: 1,
        duration: 200,
        easing: 'easeInOutQuad'
    })

    anime({
        targets: menuLines[0],
        translateX: 0,
        translateY: 0,
        rotate: 0,
        duration: 200,
        easing: 'easeInOutQuad',
        strokeWidth: 1
    })

    anime({
        targets: menuLines[2],
        translateX: 0,
        translateY: 0,
        rotate: -0,
        duration: 200,
        easing: 'easeInOutQuad',
        strokeWidth: 1
    })
})




})




// document.addEventListener('DOMContentLoaded', () => {

//     let menuIcon = document.querySelector('.menu-icon');
//     let menu = document.getElementById('menu');
//     let menuLines = document.querySelectorAll('#menu-lines path'); //converts it into an array
    
//     menuIcon.addEventListener('click', () => {
//         let isMenuVisible = (menu.style.right == '0px');   //true or false
    
//         let moveRightValue; //empty at start
//         if (isMenuVisible) {
//             moveRightValue = '-250px';
//         } else {
//             moveRightValue = '0px';
//         }
    
    
//         anime({
//             targets: '#menu',
//             easing: 'easeInOutQuad',
//             duration: 500,
//             right: moveRightValue
//         })
    
//     })
    
    
//     document.addEventListener('click', (event) => {
//     /*     console.log("Event", event);
//         console.log("Event target", event.target); */
    
//     if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
//         anime({
//             targets: '#menu',
//             right: '-250px',
//             esing: 'easeInOutQuad',
//             duration: 500
//         });
//     }
    
//     })
    
//     menuIcon.addEventListener('mouseenter', () => {
//         anime({
//             targets: menuLines[1],
//             opacity: 0,
//             duration: 200,
//             easing: 'easeInOutQuad'
//         })
    
//         anime({
//             targets: menuLines[0],
//             translateX: 15,
//             translateY: 0,
//             rotate: 45,
//             duration: 200,
//             easing: 'easeInOutQuad',
//             strokeWidth: 3
//         })
    
//         anime({
//             targets: menuLines[2],
//             translateX: -20,
//             translateY: 15,
//             rotate: -45,
//             duration: 200,
//             easing: 'easeInOutQuad',
//             strokeWidth: 3
//         })
//     })
    
//     menuIcon.addEventListener('mouseleave', () => {
//         anime({
//             targets: menuLines[1],
//             opacity: 1,
//             duration: 200,
//             easing: 'easeInOutQuad'
//         })
    
//         anime({
//             targets: menuLines[0],
//             translateX: 0,
//             translateY: 0,
//             rotate: 0,
//             duration: 200,
//             easing: 'easeInOutQuad',
//             strokeWidth: 1
//         })
    
//         anime({
//             targets: menuLines[2],
//             translateX: 0,
//             translateY: 0,
//             rotate: -0,
//             duration: 200,
//             easing: 'easeInOutQuad',
//             strokeWidth: 1
//         })
//     })
    
    
//     })