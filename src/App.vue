<template>
	<div id="app">
		<HeaderComponent/>
		<router-view />
		<FooterComponent/>
	</div>
</template>

<script>
import HeaderComponent from "./components/_Shared/HeaderComponent/HeaderComponent.vue";
import FooterComponent from "./components/_Shared/FooterComponent/FooterComponent.vue";

export default {
	name: "App",
	components: {
		HeaderComponent,
		FooterComponent
	}
};
</script>

<style lang="scss">
	@import '@/assets/styles/index.scss';
</style>
