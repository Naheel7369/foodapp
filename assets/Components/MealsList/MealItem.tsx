import { FC } from "react";
import { Text, View ,Pressable, Image,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealD, { IMealId } from "../MealD";


const MealItem : FC<IMealId> = ({id,title,imageUrl,duration,complexity,affordability}) => {
    const navigation:any=useNavigation();

function selectMealItemHandler(){
    
        navigation.navigate('MealDetails',{
            mealId:id
        });


}
    return( 
    <View style={styles.mealitem}>
        <Pressable android_ripple={{color:'#ccc'}}
        style={({pressed})=>(pressed 
            ? styles.buttonPressed:null)}
            onPress={selectMealItemHandler}
            
            >
            <View style={styles.innerContainer}>
            <View>
                <Image source={{uri:imageUrl}} style={styles.image} />
        <Text style = {styles.title}>{title}</Text>
            </View>
           <MealD duration={duration} affordability={affordability} complexity={complexity}/>
            </View>
        </Pressable>
    </View>
    );
}

export default MealItem;
const styles=StyleSheet.create({
    mealitem:{
    margin:16,
    borderRadius:8,
    overflow:'hidden',
    backgroundColor:'white',
    elevation:4,
    },
image:{
    width:'100%',
    height:200,
    
},
title:{
    fontWeight:'bold',
    textAlign:'center',
    fontSize:18,
    margin:8,
    color:'black',
},

innerContainer:{
borderRadius:8,
overflow:"hidden",
},
buttonPressed:{
    opacity:0.5,
}
});