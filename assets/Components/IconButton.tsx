import { FC } from "react";
import { ICategory } from "../../constants/interface";
import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
interface IconButtonProps {
    icon: string;
    color: string;
    onPress: () => void;
  }
const IconButton :FC<IconButtonProps> =({onPress,color,icon})=> {
return(
<Pressable onPress={onPress} 
style={({pressed})=> pressed && styles.pressed} >
    <Ionicons name={icon} size={24} color={color}/>
</Pressable>
);
}
export default IconButton;

const styles=StyleSheet.create({
    pressed:{
        opacity:0.7,
    }
})