input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.pause(1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    basic.pause(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    basic.pause(1)
})
images.createBigImage(`
    . . # # # # # # . .
    . # . # # # # . # .
    # # # # # # # # # #
    # . # . . . # . # .
    . # . # . . . # . #
    `).scrollImage(1, 400)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.pause(100)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1)
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(1)
    }
})
