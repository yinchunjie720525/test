<template>
    <div class="welAffiche">
        <!--标题-->
        <div class="welAffiche-top">
            <div class="welAffiche-top-title">新增公告</div>
        </div>
        <!--信息列表-->
        <div class="welAffiche-body">
            <!--标题-->
            <div class="welAffiche-body-attend">
                <div class="attend-title fl"><img src="/image/divisional/icon-star.png" class="attend-title-img"/>标题:</div>
                <div class="attend-input fl"><input type="text" placeholder="2019年清明节放假通知" class="attend-input-content"/></div>
                <div class="clear"></div>
            </div>
            <!--时间-->
            <!--<div class="welAffiche-body-attend">-->
                <!--<div class="attend-title fl"><img src="/image/divisional/icon-star.png" class="attend-title-img"/>时间:</div>-->
                <!--<div class="attend-input fl"><input type="text" class="attend-input-content"/></div>-->
                <!--<div class="clear"></div>-->
            <!--</div>-->
            <!--范围-->
            <div class="welAffiche-body-attend">
                <div class="attend-title fl"><img src="/image/divisional/icon-star.png" class="attend-title-img"/>范围:</div>
                <div class="attend-input fange fl"><input type="text" class="attend-input-content"/></div><!---->
                <div class="clear"></div>
            </div>
            <!--作者-->
            <div class="welAffiche-body-attend">
                <div class="attend-title fl">作者:</div>
                <div class="attend-input fl"><input type="text" placeholder="德玛西亚" class="attend-input-content"/></div>
                <div class="clear"></div>
            </div>
            <!--封面图片-->
            <div class="welAffiche-body-attend">
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
            <div class="welAffiche-body-attend">
                <div class="attend-title fl">正文:</div>
                <div class="attend-input editor-width fl">
                    <p class="phone-p">快速添加员工姓名、公告名称（公告中会替换成真是的信息）</p>
                    <!--添加富文本-->
                    <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption" class="quill"></quill-editor>
                </div>
                <div class="clear"></div>
            </div>
            <!--附件-->
            <div class="welAffiche-body-attend">
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
            <!--底部-->
            <div class="welAffiche-foot">
                <div class="cure fl">发送</div>
                <div class="preview fl">预览</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { quillEditor } from "vue-quill-editor"; //调用编辑器
    import "quill/dist/quill.core.css";//引入编辑器样式
    import "quill/dist/quill.snow.css";//引入编辑器样式
    import "quill/dist/quill.bubble.css";//引入编辑器样式

    export default {
        name:'list',
        data() {
            return {
                content: '',
                editorOption: {
                    placeholder:"请输入..."
                }
            }
        },
        methods: {

        },
        components: {
            quillEditor
        }
    }
</script>

<style lang="less">
    @import "list.less";
</style>