import { ReactNode } from "react"
import { StyleProp, TextStyle } from "react-native"


export interface ICategory {
    title? : string,
    color? : string,
    onPress? : () => void,
    navigation? : any
    route?:any
    imageUrl?:string,
   
    id?:string,
    
    data?:any,
    children?:ReactNode,
    dataPoint?:any
    icon?: React.ReactNode | string,
    name?:any,
    size?:any,
    ids?:any[],
    
    addFavorite:(id:number)=>void,
    removeFavorite:(id:number)=>void,
    // favoriteMealsCtx?:any,
}