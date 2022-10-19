import {Get, Post, Put, PostFile, PutFile} from './Requests'
const PostController = (function () {
    return (module = {
        getPost: async (id) => {
            return await Get(
                `/post/view/${id}`,
            );
        },
    });
})();

export default PostController;