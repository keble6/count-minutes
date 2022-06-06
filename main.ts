led.setBrightness(127)
let count = 0
loops.everyInterval(60000, function () {
    basic.showNumber(count)
    basic.pause(1000)
    count += 1
    basic.clearScreen()
})
