import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListRenderItemInfo,
  Pressable,
} from 'react-native';

type GOAL_ITEM_PROPS = {
  itemData: ListRenderItemInfo<any>;
  deleteItem: (key: string) => void;
};

function GoalItem(props: GOAL_ITEM_PROPS) {
  const {itemData, deleteItem} = props;
  return (
    <View style={styles.goalItemContainer}>
      <Pressable
        android_ripple={{color: '#210664'}}
        onPress={() => deleteItem(itemData.item.key)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalItem}>{itemData.item?.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalItem: {
    padding: 8,
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
