import list from '@containers/Jobs/config'

describe('config', () => {
  it('should be in correct format', () =>{
    list.forEach(element => {
      expect(element).toHaveProperty('link')
      expect(element).toHaveProperty('title')
      expect(typeof element.link).toBe('string')
      expect(typeof element.title).toBe('string')
    })
  })
})