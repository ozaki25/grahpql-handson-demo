import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PokemonList from '../components/PokemonList';

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
      </div>
    </BrowserRouter>
  );
}

export default Router;
