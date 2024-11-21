import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const LogoutIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G
      stroke={props.color || '#A0A3B1'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}>
      <Path d="M7.818 12.004h14.635M18.969 15.488l3.484-3.484-3.484-3.485M15.484 16.181v4.181a1.335 1.335 0 0 1-1.268 1.394H2.813a1.335 1.335 0 0 1-1.267-1.393V3.637a1.334 1.334 0 0 1 1.267-1.394h11.403a1.335 1.335 0 0 1 1.268 1.394v4.18" />
    </G>
  </Svg>
);
export default LogoutIcon;
