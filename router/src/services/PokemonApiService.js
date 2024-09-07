import { BaseApiService } from "./BaseApiService";

export class PokemonApiService extends BaseApiService {
  constructor() {
    super("https://pokeapi.co/api/v2");
  }

  async getPokemonList(offset = 0, limit = 20) {
    const pokemonList = await this.request(
      `/pokemon?offset=${offset}&limit=${limit}`
    );
    return pokemonList?.results;
  }

  async getPokemonByName(name) {
    const pokemon = await this.request(`/pokemon/${name}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(pokemon);
      }, 1000);
    });
  }

  async getPokemonSpecies(name) {
    const species = await this.request(`/pokemon-species/${name}`);
    return species;
  }
}

export const pokemonApiService = new PokemonApiService();
