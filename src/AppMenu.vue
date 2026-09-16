<template>
    <nav class="layout-menu-container" aria-label="Main Navigation">
        <AppSubmenu 
            :items="model" 
            class="layout-menu" 
            :root="true" 
            @menuitem-click="emit('menuitem-click', $event)" 
        />
    </nav>
</template>

<script setup>
import AppSubmenu from './AppSubmenu.vue';

defineProps({
    model: {
        type: Array,
        default: () => []
    }
});

const emit = defineEmits(['menuitem-click']);
</script>