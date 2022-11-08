import {
  deleteDoc,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { db, auth } from "components/firebase";
import { useState, useEffect } from "react";

const GameCard = ({ game }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const checkWhitelist = async () => {
      const q = query(
        collection(db, "wishlist"),
        where("userid", "==", auth.currentUser.uid),
        where("gameid", "==", game.id)
      );
      const docs = await getDocs(q);
      if (docs.docs.length > 0) {
        setIsWishlisted(true);
      } else {
        setIsWishlisted(false);
      }
    };
    checkWhitelist();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToWishlist = async () => {
    // https://firebase.google.com/docs/firestore/query-data/queries
    if (auth.currentUser === null) {
      alert("You must be logged in to add " + game.name + " to your wishlist");
    } else {
      await addDoc(collection(db, "wishlist"), {
        userid: auth.currentUser.uid,
        gameid: game.id,
        game: game.name,
        image: game.background_image,
        rating: game.ratings_count,
        released: game.released,
        platform: game.platforms,
        genre: game.genres,
        store: game.stores,
      });

      // alert with game.name

      setIsWishlisted(true);
      alert(game.name + " has been added to your wishlist");
    }
  };

  const removeFromWishlist = async () => {
    // https://firebase.google.com/docs/firestore/manage-data/delete-data
    const q = query(
      collection(db, "wishlist"),
      where("gameid", "==", game.id),
      where("userid", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref);
    });
    setIsWishlisted(false);
    alert(game.name + " has been removed from your wishlist");
  };

  return (
    <div className="group w-full p-4" key={game.id}>
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
          {isWishlisted ? (
            <button
              className="py-2 px-3 bg-red-900 hover:bg-red-800 rounded text-xs text-white transition duration-200"
              onClick={removeFromWishlist}
            >
              Remove from wishlist
            </button>
          ) : (
            <button
              className="py-2 px-3 bg-gray-900 hover:bg-gray-700 rounded text-xs text-white transition duration-200"
              onClick={addToWishlist}
            >
              Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
