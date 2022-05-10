const $canvas = document.querySelector('#myCanvas')
const $currentColor = document.querySelector('#currentColor')

const context = $canvas.getContext('2d')

const width = $canvas.width
const height = $canvas.height

context.lineWidth = 5
const mouse = {
    x: 0,
    y: 0,
}
let draw = false

function ChangeMouseSize(size) {
    context.lineWidth = size.value
}

function changeColor(color) {
    $currentColor.style.backgroundColor = color.style.backgroundColor
    context.strokeStyle = $currentColor.style.backgroundColor
}

function Clear() {
    context.clearRect(0, 0, width, height);
}

$canvas.addEventListener("mousedown", function (e) {
    mouse.x = e.pageX - this.offsetLeft
    mouse.y = e.pageY - this.offsetTop
    draw = true
    context.beginPath()
    context.moveTo(mouse.x, mouse.y)
})

$canvas.addEventListener("mousemove", function (e) {
    if (draw === true) {
        mouse.x = e.pageX - this.offsetLeft
        mouse.y = e.pageY - this.offsetTop
        context.lineTo(mouse.x, mouse.y)
        context.stroke()
    }
})

$canvas.addEventListener("mouseup", function (e) {
    mouse.x = e.pageX - this.offsetLeft
    mouse.y = e.pageY - this.offsetTop
    context.lineTo(mouse.x, mouse.y)
    context.stroke()
    context.closePath()
    draw = false
})

