import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const HomeIcon = (props: SvgProps) => (
  <Svg width={23} height={22} fill="none" {...props}>
    <Path
      fill={props.color || '#A0A3B1'}
      d="M20.82 7.506 13.228.819c-1.084-1.084-2.85-1.084-3.89-.045L1.656 7.551A3.932 3.932 0 0 0 .5 10.347v8.955A2.7 2.7 0 0 0 3.198 22h16.134c1.48 0 2.69-1.21 2.69-2.698v-8.955c0-1.057-.413-2.052-1.202-2.841Zm-.591 11.796a.901.901 0 0 1-.897.905H13.65v-5.772a.926.926 0 0 0-.932-.932H9.804a.931.931 0 0 0-.932.932v5.772H3.198a.903.903 0 0 1-.905-.905v-8.955c0-.564.233-1.129.591-1.497l7.682-6.767a.957.957 0 0 1 .681-.287c.27 0 .538.108.753.323l7.592 6.696c.413.412.637.959.637 1.532v8.955Z"
    />
  </Svg>
);
export default memo(HomeIcon);
