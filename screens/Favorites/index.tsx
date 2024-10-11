import {FC, useContext} from 'react';
import MealList from '../../assets/Components/MealsList/MealList';
// import { FavoriteContext } from "../../store/context/favorites-context";
import {MEALS} from '../../assets/Data/dummy-data';
import {useSelector} from 'react-redux';

interface IFav {}

const Favorites: FC<IFav> = ({}) => {
  // const favoriteMealsCtx:any = useContext(FavoriteContext);
  const favoriteMealsCtx = useSelector((state: any) => state.favoriteMeals.ids);
  console.log('favoriteMealsCtx ==>', favoriteMealsCtx);

  const favoriteMeals = MEALS.filter(meal =>
    favoriteMealsCtx.filter(val => val == meal?.id),
  );
  //   const favoriteMeals = [];
  // return <></>;
  return <MealList items={favoriteMeals} />;
};
export default Favorites;
