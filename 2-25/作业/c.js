document.querySelector('.intro-content').onclick = function() {
    console.log(1)
    document.querySelector('.side-right').style.display = 'none'
        // document.querySelector('.side-left').style.
    document.querySelector('.side-left').style.width = 25 + '%'
    document.querySelector('.side-left').style.left = 75 + '%'
    document.querySelector('.page-right').style.left = -75 + '%'
}