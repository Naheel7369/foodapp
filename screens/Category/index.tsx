import {FC} from 'react';
import {ICategory} from '../../constants/interface';
import {View, FlatList} from 'react-native';
import {CATEGORIES} from '../../assets/Data/dummy-data';
import CategoryGridTile from '../../assets/Components/CategoryGridTile';

export interface ICAT{
  title? : string,
  color? : string,
  onPress? : () => void,
  navigation? : any
  route?:any
 
}
const Category: FC<ICAT> = ({navigation}) => {
  function renderCategoryItem(itemData: any) {
    console.log('Item ==>', itemData);

    function navigationHandler () {
     
      navigation.navigate('mealsOverview',{
        categoryId:itemData.item.id,
      });

    }

    return (
      <CategoryGridTile 
        title={itemData.item.title}
        color={itemData?.item?.color}
        key={itemData?.index}
        onPress = {navigationHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default Category;
