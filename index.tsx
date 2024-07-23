import { View, StyleSheet, Dimensions, Animated, Text } from "react-native";
import React, { useRef } from "react";
const { width } = Dimensions.get("screen");
const itemWidth = width * 0.9;
const itemHeight = itemWidth * 1.5;

export default function Slider(props: any) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.FlatList
        data={props.data}
        renderItem={({ item, index }: any) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const translateX = scrollY.interpolate({
            inputRange,
            outputRange: [-width * 0.8, 0, width * 0.8],
          });
          return (
            <View style={[style.itemContainer, props.style]}>
              <View
                style={[
                  style.shadowContainer,
                  { height: props.height ? props.height : itemHeight },
                ]}
              >
                <View
                  style={[
                    style.itemInnerContainer,
                    { width: props.width ? props.width : itemWidth },
                  ]}
                >
                  <Animated.Image
                    source={item.image}
                    style={[
                      {
                        transform: [{ translateX }],
                        width: "100%",
                        height: "100%",
                        resizeMode: props.imgresizeMode,
                      },
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  itemContainer: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
  itemInnerContainer: {
    width: itemWidth,
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 5,
  },
  shadowContainer: {
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 20,
    padding: 7,
    backgroundColor: "white",
    elevation: 10,
    borderRadius: 10,
  },
});
