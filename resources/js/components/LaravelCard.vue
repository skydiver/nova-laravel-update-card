<template>
  <CardContainer type="laravel">
    <div class="content-box">
      <div v-if="currentVersion">
        <h1
          v-if="!updateAvailable"
          class="text-3xl text-80 font-light text-center"
        >Awesome, you're using the latest version of Laravel!</h1>
        <h1
          class="text-3xl text-error-message font-light text-center"
          v-else
        >A new version of Laravel is available.</h1>
        <div class="flex flex-wrap">
          <CardVersion
            v-if="updateAvailable"
            :version="currentVersion"
            label="Your version:"
            alignment="right"
          />
          <CardVersion
            v-if="latestVersion"
            :version="latestVersion"
            :full-width="!updateAvailable"
            label="Latest version:"
            alignment="left"
          />
        </div>
      </div>
      <div v-else>
        <h1 class="text-3xl text-80 font-light text-center">Checking for Laravel updates ...</h1>
      </div>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from "./CardContainer";
import CardVersion from "./CardVersion";

export default {
  props: ["card"],
  components: {
    CardContainer,
    CardVersion
  },
  data() {
    return {
      updateAvailable: false,
      currentVersion: null,
      latestVersion: null
    };
  },
  mounted() {
    Nova.request()
      .get("/nova-vendor/skydiver/nova-update-card/laravel-check")
      .then(({ data }) => {
        this.latestVersion = data.latest_version;
        this.currentVersion = data.current_version;
        this.updateAvailable = data.update_available;
      });
  }
};
</script>


<style scoped>
.content-box {
  padding-left: 150px;
}
</style>
