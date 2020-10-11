pins.digital_write_pin(DigitalPin.P0, 1)
basic.pause(100)
pins.digital_write_pin(DigitalPin.P1, 1)
basic.pause(100)

def on_forever():
    while input.button_is_pressed(Button.B):
        pins.digital_write_pin(DigitalPin.P1, 0)
        basic.pause(1)
        pins.digital_write_pin(DigitalPin.P1, 1)
        basic.pause(1)
basic.forever(on_forever)

def on_forever2():
    while input.button_is_pressed(Button.A):
        pins.digital_write_pin(DigitalPin.P0, 0)
        basic.pause(1)
        pins.digital_write_pin(DigitalPin.P0, 1)
        basic.pause(1)
basic.forever(on_forever2)
