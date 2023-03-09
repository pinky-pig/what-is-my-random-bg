import '../../../packages/random-bg/src'

const initialData = [
  { path: 'polygon(28% 42%,16% 71%,21% 25%,31% 26%,9% 13%,9% 40%,23% 91%,6% 90%,4% 6%,12% 67%)', color: '#dab6c4' },
  { path: 'polygon(65% 17%,50% 35%,47% 79%,62% 63%,53% 91%,35% 41%)', color: '#7b886f' },
  { path: 'polygon(67% 36%,88% 79%,75% 37%,91% 23%,81% 29%,79% 40%,78% 16%,96% 47%,74% 63%)', color: '#b4dc7f' },
]

let isRerenderFlag = 0
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>

    <h1>Vite + Vanilla</h1>
    <button id="Redraw">
      Redraw
    </button>

    <random-bg 
      rerender='${isRerenderFlag}'
      initial='${initialData}'
     />
  </div>
`

const redrawBtn = document.getElementById('Redraw') as HTMLElement
redrawBtn.onclick = () => {
  document.getElementsByTagName('random-bg')[0].setAttribute('rerender', `${isRerenderFlag++}`)
}
