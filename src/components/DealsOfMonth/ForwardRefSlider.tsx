import { forwardRef } from "react";
import Slider from "react-slick";

export const ForwardedSlider = forwardRef((props: any, ref) => (
  <Slider className="w-full h-52" ref={ref} {...props}>
    {props.children}
  </Slider>
));
