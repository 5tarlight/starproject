let $data = {}

$(() => {
  function init() {
    $data.alert = $('#alert')
    $data.usrni = $('#username')
    $data.pwi = $('#password')
  }

  function hideError() {
    $data.alert.hide()
  }

  function showError(text) {
    $data.alert.text(text)
    $data.alert.show()
  }

  init()
  hideError()

  $data.usrni.on('blur', (e) => {
    if($data.usrni.val().length < 5) {
      showError('ID는 5글자 이상이어야 합니다.')
    } else {
      hideError()
    }
  })

  $data.pwi.on('blur', (e) => {
    if ($data.pwi.val().length < 5) {
      showError('비밀번호는 5글자 이상이어야 합니다.')
    } else {
      hideError()
    }
  })
})