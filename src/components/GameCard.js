const GameCard = ({ game }) => {
  return (
    <div className="group w-full p-4">
      <div className="p-4 bg-white/80 rounded">
        <div className="relative h-60 w-full mb-4">
          <img
            className="w-full h-full object-cover rounded"
            src={game.background_image}
            alt=""
          />
          <span className="absolute top-0 right-0 py-1 px-2 mt-2 mr-2 bg-gray-700/80 rounded border border-green-500 text-sm font-bold text-green-500">
            {game.ratings_count}
          </span>
        </div>
        <div className="flex mb-6 justify-between items-center">
          <div className="flex flex-col w-full">
            <h3 className="text-md font-medium justify-items-center mb-4">
              {game.name}
            </h3>
            <div className="flex text-xs text-gray-500 space-x-2">
              {game.parent_platforms.slice(0, 3).map((plt) => (
                <span
                  className="inline-block py-1 px-2 rounded bg-gray-500 text-xs text-gray-50"
                  key={plt.platform.id}
                >
                  {plt.platform.name}{" "}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex mb-2 justify-between items-center">
          <h4 className="text-sm font-medium">Released</h4>
          <span className="inline-block py-1 px-2 rounded bg-green-50 text-xs text-green-700">
            {game.released}
          </span>
        </div>
        {game.genres ? (
          <div className="flex mb-2 justify-between items-center">
            <h4 className="text-sm font-medium">Genre</h4>
            <div className=" space-x-2">
              {game.genres.slice(0, 3).map((genre) => (
                <span
                  key={genre.id}
                  className="inline-block py-1 px-2 rounded bg-gray-50 text-xs text-gray-500"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}

        {game.stores ? (
          <div className="flex mb-2 justify-between items-center">
            <h4 className="text-sm font-medium">Store</h4>
            <div className=" space-x-2">
              {game.stores.slice(0, 3).map((store) => (
                <span
                  key={store.id}
                  className="inline-block py-1 px-2 rounded bg-gray-900 text-xs text-white "
                >
                  {store.store.name}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <></>
        )}
        <div className="flex items-ceenter justify-between border-t border-gray-50 pt-4">
          <button className="py-2 px-3 bg-gray-900 hover:bg-gray-800 rounded text-xs text-white transition duration-200">
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
