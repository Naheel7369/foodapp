import {FC, useContext} from 'react';
import {Image, Text, View, StyleSheet,ScrollView} from 'react-native';
import {MEALS} from '../../assets/Data/dummy-data';
import MealD from '../../assets/Components/MealD';
import List from '../../assets/Components/MealDetail/List';
import Subtitle from '../../assets/Components/MealDetail/Subtitle';
import { useLayoutEffect } from 'react';
import IconButton from '../../assets/Components/IconButton';
import { addFavorite,removeFavorite } from '../../store/redux/favorites';
import { useDispatch, useSelector } from 'react-redux';
interface MD{
  navigation? : any
  route?:any
  
}

const MealDetails: FC<MD> = props => {

// const favoriteMealsCtx = useContext(FavoriteContext);
 const favoriteMealIds= useSelector((state:any)=>
state.favoriteMeals.ids);
 const dispatch = useDispatch();



  const {navigation, route} = props;
  const mealId : number = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

const mealIsFavorite = favoriteMealIds.ids?.includes(mealId)

  function changeFavoriteStatusHandler(){
    if(mealIsFavorite){
      // favoriteMealsCtx?.removeFavorite(mealId)
      dispatch(removeFavorite({id: mealId}));
    }
    else{
      // favoriteMealsCtx?.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight:()=>{
        return<IconButton icon={mealIsFavorite ? 'star' :'star-outline'} color='white'  onPress={changeFavoriteStatusHandler} />
      }
    })
  },[navigation,changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{uri: selectedMeal?.imageUrl}} />
      <Text style={styles.title}>{selectedMeal?.title}</Text>

      <MealD
        duration={selectedMeal?.duration}
        complexity={selectedMeal?.complexity}
        affordability={selectedMeal?.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterCoontainer}>
        <View style={styles.listConatiner}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal?.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetails;
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listConatiner: {
    width: '80%',
  },
  listOuterCoontainer:{
alignItems:'center',
  },
  root:{
    marginBottom:32,
      },
});
