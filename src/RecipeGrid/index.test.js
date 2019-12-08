import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import { RecipeGrid } from '.';

describe('RecipeCard', () => {
  const results = [{"title":"Tomato and olive focaccia (TM)","body":"\n\u003Cp\u003E PREPARATION TIME :\u0026nbsp;20\u003Cbr\u003ECOOKING TIME :\u0026nbsp;45\u003Cbr\u003E SERVES :\u0026nbsp;TODO \u0026lt;\u003Cbr\u003EDIFFICULTY: EASY\u003Cbr\u003E\u003C\/p\u003E\n\n\n\n\u003Cp\u003E Add the water and the flour to the bowl 30 sec \/ Speed 5.,Leave for 1 hour to autolyse.,Add the yeast and salt to separate sides of the bowl 10 seconds \/ Speed 7.,Then 2 minutes \/ Knead.,Remove the dough from the bowl and form a ball.,Place the dough into a bowl and pour olive oil over the dough to make sure it is well coated.,Cover and leave to rest overnight in the fridge.,The next day, remove from the fridge and bring to room temperature.,Pour enough olive oil to cover the base of a roasting pan about 20 x 30cm.,Put the dough in the centre of the pan and let it rest, covered, for 30 minutes.,Turn the dough in the oil (it must be nice and oily) and spread it with the tip of your fingers from the centre.,Sprinkle with tomatoes pieces or cherry tomatoes, cut in half and push well into the dough with the olives.,Sprinkle with oregano, salt and more oil.,Allow to rest until doubled in size.,Cook on the bottom rack of a preheated oven for 25 minutes at 200\u00b0 C (400\u00b0 F - gas 6), [fan oven 180\u00b0 C],Allow to cool on a wire rack. \u003C\/p\u003E\n","field_images":"\/sites\/default\/files\/styles\/medium\/public\/2019-10\/542904-pxhere.jpg?itok=kKS71aFe, \/sites\/default\/files\/styles\/medium\/public\/2019-10\/vigo%20the%20cat%20wallpaper.jpg?itok=C7xZGmBE","view_node":"\/node\/8","field_ingredients":"ingredient 1, ingredient 2, ingredient 3, ingredient 4","field_summary":"baked flatbread type dish that is easy for even terrible cooks to make (now with 15% less housefire)\u003Cbr \/\u003E\r\n"},{"title":"Majorcan vegetable bake","body":"\n\u003Cp\u003E PREPARATION TIME :\u00a015\u003Cbr\u003E  COOKING TIME :\u00a025\u003Cbr\u003E SERVES :\u00a0TODO \u0026lt;\u003Cbr\u003E DIFFICULTY :\u00a0EASY\u003C\/p\u003E\n\n\n\n\u003Cp\u003E Add 1.5 tablespoons of the oil to a pan and sizzle the garlic for a minute and then add the tomatoes, oregano, season and simmer for 10 minutes to reduce a little.,Toss the aubergine, pepper and onion in the remaining oil, season and arrange in a baking tray and oven roast for 10 minutes.,Remove from the oven and arrange the potatoes and vegetables in layers.,Pour over the tomato sauce, add a grind of black pepper and a glug of olive oil.,Cover with tin foil and bake for 1 hour, removing the tin-foil half way through.\u003Cbr\u003E\u003C\/p\u003E\n","field_images":"\/sites\/default\/files\/styles\/medium\/public\/2019-10\/img_9212-683x1024.jpg?itok=yDqHlTFF","view_node":"\/node\/7","field_ingredients":"400g can peeled plum tomatoes - chopped, 1 tablespoon fresh oregano or marjoram - chopped, 3 tablespoon olive oil plus a little more to dress the dish with, 6 fat Cloves of garlic (or to taste), half peeled and crushed, the remaining half peeled and roughly chopped, 1 aubergine, 1 sweet bell pepper of any colour, 1 large onion, peeled and sliced, 650g potatoes, sea salt and freshly ground black pepper","field_summary":""}]
  it('renders without crashing', () => {
    const wrapper = shallow(<RecipeGrid results={results}/>)
    expect(wrapper).toBeDefined()
  })

  test('has a valid snapshot', () => {
    const component = renderer.create(
      <RecipeGrid results={results}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('results are null', () => {
    const noResults = null
    const component = shallow(
      <RecipeGrid results={noResults}/>
    );
    expect(component.find('h1').html()).toEqual('<h1>Loading</h1>')
  });
})