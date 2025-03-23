const api = 'https://www.random.org/integers/'

const randomNumberParams = {
  base: '10',
  num: '1',
  min: '0',
  col: '1',
  rnd: 'new',
  format: 'plain'
}

export async function getRandomNumber (max: number) {
  const params = new URLSearchParams(randomNumberParams)

  params.append('max', max.toString())

  const resp = await fetch(new URL(`${api}?${params.toString()}`))
  const val = await resp.text()

  return parseInt(val, 10)
}
