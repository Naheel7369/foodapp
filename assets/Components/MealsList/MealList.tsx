import { FlatList, View,StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { FC } from "react";
interface IML{
    items?:any,
}

const  MealList:FC<IML>=({items})=>{
    function renderMealItem(itemData:any){
        const mealitemprops={
            id:itemData.item.id,
        title:itemData.item.title,
        imageUrl:itemData.item.imageUrl,
        duration:itemData.item.duration,
        complexity:itemData.item.complexity,
        affordability:itemData.item.affordability,
        };
          return( <MealItem{...mealitemprops} />
          );
        }
    
        return (
            <View style={styles.container}>
               <FlatList data={items} keyExtractor={(item)=>item.id}renderItem={renderMealItem}/>
            </View>
        );
    
}

export default MealList;
const styles=StyleSheet.create({
    container:{
       flex:1,
       padding:16,
    }
   
   
   });