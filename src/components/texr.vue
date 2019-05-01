<template>
    <div >
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <div>dddd</div>
        <input v-on:input="de"/>
    </div>
</template>

<script>
    export default {
        name: "getLeft",
        methods: {
            goOther: function () {
                this.$router.push({name: 'home', params: {id: '1'}})
            },
            de:function (event) {
                console.log(event)
            }
        },
        data() {
            return {}
        },
        mounted() {
            console.log(this.$route.params.id);
        }
        // props: {
        //     id:Number
        // },
    }
</script>

<style scoped>

</style>