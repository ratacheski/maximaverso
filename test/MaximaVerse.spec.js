import { mount } from '@vue/test-utils'
import MaximaVerse from '~/components/MaximaVerse'

describe('MaximaVerse', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MaximaVerse)
    expect(wrapper.vm).toBeTruthy()
  })
})
