import {createContext, FC, useState} from 'react';
import {ICategory} from '../../constants/interface';

export const FavoriteContext = createContext<ICategory>({
  ids: [],
  addFavorite: (id: number) => {},
  removeFavorite: (id: number) => {},
});

const FavoritesContextProvider: FC<ICategory> = ({children}) => {
  const [favoriteMealIds, setfavoriteMealIds] = useState<number[]>([]);
  function addFavorite(id: number) {
    setfavoriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavorite(id: number) {
    setfavoriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};
export default FavoritesContextProvider;
