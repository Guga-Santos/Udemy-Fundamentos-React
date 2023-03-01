function gerarNumeroNaocontido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
  return array.includes(aleatorio)
  ? gerarNumeroNaocontido(min, max, array) 
  : aleatorio
}

function gerarNumeros(qt) {
  const numeros = Array(qt)
  .fill(0)
  .reduce((nums) => {
    const newNum = gerarNumeroNaocontido(1, 60, nums)
    return [...nums, newNum ]
  }, [])

  return numeros.sort((a, b) => a - b)

}

console.log(gerarNumeros(6))