import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact>
          <PokemonList />
        </Route>
        <Route path="/pokemons" exact>
          <PokemonList />
        </Route>
        <Route path="/pokemons/:id" exact>
          <PokemonDetail />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default Router;
