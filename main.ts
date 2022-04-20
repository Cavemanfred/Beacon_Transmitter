basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, 512)
    pins.analogSetPeriod(AnalogPin.P0, 6)
    led.plot(2, 2)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P0, 0)
    led.unplot(2, 2)
    basic.pause(500)
})
