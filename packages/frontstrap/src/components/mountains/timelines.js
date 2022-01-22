import { loadable } from "frontity";
// Codesplit the timelines component
export default loadable(() => import("@primitive/rocks/timeline/ct-timelines"));
