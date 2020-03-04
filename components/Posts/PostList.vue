<template>
  <section class="featured-posts">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg"
      title="Hello There!"
      previewText="This is first post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg"
      title="Hello There TWO!"
      previewText="This is SECOND post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://c4.wallpaperflare.com/wallpaper/193/203/796/futuristic-tech-geometry-cyan-wallpaper-preview.jpg"
      title="Hello There 333!"
      previewText="This is ThirD post!"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
