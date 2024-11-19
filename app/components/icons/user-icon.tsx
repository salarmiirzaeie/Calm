import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const UserIcon = (props: SvgProps) => (
  <Svg width={20} height={24} fill="none" {...props}>
    <Path
      fill={props.color || '#A0A3B1'}
      stroke={props.color || '#A0A3B1'}
      strokeWidth={0.2}
      d="M4.823 6.311a5.41 5.41 0 0 0 5.408 5.404 5.417 5.417 0 0 0 5.408-5.41A5.41 5.41 0 0 0 10.23.9a5.412 5.412 0 0 0-5.408 5.411Zm1.643-.007a3.769 3.769 0 0 1 3.765-3.763 3.769 3.769 0 0 1 3.765 3.763 3.774 3.774 0 0 1-3.765 3.763 3.774 3.774 0 0 1-3.765-3.763Z"
    />
    <Path
      fill={props.color || '#A0A3B1'}
      d="M15.254 24H5.207C2.607 24 .5 21.623.5 18.692c0-2.93 2.117-5.307 4.707-5.307h10.047c2.6 0 4.708 2.386 4.708 5.307 0 2.922-2.108 5.308-4.708 5.308ZM5.207 15.365c-1.624 0-2.95 1.495-2.95 3.327 0 1.832 1.326 3.328 2.95 3.328h10.047c1.625 0 2.951-1.496 2.951-3.328 0-1.832-1.326-3.327-2.95-3.327H5.206Z"
    />
  </Svg>
);
export default memo(UserIcon);
