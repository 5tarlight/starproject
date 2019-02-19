let antihack_i = 0
let antihack_words = 0
let antihack_check = 0

setInterval(() => {
  if(antihack_i%2 == 0) {
    antihack_words = $('#input').val().length
  } else {
    natihack_check = $('#input').val().length - words
    if (antihack_check >= 5) {
      alert('핵 감지됨')
    }
  }
  ++antihack_i
}, 100);