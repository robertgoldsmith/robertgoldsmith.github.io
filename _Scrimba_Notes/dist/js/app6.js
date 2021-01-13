// Example Grid 

const exampleGrid = document.getElementById('example-grid')
const exampleLayout = []
let exampleNum = 0
for(let i = 0; i < 784; i++){
  exampleLayout.push(exampleNum)
  exampleNum++
}

console.log(exampleLayout)

const createExampleGrid = () => {
  for(let i = 0; i < exampleLayout.length; i++){
    const boxNum = document.createElement('div')
    boxNum.textContent = exampleLayout[i]
    exampleGrid.appendChild(boxNum)
  }
}

createExampleGrid()