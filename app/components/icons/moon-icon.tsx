import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const MoonIcon = (props: SvgProps) => (
  <Svg width={24} height={22} fill="none" {...props}>
    <Path
      fill={props.color || '#A0A3B1'}
      d="M11.976 22C5.646 22 .5 16.853.5 10.533.5 6.03 3.148 1.926 7.253.072a.8.8 0 0 1 .76.053c.229.141.37.388.37.662.133 6.118 5.226 11.105 11.353 11.105.865 0 1.73-.097 2.577-.3a.8.8 0 0 1 .733.194c.194.186.283.45.239.715A11.435 11.435 0 0 1 11.976 22ZM6.874 2.076a9.911 9.911 0 0 0-4.776 8.457c0 5.438 4.431 9.87 9.878 9.87 4.423 0 8.236-2.896 9.463-7.028-.564.08-1.138.115-1.703.115-6.568 0-12.094-5.014-12.862-11.414Z"
    />
  </Svg>
);
export default memo(MoonIcon);
