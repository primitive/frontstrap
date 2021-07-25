import { loadable } from "frontity";
// Codesplit the timelines component
export default loadable(() => import("rocks/timeline/cpt-subtimeline"));
