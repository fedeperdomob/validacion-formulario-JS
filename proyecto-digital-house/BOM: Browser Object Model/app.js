
console.log(window); // BOM: Brower Object Model

/* const clickMe = () => {
    const height = window.innerHeight
    const width = window.innerWidth

    console.log('height: ', height, 'width: ', width)
}
*/

/* const clickMe = () => {
    open('https://www.digitalhouse.com/ar', 'Digital House')

    
*/
const historyBack = () => history.back()
const historyForward = () => history.forward()

document.getElementById('screenh').innerHTML = screen.height + 'px'
document.getElementById('screenw').innerHTML = screen.width + 'px'
document.getElementById('screenc').innerHTML = screen.colorDepth + 'bits'

document.getElementById('url').innerHTML = location.href 
document.getElementById('btn').addEventListener('click', historyBack)
document.getElementById('btn2').addEventListener('click', historyForward)

document.getElementById('cookies').innerHTML = navigator.cookieEnabled ? 'Si' : 'No'


