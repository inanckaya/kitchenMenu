let korea = document.querySelectorAll('[data-category="korea"]'),
    japan = document.querySelectorAll('[data-category="japan"]'),
    china = document.querySelectorAll('[data-category="china"]')

let allBtn = document.querySelector('[data-id="all"]'),
    koreaBtn = document.querySelector('[data-id="korea"]'),
    japanBtn = document.querySelector('[data-id="japan"]'),
    chinaBtn = document.querySelector('[data-id="china"]')

allBtn.addEventListener('click', function () {
  koreaContent()
  japanContent()
  chinaContent()
})
koreaBtn.addEventListener('click', function () {
  koreaContent()
  japanContent(false)
  chinaContent(false)
})

japanBtn.addEventListener('click', function () {
  koreaContent(false)
  japanContent()
  chinaContent(false)
})

chinaBtn.addEventListener('click', function () {
  koreaContent(false)
  japanContent(false)
  chinaContent()
})


function koreaContent(show = true) {
  korea.forEach(function (e) {
    if (show) {
      e.classList.remove('d-none')
    } else {
      e.classList.add('d-none')
    }
  })
}

function japanContent(show = true) {
  japan.forEach(function (e) {
    if (show) {
      e.classList.remove('d-none')
    } else {
      e.classList.add('d-none')
    }
  })
}

function chinaContent(show = true) {
  china.forEach(function (e) {
    if (show) {
      e.classList.remove('d-none')
    } else {
      e.classList.add('d-none')
    }
  })
}