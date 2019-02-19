let i = 0
let words = 0
let check

setInterval(() => {
  if(i%2 == 0) {
    words = $('#input').val().length
  } else {
    check = $('#input').val().length - words
    if (check >= 5) {
      alert('핵 감지됨')
    }
  }
  ++i
}, 100);