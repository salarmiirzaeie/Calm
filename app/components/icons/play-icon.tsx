import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PlayIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      fill={props.color || '#3F414E'}
      d="M10.664 4.574 3.006.222C1.892-.409.5.382.5 1.644v8.709c0 1.268 1.392 2.059 2.506 1.422l7.658-4.352a1.632 1.632 0 0 0 0-2.85Z"
    />
  </Svg>
);
export default PlayIcon;
