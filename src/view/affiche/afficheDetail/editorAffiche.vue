<template>
    <div class="editor">
        <!--标题-->
        <div class="editor-top">
            <div class="editor-top-title">编辑公告</div>
        </div>
        <!--信息列表-->
        <div class="editor-body">
            <!--标题-->
            <div class="editor-body-attend">
                <div class="attend-title fl"><img src="/image/divisional/icon-star.png" class="attend-title-img"/>标题:</div>
                <div class="attend-input fl"><input type="text" placeholder="2019年清明节放假通知" class="attend-input-content"/></div>
                <div class="clear"></div>
            </div>
            <!--<div class="editor-body-attend">-->
                <!--<div class="attend-title fl"><img src="/image/divisional/icon-star.png" class="attend-title-img"/>时间:</div>-->
                <!--<div class="attend-input fl"><input type="text" class="attend-input-content"/></div>-->
                <!--<div class="clear"></div>-->
            <!--</div>-->
            <!--范围-->
            <div class="editor-body-attend">
                <div class="attend-title fl"><img src="/image/divisional/icon-star.png" class="attend-title-img"/>范围:</div>
                <div class="attend-input fange fl"><input type="text" class="attend-input-content"/></div><!---->
                <div class="clear"></div>
            </div>
            <!--作者-->
            <div class="editor-body-attend">
                <div class="attend-title fl">作者:</div>
                <div class="attend-input fl"><input type="text" placeholder="德玛西亚" class="attend-input-content"/></div>
                <div class="clear"></div>
            </div>
            <!--封面图片-->
            <div class="editor-body-attend">
                <div class="attend-title fl">封面图片:</div>
                <div class="attend-input updata-phone fl">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button class="click-updata">点击上传</Button>
                    </Upload>
                    <div class="clear"></div>
                    <p class="attend-title-p">推荐尺寸750*300；支持.jpg, .jpeg, .bmp, .gif, .png类型文件，5M以内</p>
                </div>
                <div class="clear"></div>
            </div>
            <!--富文本-->
            <div class="editor-body-attend">
                <div class="attend-title fl">正文:</div>
                <div class="attend-input editor-width fl">
                    <!--&lt;!&ndash;添加富文本&ndash;&gt;-->
                    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" class="quill"></quill-editor>
                </div>
                <div class="clear"></div>
            </div>
            <!--附件-->
            <div class="editor-body-attend">
                <div class="attend-title fl">附件:</div>
                <div class="attend-input updata-phone fl">
                    <Upload action="//jsonplaceholder.typicode.com/posts/">
                        <Button class="click-updata">点击上传</Button>
                    </Upload>
                    <div class="clear"></div>
                    <p class="attend-title-p">支持.doc,.docx,.pdf,.xls,.xlsx,.ppt,.pptx,.zip,.rar类型文件，20M以内</p>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <!--底部-->
        <div class="editor-foot" slot="footer">
            <div class="cure fl">发送</div>
            <div class="preview fl">预览</div>
        </div>
    </div>
</template>

<script>
    import { quillEditor } from "vue-quill-editor"; //调用编辑器
    import "quill/dist/quill.core.css";
    import "quill/dist/quill.snow.css";
    import "quill/dist/quill.bubble.css";
    export default {
        name:'editor',
        data(){
            return{
                editor_text: false,
                content: '',
                editorOption: {
                    placeholder:"请输入..."
                }
            }
        },
        methods:{
            send_editor:function (data) {
                this.$emit('dialog_editor',data)
            }
        },
        props:{
            editor:Boolean
        },
        watch:{
            'editor':{
                handler:function (val) {
                    if (val){
                        this.editor_text = val;
                        this.send_editor(!val);
                        console.log(this.editor)
                    }
                }
            }
        },
        components:{
            quillEditor
        }
    }
</script>

<style lang="less" scoped>
    @import "editorAffiche.less";
</style>
<style lang="less">
    .editor-width{
        width: calc(100% - 100px);
        .ql-editor{
            height: 300px;
            max-height: 400px;
            overflow: auto;
        }
    }
</style>