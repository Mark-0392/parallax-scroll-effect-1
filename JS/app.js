const text = document.getElementById('text')
const treeLeft = document.getElementById('tree-left')
const treeRight = document.getElementById('tree-right')
const gateLeft = document.getElementById('gate-left')
const gateRight = document.getElementById('gate-right')

window.addEventListener('scroll', () => {
  let value = window.scrollY
  console.log(value)
  text.style.top = value * 1.5 + 'px'
  treeLeft.style.left = value * -0.5 + 'px'
  treeRight.style.left = value * 0.5 + 'px'
  gateLeft.style.left = value * 0.5 + 'px'
  gateRight.style.left = value * -0.5 + 'px'
})
