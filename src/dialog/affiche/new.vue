<template>
    <Modal v-model="newAffiche_text">
        <p class="newAffiche-p new_title">分类名</p>
        <p class="newAffiche-p new_tishi">新建分类默认排序最后，可在分类列表中调整显示排序</p>
        <p class="newAffiche-p">
            <input type="text" placeholder="请输入名称（限10个字符）" class="newAffiche-input">
        </p>
    </Modal>
</template>

<script>
    export default {
        name:'new',
        data(){
            return{
                newAffiche_text:false
            }
        },
        methods:{
            send_newAffiche:function (data) {
                this.$emit('dialog_newAffiche',data)
            }
        },
        props:{
            newAffiche:Boolean
        },
        watch:{
            'newAffiche':{
                handler:function (val) {
                    if (val){
                        this.newAffiche_text = val;
                        this.send_newAffiche(!val);
                        console.log(this.newAffiche)
                    }
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "new.less";
</style>