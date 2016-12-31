import {store} from  "../../index";
import {fetchPost} from "../../posts_repo";

export function onPostPageShow(state) {
    store.dispatch(fetchPost(state.params.id));
}
