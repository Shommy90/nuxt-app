import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
              {
                id: "1",
                title: "First Post",
                previewText: "This is first post!",
                thumbnail:
                  "https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg"
              },
              {
                id: "2",
                title: "Second Post",
                previewText: "This is second post!",
                thumbnail:
                  "https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg"
              }
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
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
