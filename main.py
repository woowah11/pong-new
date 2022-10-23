def on_button_pressed_a():
    global left_pixel, right_pixel
    led.unplot(left_pixel, 4)
    led.unplot(right_pixel, 4)
    left_pixel += -1
    right_pixel += -1
    if left_pixel < 0:
        left_pixel = 0
        right_pixel = 1
    led.plot(left_pixel, 4)
    led.plot(right_pixel, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    led.plot(left_pixel, 4)
    led.plot(right_pixel, 4)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global left_pixel, right_pixel
    led.unplot(left_pixel, 4)
    led.unplot(right_pixel, 4)
    left_pixel += 1
    right_pixel += 1
    if right_pixel > 4:
        left_pixel = 3
        right_pixel = 4
    led.plot(left_pixel, 4)
    led.plot(right_pixel, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

left_pixel = 0
right_pixel = 0
y_pos = 4
right_pixel = 2
left_pixel = 1