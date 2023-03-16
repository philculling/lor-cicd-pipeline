import CharacterGallery from '../components/CharacterGallery'
import { shallow } from 'enzyme'

const setup = () => shallow(<CharacterGallery />)

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

it('CharacterGallery Component Renders Without Error', () => {
    const wrapper = setup()

    const charComponent = findByTestAttr(wrapper, "component-char-gallery")

    expect(charComponent.length).toBe(1)
})

/*
So, I think the way to approach this is as follows:
CharacterGallery.js does not exist in the Components folder, so first thing to do is
to create it.
2. Do the imports: React, characterData and character with correct file paths.
3. Do the normal export.
Write a function called CharacterGallery. In it,
return a div containing something with attribute data-test="component-char-gallery"
That might be enough to pass the test.
Though if time, look at the solution and work out why it's doing more than this, 
and how (in terms of syntax) it is doing more.
*/