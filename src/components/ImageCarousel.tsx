// ImageCarousel.tsx

import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const renderItem = ({ item }: { item: string }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={{ uri: item }} style={styles.carouselImage} />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={images}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        sliderWidth={500}
        itemWidth={500}
        layout="default"
        loop
        autoplay
      />
      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          position: "absolute",
          bottom: 0,
          alignSelf: "center",
        }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: "rgba(255, 255, 255, 0.92)",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width: 500,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    flex: 1,
  },
});

export default ImageCarousel;
