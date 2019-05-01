<template>
    <div>
        <level2List></level2List>
        <level3List></level3List>
    </div>
</template>

<script>
    import level2List from '@/components/secondList/list.vue'
    import level3List from '@/components/thirdList/list.vue'
    export default {
        name: "project",
        components: {
            level2List,
            level3List,
        },
    }
</script>

<style scoped>

</style>