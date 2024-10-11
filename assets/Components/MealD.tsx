import { FC } from "react";
import { ICategory } from "../../constants/interface";
import { View,Text,StyleSheet, StyleProp, TextStyle } from "react-native";


 export interface  IMealId{
    duration?:any,
    complexity?:string,
    affordability?:string,
    style?:any,
    textStyle?:StyleProp<TextStyle>
    id?:string
    title? : string,
    imageUrl?:string,
    
}

const MealD: FC<IMealId> = ({duration,complexity,affordability,style,textStyle}) => {
    return(

        <View style={[styles.details,style]}>
        <Text style={[styles.detailItem,textStyle]}>{duration}m</Text>
        <Text style={[styles.detailItem,textStyle]}>{complexity?.toUpperCase()}</Text>
        <Text style={[styles.detailItem,textStyle]}>{affordability?.toUpperCase()}</Text>
    </View>

    );
}

export default MealD;
const styles=StyleSheet.create({
    details:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        padding:8,
        },
        detailItem:{
            marginHorizontal:4,
            fontSize:12,
        },
});