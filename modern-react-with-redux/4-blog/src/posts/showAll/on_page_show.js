import {store} from  "../../index";
import {fetchPosts} from "../../posts_repo";

export function onPageShow() {
    store.dispatch(fetchPosts());
}
