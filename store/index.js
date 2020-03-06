import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },

    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },

      addPost(state, post) {
        state.loadedPosts.push(post);
      },

      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },

    actions: {
      async nuxtServerInit(vuexContext, context) {
        try {
          const res = await axios.get(
            "https://nuxt-blog-92d5e.firebaseio.com/posts.json"
          );
          const postsArray = [];
          for (const key in res.data) {
            postsArray.push({ ...res.data[key], id: key });
          }
          vuexContext.commit("setPosts", postsArray);
        } catch (err) {
          return context.error(err);
        }
      },

      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },

      async addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        try {
          const res = await axios.post(
            "https://nuxt-blog-92d5e.firebaseio.com/posts.json",
            createdPost
          );
          vuexContext.commit("addPost", {
            ...createdPost,
            id: res.data.name
          });
        } catch (error) {
          return console.log(error);
        }
      },

      editPost(vuexContext, editedPost) {
        return axios
          .put(
            `https://nuxt-blog-92d5e.firebaseio.com/posts/${editedPost.id}.json`,
            editedPost
          )
          .then(res => {
            vuexContext.commit("editPost", editedPost);
          })
          .catch(err => console.log(err));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
