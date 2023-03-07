radio.setGroup(1)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        radio.sendString("stanga")
    } else if (input.isGesture(Gesture.TiltRight)) {
        radio.sendString("dreapta")
    } else if (input.isGesture(Gesture.LogoDown)) {
        radio.sendString("fata")
    } else if (input.isGesture(Gesture.LogoUp)) {
        radio.sendString("spate")
    }
})
