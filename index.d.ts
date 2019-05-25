declare module "react-native-parallax" {

  import * as React from 'react';
  import {
    StyleProp,
    ImageStyle,
    ViewStyle,
    ImageProps,
    ScrollViewProps
  } from 'react-native';

  export class ScrollView<ScrollViewProps> {
    scrollViewComponent: React.Component
  }

  export class Image<ImageProps> {
    onPress: () => void
    scrollY: Object
    parallaxFactor: Number
    imageStyle: StyleProp<ImageStyle>
    overlayStyle: StyleProp<ViewStyle>
    activeOpacity: Number
  }
}
