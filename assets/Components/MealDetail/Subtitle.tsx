import { FC } from "react";
import { ICategory } from "../../../constants/interface";
import { StyleSheet, Text, View } from "react-native";

function Subtitle({children} : any) {
    return(
      <View style={styles.subtitileContainer}>
      <Text style={styles.subtitile}>{children}</Text>
      </View>
    );
  };
  
  export default Subtitle;
  const styles = StyleSheet.create({
    subtitile:{
      color:'#e2b497',
      fontSize:18,
      fontWeight:'bold',
      
      padding:6,
      textAlign:'center',
      
      },
      subtitileContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        padding:6,
        marginHorizontal:12,
       
    },
      
  })