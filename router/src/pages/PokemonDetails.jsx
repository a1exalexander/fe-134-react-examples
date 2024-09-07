import { useLoaderData, useNavigate } from "react-router-dom";
import { pokemonApiService } from "../services/PokemonApiService";

export const loader = async ({ params }) => {
  const [pokemon, species] = await Promise.all([
    pokemonApiService.getPokemonByName(params.pokemonSlug),
    pokemonApiService.getPokemonSpecies(params.pokemonSlug),
  ]);
  return { pokemon, species };
};

export const PokemonDetails = () => {
  const { pokemon, species } = useLoaderData();
  const navigate = useNavigate();

  const titleJa = species.names.find(
    ({ language }) => language.name === "ja"
  )?.name;
  const titleJaHrkt = species.names.find(
    ({ language }) => language.name === "ja-Hrkt"
  )?.name;
  const title = titleJa || titleJaHrkt || pokemon.name;

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="tag is-absolute"
      >
        Go to list
        <span className="delete is-small"></span>
      </button>
      <div
        style={{ backgroundColor: species.color.name }}
        className="section full-height is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
      >
        <h1 className="is-title has-text-black">{title}</h1>
        <img
          className="image is-square"
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon}
        />
      </div>
    </>
  );
};
