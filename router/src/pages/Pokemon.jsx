import { useLoaderData, defer, Await, NavLink } from "react-router-dom";
import { pokemonApiService } from "../services/PokemonApiService";
import { Suspense } from "react";
import clsx from "clsx";

export const loader = ({ params }) => {
  const pokemon = pokemonApiService.getPokemonByName(params.pokemonSlug);
  return defer({ pokemon });
};

export const Pokemon = () => {
  const { pokemon } = useLoaderData();
  return (
    <div className="is-fit section is-flex is-flex-direction-column is-aligh-items-center is-justify-content-center">
      <Suspense
        fallback={
          <div className="skeleton">
            <h1 className="title is-skeleton">Title</h1>
            <div className="image is-skeleton">Image</div>
          </div>
        }
      >
        <Await
          resolve={pokemon}
          errorElement={
            <div className="notification is-danger">
              Primar lorem ipsum dolor sit amet, consectetur adipiscing elit
              lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus
              quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit
              amet fringilla. Nullam gravida purus diam, et dictum{" "}
              <a>felis venenatis</a> efficitur.
            </div>
          }
        >
          {(data) => {
            return (
              <>
                <h1 className="title is-1 is-capitalized">{data.name}</h1>
                <img
                  className="image is-square"
                  src={data.sprites.other["official-artwork"].front_default}
                  alt={data}
                />
                <NavLink
                  to={`/${data.name}/details`}
                  className={({ isPending }) =>
                    clsx("box button is-warning", {
                      "is-loading": isPending,
                    })
                  }
                >
                  Show more
                </NavLink>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};
