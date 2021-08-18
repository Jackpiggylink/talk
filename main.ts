input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 5; index++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
