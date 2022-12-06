import { useState, Fragment, useEffect } from "react";
import axios from "axios";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FunnelIcon, MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import Results from "components/Results";

import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "components/firebase";

const listPlatforms = [
  { name: "PC", value: 4 },
  { name: "PlayStation 5", value: 187 },
  { name: "PlayStation 4", value: 18 },
  { name: "Xbox", value: 186 },
  { name: "Xbox One", value: 1 },
];
const filters = [
  {
    id: "genre",
    name: "Genres",
    options: [
      { value: 4, name: "Action", count: 164940 },
      { value: 51, name: "Indie", count: 48097 },
      { value: 3, name: "Adventure", count: 125534 },
      { value: 5, name: "RPG", count: 50235 },
      { value: 10, name: "Strategy", count: 50064 },
      { value: 2, name: "Shooter", count: 57776 },
      { value: 40, name: "Casual", count: 41129 },
      { value: 14, name: "Simulation", count: 62424 },
      { value: 7, name: "Puzzle", count: 93334 },
      { value: 11, name: "Arcade", count: 22515 },
      { value: 83, name: "Platformer", count: 96818 },
      { value: 1, name: "Racing", count: 23184 },
      { value: 59, name: "Massively Multiplayer", count: 3047 },
      { value: 15, name: "Sports", count: 19897 },
      { value: 6, name: "Fighting", count: 11232 },
      { value: 19, name: "Family", count: 5371 },
      { value: 28, name: "Board Games", count: 8216 },
      { value: 34, name: "Educational", count: 14673 },
      { value: 17, name: "Card", count: 4410 },
    ],
  },
];

export default function FilterGames() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login");
  }, [user, loading]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [games, setGames] = useState([]);
  const [totalGames, setTotalGames] = useState(0);
  const [queryParameters, setQueryParameters] = useState({
    page: 1,
    page_size: 9,
    search: "",
    platforms: "",
    genres: "",
    dates: "",
    ordering: "",
  });

  useEffect(() => {
    fetchGames();
    console.log("From useEffect onload");
  }, []);

  const fetchGames = () => {
    const url = "https://api.rawg.io/api/games";
    const key = "13ccf08eedbc418cbe4a4ac4a7dc751b";
    axios
      .get(url, {
        params: {
          page: queryParameters.page,
          page_size: queryParameters.page_size,
          key: key,
          // https://stackoverflow.com/questions/52312919/axios-conditional-parameters
          ...(queryParameters.search ? { search: queryParameters.search } : {}),
          ...(queryParameters.platforms
            ? { platforms: queryParameters.platforms }
            : {}),
          ...(queryParameters.genres ? { genres: queryParameters.genres } : {}),
          ...(queryParameters.dates ? { dates: queryParameters.dates } : {}),
          ...(queryParameters.ordering
            ? { ordering: queryParameters.ordering }
            : {}),
        },
      })
      .then((res) => {
        setGames(res.data.results);
        setTotalGames(res.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const applyFilter = (e) => {
    e.preventDefault();
    fetchGames();
  };

  // total pages
  const totalPages = Math.ceil(totalGames / queryParameters.page_size);

  // next page
  const nextPage = () => {
    setQueryParameters({
      ...queryParameters,
      page: queryParameters.page + 1,
    });
    fetchGames();
  };

  // previous page
  const previousPage = () => {
    setQueryParameters({
      ...queryParameters,
      page: queryParameters.page - 1,
    });
    fetchGames();
  };

  return (
    <div className="bg-gray-900">
      <div>
        {/* filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Platforms</h3>
                    <ul className="px-2 py-3 space-y-1 font-medium text-gray-900">
                      {listPlatforms.map((category) => (
                        <li key={category.name}>
                          <input
                            type="radio"
                            id={category.value}
                            name="category"
                            value={category.value}
                            className="hidden peer"
                            checked={
                              category.value === queryParameters.platforms
                            }
                            onChange={() => {
                              setQueryParameters({
                                ...queryParameters,
                                platforms: category.value,
                              });
                            }}
                            required
                          ></input>
                          <label
                            htmlFor={category.value}
                            className="inline-flex justify-between items-center p-2 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <div className="block">
                              <div className="w-full text-lg font-semibold">
                                {category.name}
                              </div>
                            </div>
                          </label>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure
                        as="div"
                        key={section.id}
                        className="border-t border-gray-200 px-4 py-6"
                      >
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">
                                  {section.name}
                                </span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <PlusIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      onChange={(event) => {
                                        const selectedOptions =
                                          queryParameters.genres
                                            ? queryParameters.genres.split(",")
                                            : [];

                                        if (event.target.checked) {
                                          selectedOptions.push(option.value);
                                        } else {
                                          selectedOptions.splice(
                                            selectedOptions.indexOf(
                                              option.value
                                            ),
                                            1
                                          );
                                        }

                                        setQueryParameters({
                                          ...queryParameters,
                                          genres: selectedOptions.join(","),
                                        });
                                      }}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.name}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                    <div className="w-full p-2">
                      <button
                        onClick={applyFilter}
                        className=" py-3 px-9 w-full text-white font-semibold border border-indigo-700 rounded shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Apply filter
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-white">
              More than 810,000 games to discover
            </h1>

            <div className="flex items-center">
              <div className="ml-4 relative flex-shrink-0">
                <input
                  class="border-2 border-gray-300 bg-white h-8 px-5 pr-14 rounded text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                  onChange={(event) => {
                    setQueryParameters({
                      ...queryParameters,
                      search: event.target.value,
                    });
                  }}
                />
                <button
                  type="submit"
                  class="absolute right-0 top-0 py-2 mr-2 cursor-pointer"
                  onClick={applyFilter}
                >
                  <svg
                    className="text-gray-600 h-4 w-4 fill-current"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <Results gameResults={games} />
            <nav
              className="border-t border-gray-200 flex items-center justify-between sm:px-0"
              aria-label="Pagination"
            >
              <div className="hidden sm:block">
                <p className="text-sm text-white">
                  Showing{" "}
                  <span className="font-medium">
                    {games.length ? games.length : 0}
                  </span>
                  <span className="font-medium"> and {totalGames} results</span>
                </p>
              </div>
              <div className="flex-1 flex justify-between sm:justify-end mt-2">
                <button
                  disabled={queryParameters.page === totalPages}
                  onClick={() => {
                    previousPage();
                  }}
                  className="relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </button>
                <button
                  disabled={queryParameters.page === 10}
                  onClick={() => {
                    nextPage();
                  }}
                  className="ml-3 relative inline-flex items-center px-4 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            </nav>
          </section>
        </main>
      </div>
    </div>
  );
}
