$('#nav-nosotros').on('click', () => {
  if ($('#sub-nosotros').css('display') == 'none')
    $('#sub-nosotros').css('display', 'block')
  else
    $('#sub-nosotros').css('display', 'none')
})

$('#nav-integrantes').on('click', () => {
  if ($('#sub-integrantes').css('display') == 'none')
    $('#sub-integrantes').css('display', 'block')
  else
    $('#sub-integrantes').css('display', 'none')
})

$('#nav-noticias').on('click', () => {
  if ($('#sub-noticias').css('display') == 'none')
    $('#sub-noticias').css('display', 'block')
  else
    $('#sub-noticias').css('display', 'none')
})