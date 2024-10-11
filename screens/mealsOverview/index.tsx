import { FC} from "react"
import { MEALS,CATEGORIES } from "../../assets/Data/dummy-data"
import { useLayoutEffect } from "react";
import MealList from "../../assets/Components/MealsList/MealList";
 export interface IMO{
    navigation? : any
    route?:any
}


const MealsOverview : FC<IMO> = ({route,navigation}) => {
    const catId= route.params.categoryId; 

    const displayedMeals=MEALS.filter((MealItem)=>{
        return MealItem.categoryIds.indexOf(catId)>=0;
    });
    useLayoutEffect(()=>{

  
    const categoryTitle=CATEGORIES.find((category)=>category.id===catId)?.title;
    navigation.setOptions({
        title: categoryTitle
    });
},[catId,navigation])  
return <MealList items={displayedMeals} />
}
export default MealsOverview;