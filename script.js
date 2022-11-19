const cards = document.querySelectorAll('.card')

for (const card of cards) {
  card.addEventListener('mouseenter', function () {
    card.classList.add('zoom')
  })

  card.addEventListener('mouseleave', function () {
    card.classList.remove('zoom')
  })
}
