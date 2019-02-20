$(() => {
  let balloon = $('<div class="balloon"></div>').appendTo('body')

  function updatePosition(x, y) {
    balloon.css({left: x + 15, top: y})
  }

  $('.show-balloon').each(() => {
    let element = $(this)
    let text = element.attr('title')
    element.attr('title', '')

    element.hover((e) => {
      balloon.text(text)
      updatePosition(event.pageX, event.pageY)
      balloon.show()
    }, () => {
      balloon.hide()
    })

    element.mousemove((e) => {
      updatePosition(e.pageX, e.pageY)
    })
  })
})