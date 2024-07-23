
## Animation Image carousel
## Usage/Examples

```javascript
import {View, Text} from 'react-native';
import React from 'react';
import carousel from 'react-native-animation-image-carousel'

export default function Home() {
const data = [
  {
    id: 1,
    image: require('../assest/Img/1.jpg'),
  },
  {
    id: 2,
    image: require('../assest/Img/2.jpg'),
  },
  {
    id: 3,
    image: require('../assest/Img/3.jpg'),
  },
  {
    id: 4,
    image: require('../assest/Img/4.jpg'),
  },
];
  return (
    <>
      <carousel
        data={data}
        height={300}
        width={300}
        imgresizeMode={'cover'}
        style={{
          marginTop: 20,
        }}
      />
    </>
  );
}

```

