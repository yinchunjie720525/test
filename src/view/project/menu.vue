<template>
    <div>
        <level2List></level2List>
        <level3List></level3List>
    </div>
</template>

<script>
    import level2List from '@/components/secondList/projectList.vue'
    import level3List from '@/components/thirdList/list.vue'
    export default {
        name: "projectMenu",
        components: {
            level2List,
            level3List,
        },
    }
</script>

<style scoped>

</style>