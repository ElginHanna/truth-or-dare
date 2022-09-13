input.onButtonPressed(Button.A, function () {
    t_or_d = randint(0, 1)
    if (t_or_d == 1) {
        basic.showString("Dare!")
    } else {
        basic.showString("Truth!")
    }
})
input.onButtonPressed(Button.B, function () {
    direction = randint(0, 3)
    if (direction == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (direction == 1) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else {
            if (direction == 2) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # . # . #
                    . # # # .
                    . . # . .
                    `)
            } else {
                if (direction == 3) {
                    basic.showLeds(`
                        . . # . .
                        . # . . .
                        # # # # #
                        . # . . .
                        . . # . .
                        `)
                }
            }
        }
    }
})
let direction = 0
let t_or_d = 0
basic.showString("Truth or dare")
basic.forever(function () {
	
})
