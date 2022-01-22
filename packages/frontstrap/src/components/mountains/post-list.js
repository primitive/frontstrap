import { loadable } from "frontity";
// Codesplit the list component
export default loadable(() => import("@primitive/rocks/postlist/list"));
