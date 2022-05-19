<template>
	<div class="layout-topbar">
		<router-link to="/" class="layout-topbar-logo">
			<img alt="Logo" :src="darkTheme ? 'images/logo-dark.svg' : 'images/logo-white.svg'" />
			<span>Meals Mania</span>
		</router-link>
		<button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle">
			<i class="pi pi-bars"></i>
		</button>
	</div>
</template>

<script>
export default {
    methods: {
        onMenuToggle(event) {
            this.$emit('menu-toggle', event);
        },
		onTopbarMenuToggle(event) {
            this.$emit('topbar-menu-toggle', event);
        }
    },
	computed: {
		darkTheme() {
			return this.$appState.theme.startsWith('saga');
		}
	}
}
</script>