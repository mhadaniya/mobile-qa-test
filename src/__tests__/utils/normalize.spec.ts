import { normalize } from '@utils/normalize'

describe('normalize function', () => {
  it('normalizes font size based on screen width by default', () => {
    const fontSize = 20
    const normalizedSize = normalize(fontSize)
    expect(normalizedSize).toBeGreaterThan(0)
  })

  it('normalizes font size based on screen height when isBasedHeight is set to true', () => {
    const fontSize = 20
    const normalizedSize = normalize(fontSize, true)
    expect(normalizedSize).toBeGreaterThan(0)
  })
})
