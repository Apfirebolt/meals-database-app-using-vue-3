<template>
    <li 
        :class="[
            item.class,
            {
                'layout-menuitem-category': root,
                'active-menuitem': isActive && !item.to && !item.disabled
            }
        ]" 
        role="none"
    >
        <!-- Root Header / Category Label -->
        <template v-if="root">
            <div class="layout-menuitem-root-text">{{ item.label }}</div>
            <AppSubmenu 
                v-if="hasSubmenu" 
                :items="item.items" 
                @menuitem-click="emit('menuitem-click', $event)" 
            />
        </template>

        <!-- Standard Interactive Item -->
        <template v-else>
            <component
                :is="item.to ? 'router-link' : 'a'"
                :[toAttribute]="item.to"
                :[hrefAttribute]="!item.to ? (item.url || '#') : null"
                :target="item.target"
                :style="item.style"
                :class="[
                    'p-ripple', 
                    { 'p-disabled': item.disabled }
                ]"
                role="menuitem"
                v-ripple
                @click="handleClick"
            >
                <i v-if="item.icon" :class="item.icon" />
                <span>{{ item.label }}</span>
                <i v-if="hasSubmenu" class="pi pi-fw pi-angle-down menuitem-toggle-icon" />
                <span v-if="item.badge" class="menuitem-badge">{{ item.badge }}</span>
            </component>

            <!-- Collapsible Submenu -->
            <transition name="layout-submenu-wrapper">
                <AppSubmenu 
                    v-show="isActive" 
                    v-if="hasSubmenu" 
                    :items="item.items" 
                    @menuitem-click="emit('menuitem-click', $event)" 
                />
            </transition>
        </template>
    </li>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppSubmenu from './AppSubmenu.vue';

const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    root: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['menuitem-click']);

const isActive = ref(false);

const hasSubmenu = computed(() => {
    return Array.isArray(props.item.items) && props.item.items.length > 0;
});

const toAttribute = computed(() => (props.item.to ? 'to' : null));
const hrefAttribute = computed(() => (!props.item.to ? 'href' : null));

const handleClick = (event) => {
    if (props.item.disabled) {
        event.preventDefault();
        return;
    }

    if (!props.item.to && !props.item.url) {
        event.preventDefault();
    }

    if (props.item.command) {
        props.item.command({ originalEvent: event, item: props.item });
    }

    if (hasSubmenu.value) {
        isActive.value = !isActive.value;
    }

    emit('menuitem-click', {
        originalEvent: event,
        item: props.item
    });
};
</script>