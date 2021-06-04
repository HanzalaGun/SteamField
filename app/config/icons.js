import * as React from "react"
import Svg, { Path } from "react-native-svg"
import colors from "./colors";

export function RightIcon({color=colors.grey,width='100%',height='100%'}) {
    return (
      <Svg width={width} height={height} fill="none" viewBox="0 0 10 21" >
        <Path
          stroke={color}
          d="M1 1L9 9L1 17"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={3}
        />
      </Svg>
    )
  }