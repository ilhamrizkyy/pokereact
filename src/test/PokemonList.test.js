const list = require('../pokemon/PokemonList.js');

test('there is it in Ditto', () => {
    expect('Ditto').toMatch(/it/);
  });

ttest('the pokemon list has Magikarp in it', () => {
    expect(pokemon).toContain('Magikarp');
    expect(new Set(pokemon)).toContain('Magikarp');
  });