<template>
  <div>
    <h1 v-if="error && error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
    head: {
        title: "Error"
    },

    layout: "error",
    props: {
        error: {
            type: Object,
            default: null
        }
    }
}
</script>
