
<template>
    <!-- <keep-alive> -->
    <!-- <van-config-provider theme=""></van-config-provider> -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
        style="position: absolute; width: 0; height: 0" aria-hidden="true" id="__SVG_SPRITE_NODE__">
        <symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" id="like">
            <path
                d="M3.256 3.913a3.083 3.083 0 00-.003 4.397L8 12.998l4.743-4.684h.001a3.085 3.085 0 000-4.4C12.145 3.32 11.345 3 10.511 3a3.17 3.17 0 00-1.91.635l-.6.452-.602-.452A3.173 3.173 0 005.49 3c-.834 0-1.633.321-2.233.913zm10.191 5.111L8.7 13.714a.996.996 0 01-1.398 0L2.55 9.02a4.083 4.083 0 01.003-5.82A4.165 4.165 0 015.49 2c.907 0 1.786.29 2.511.835A4.17 4.17 0 0110.511 2c1.093 0 2.147.422 2.936 1.202a4.085 4.085 0 010 5.822z">
            </path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="liked">
            <path
                d="M8 2.88A4.126 4.126 0 005.447 2a4.12 4.12 0 00-2.906 1.192 4.053 4.053 0 00-.004 5.769l4.83 4.78a.901.901 0 001.266 0l4.826-4.776a4.055 4.055 0 000-5.773A4.122 4.122 0 0010.552 2C9.626 2 8.73 2.306 8 2.88z"
                fill="#FF2442"></path>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="collect">
            <path
                d="M19.049 24.906a2.127 2.127 0 002.1-.229c.61-.443.938-1.176.86-1.924l-.526-5.115a.583.583 0 01.147-.45l3.493-3.873a2.11 2.11 0 00.44-2.066 2.119 2.119 0 00-1.571-1.415l-5.138-1.102a.583.583 0 01-.38-.275L15.83 3.962a2.123 2.123 0 00-3.66 0L9.527 8.457a.583.583 0 01-.38.275L4.008 9.834a2.119 2.119 0 00-1.571 1.415 2.11 2.11 0 00.44 2.066l3.494 3.872c.11.123.164.287.147.45l-.527 5.116c-.077.748.25 1.481.86 1.924.61.444 1.41.53 2.1.229l4.816-2.102a.583.583 0 01.466 0l4.816 2.102zM4.177 12.143a.36.36 0 01-.076-.353.369.369 0 01.275-.245l5.138-1.102a2.333 2.333 0 001.522-1.099l2.643-4.495A.372.372 0 0114 4.667c.135 0 .256.07.322.182l2.643 4.495c.33.563.883.962 1.522 1.099l5.138 1.102a.369.369 0 01.274.245.36.36 0 01-.076.353l-3.493 3.872a2.333 2.333 0 00-.588 1.802l.527 5.115a.362.362 0 01-.148.33.377.377 0 01-.372.04L14.934 21.2a2.333 2.333 0 00-1.867 0l-4.815 2.102a.377.377 0 01-.372-.04.362.362 0 01-.149-.33l.528-5.115a2.333 2.333 0 00-.589-1.802l-3.493-3.873z"
                fill="currentColor"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="collected">
            <path
                d="M6.853 24.666a2.169 2.169 0 01-.884-1.976l.547-5.308-3.623-4.016a2.166 2.166 0 01-.453-2.12c.24-.738.855-1.292 1.615-1.455L9.38 8.65l2.74-4.659a2.18 2.18 0 013.76 0l2.741 4.66 5.326 1.141c.76.163 1.375.717 1.614 1.454.24.737.067 1.545-.452 2.121l-3.624 4.016.547 5.308a2.169 2.169 0 01-.884 1.976 2.186 2.186 0 01-2.158.235L14 22.724 9.012 24.9c-.71.31-1.532.22-2.158-.235z"
                fill="#FCBD54"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="chat">
            <path
                d="M5.57 19.224c.306.495.386 1.108.197 1.676l-.937 2.811 1.06-.2a62.665 62.665 0 011.582-.272c.424-.066.935-.139 1.278-.139.497 0 1.06.152 1.424.25l.093.025c.87.232 2.035.542 3.733.542 5.453 0 9.917-4.443 9.917-9.917 0-5.477-4.44-9.916-9.917-9.916-5.477 0-9.916 4.44-9.916 9.916 0 1.92.544 3.709 1.485 5.224zm-1.641 6.443a1.167 1.167 0 01-1.084-1.536l1.262-3.784a.236.236 0 00-.024-.199A11.612 11.612 0 012.333 14C2.333 7.557 7.558 2.334 14 2.334c6.444 0 11.667 5.223 11.667 11.666 0 6.444-5.25 11.667-11.667 11.667-1.932 0-3.277-.359-4.184-.6-.462-.124-.81-.217-1.066-.217-.725 0-4.467.75-4.777.813a.19.19 0 01-.044.004zm15.496-11.375a1.458 1.458 0 10-2.917 0 1.458 1.458 0 002.917 0zm-9.391 1.458a1.458 1.458 0 110-2.917 1.458 1.458 0 010 2.917z"
                fill="currentColor"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" id="share">
            <path
                d="M8.167 5.25h2.041a.875.875 0 100-1.75H8.167A4.667 4.667 0 003.5 8.167v11.667A4.667 4.667 0 008.167 24.5h11.666a4.667 4.667 0 004.667-4.666v-2.042a.875.875 0 10-1.75 0v2.041a2.917 2.917 0 01-2.917 2.917H8.167a2.917 2.917 0 01-2.917-2.916V8.167A2.917 2.917 0 018.167 5.25z"
                fill="currentColor"></path>
            <path
                d="M15.458 5.25h6.044l-9.344 9.344a.875.875 0 101.237 1.237l9.355-9.354v6.065a.875.875 0 001.75 0V4.667c0-.645-.522-1.167-1.167-1.167h-7.875a.875.875 0 000 1.75z"
                fill="currentColor"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="reply">
            <path
                d="M3.182 10.985c.175.283.221.633.113.958L2.76 13.55c.185-.036.393-.075.605-.114.308-.056.63-.113.904-.155A5.53 5.53 0 015 13.2c.285 0 .607.087.814.143l.054.014c.496.133 1.162.31 2.133.31A5.676 5.676 0 0013.666 8a5.667 5.667 0 10-10.484 2.985zm-.937 3.682a.667.667 0 01-.62-.878l.721-2.162a.135.135 0 00-.013-.114A6.667 6.667 0 1114.667 8c0 3.682-3 6.667-6.667 6.667-1.105 0-1.873-.205-2.391-.343-.264-.07-.463-.124-.61-.124-.414 0-2.552.429-2.73.464a.118.118 0 01-.024.003z"
                fill="currentColor"></path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" id="mention">
            <path
                d="M15.853 8.977c.022-.364.044-.637.06-.791a.75.75 0 111.491.146c-.013.136-.034.39-.055.736-.066 1.1-.08 2.252-.008 3.322.148 2.218.65 3.48 1.256 3.48 1.197 0 1.898-1.896 1.898-3.87a8.001 8.001 0 10-3.994 6.928.75.75 0 11.753 1.296 9.442 9.442 0 01-4.76 1.276 9.5 9.5 0 119.5-9.5c0 2.758-.965 5.37-3.397 5.37-1.37 0-2.13-1.077-2.504-2.907a4.356 4.356 0 01-7.949-2.459 4.356 4.356 0 017.695-2.793l.014-.234zm-.5 3.027a2.855 2.855 0 10-5.713.002 2.855 2.855 0 005.714-.001v-.001z">
            </path>
        </symbol>
        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="emoji">
            <path d="M10.496 14.5a1.802 1.802 0 003.008.005" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.999 12a1 1 0 11.003-2 1 1 0 01-.003 2zM14.999 12a1 1 0 11.003-2A1 1 0 0115 12z" fill="currentColor">
            </path>
            <path clip-rule="evenodd" d="M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" stroke="currentColor"
                stroke-width="1.5"></path>
        </symbol>

        <symbol xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 25" id="thanks">
            <rect y=".5" width="24" height="24" rx="12" fill="#FF2442"></rect>
            <path d="M6 13l4 4 8-8" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </symbol>
    </svg>
    <div data-v-024e536f="" class="note-detail-mask"
        style="transition: background-color 0.4s ease 0s; background: var(--mask-paper);">
        <div data-v-70c71a67="" data-v-024e536f="" id="" data-v-956360f6="" class="note-container" data-type="normal">
            <div data-v-11b921ce="" data-v-70c71a67="" class="">
                <div data-v-d21d8bf9="" data-v-11b921ce="" class="note-scroller">
                    <van-nav-bar fixed :border="false" title="" left-text="返回" left-arrow :z-index='30' @click-left="onClickLeft"
                        />
                    <div data-v-5245913a="" class="note-content">
                        <!-- <van-cell-group> -->
                        <van-field style="padding: 0;" :border="false" v-model="article.title" autosize rows="1" type="textarea" placeholder="请输入标题"
                            data-v-5245913a="" id="detail-title" class="title" />
                        <van-icon :style="{ 'color': articleDescriptionPreview ? '#13386c' : '#969799' }"  name="eye-o" @click="articleDescriptionPreview = !articleDescriptionPreview"/>
                        <!-- <van-field v-if="!articleDescriptionPreview" v-model="article.description" autosize rows="1" type="textarea" placeholder="请输入描述"
                            data-v-5245913a="" class="desc" :border="false"/> -->
                        <v-md-editor v-if="!articleDescriptionPreview" mode="edit" left-toolbar="" right-toolbar="" v-model="article.description" />
                        <v-md-preview v-if="articleDescriptionPreview" @copy-code-success="handleCopyCodeSuccess" :text="article.description"
                        data-v-5245913a="" class="desc"></v-md-preview>
                        <!-- <v-md-editor mode="edit" left-toolbar="" right-toolbar="preview sync-scroll" placeholder="请输入描述" v-model="article.description" height="400px"></v-md-editor> -->
                        <!-- </van-cell-group> -->
                        <!-- <div data-v-5245913a="" id="detail-title" class="title">其实参加酒局多了，都差不多</div>
                        <div data-v-5245913a="" class="desc">没那么惊讶<br>人生不就是一场行为艺术吗<br> </div> -->
                    </div>
                    <div data-v-6b20f11f="" data-v-11b921ce="" class="comments-el">
                        <div data-v-6b20f11f="" class="comments-container">
                            <div data-v-6b20f11f="" class="total">共 {{ articleCommentCnt }} 条评论</div>
                            <div data-v-6b20f11f="" tag="div" name="list" class="list-container">
                                <div data-v-67377e58="" data-v-6b20f11f="" class="comment-item"
                                    v-for="(item, index) in commentsList" :key="item.id" :ref="setCommentListRef">
                                    <div data-v-67377e58="" class="comment-inner-container">
                                        <div data-v-67377e58="" class="avatar"><a data-v-1d0a8701="" data-v-67377e58=""
                                                 class="" target="_blank"><img
                                                    data-v-1d0a8701="" class="avatar" :src="item.avatar"
                                                    style="width: 32px; height: 32px;"></a></div>
                                        <div data-v-67377e58="" class="right" style="max-width:90%">
                                            <div data-v-67377e58="" class="author-wrapper">
                                                <div data-v-67377e58="" class="author" style="margin-top: 4px;">
                                                    <!-- <div data-v-67377e58="" class="avatar"><a data-v-1d0a8701="" data-v-67377e58=""
                                                href="/user/profile/6042256c000000000100152b" class="" target="_blank"><img
                                                    data-v-1d0a8701="" class="avatar" :src="item.avatar"
                                                    style="width: 20px; height: 20px;"></a></div> -->
                                                    <a data-v-67377e58=""
                                                        class="name" target="_blank" style="margin-left: 10px;">{{
                                                            item.username }}</a>
                                                    <span data-v-67377e58=""
                                                        style="color:rgba(51, 51, 51, 0.6); margin-left: 4px;">
                                                        1楼
                                                    </span>
                                                </div>
                                                <div data-v-67377e58="" class="interactions" style="font-size: 12px">
                                                    <div data-v-67377e58="" class="reply icon-container">
                                                        <span data-v-67377e58="" style="margin-right: 4px;"
                                                            @click="copy_comment(item.content)">复制</span>

                                                        <svg @click="replyComment(index, 1, item)" data-v-7c2d5134=""
                                                            data-v-67377e58="" style="margin-left: 8px"
                                                            class="reds-icon reply-icon" width="16" height="16">
                                                            <use data-v-7c2d5134="" xlink:href="#reply"></use>
                                                        </svg>
                                                        <span v-if="item.reply_cnt != -1" data-v-67377e58=""
                                                            class="count">{{ item.reply_cnt }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-67377e58="" class="content">
                                                <!-- {{ item.content }} -->
                                                <!-- <van-text-ellipsis style="white-space: normal;" rows="5"
                                                    :content="item.content" expand-text="展开" collapse-text="收起"
                                                    position="middle" /> -->
                                                <v-md-preview style="overflow:auto; max-height: 300px;"
                                                    @copy-code-success="handleCopyCodeSuccess" :text="item.content"
                                                    data-v-67377e58="" class="content"></v-md-preview>
                                                <!-- <vue-ellipsis-3
                                                :visible-line="1"
                                                use-inner-html
                                                text="<b>这是一段</b><u>非常非常非常非常非常非常非常非常非常非常非常长</u>的话">
                                                </vue-ellipsis-3> -->
                                            </div>

                                            <div data-v-67377e58="" class="labels"></div>

                                            <div v-if="item.reply_cnt == -1" data-v-6b20f11f="" data-v-67377e58-s=""
                                                style="color: #13386c; cursor: pointer;" @click="text_expand(index)">
                                                展开回复
                                            </div>
                                            <!-- <div data-v-67377e58="" class="info">
                                                <div data-v-67377e58="">
                                                    <span data-v-67377e58="">
                                                        {{ item.date }}
                                                        第1楼
                                                    </span>
                                                    <span data-v-67377e58="" class="location">上海</span>
                                                </div>
                                                <div data-v-67377e58="" class="interactions">
                                                    <div data-v-67377e58="" class="like"><span data-v-809eb46a=""
                                                            data-v-67377e58="" class="like-wrapper" points="[object Object]"
                                                            track-data="[object Object]"><span data-v-809eb46a=""
                                                                class="like-lottie"
                                                                style="width: 16px; height: 16px;"></span><svg
                                                                data-v-7c2d5134="" data-v-809eb46a=""
                                                                class="reds-icon like-icon" width="16" height="16">
                                                                <use data-v-7c2d5134="" xlink:href="#like"></use>
                                                            </svg><span data-v-809eb46a="" class="count">1138</span></span>
                                                    </div>
                                                    <div data-v-67377e58="" class="reply icon-container">
                                                        <span data-v-67377e58="" style="margin-right: 4px;"
                                                            @click="copy_comment(item.content)">复制</span>
                                                        <svg data-v-7c2d5134="" data-v-67377e58=""
                                                            class="reds-icon reply-icon" width="16" height="16">
                                                            <use data-v-7c2d5134="" xlink:href="#reply"></use>
                                                        </svg>
                                                        <span data-v-67377e58="" class="count">{{ item.reply_cnt ?
                                                            item.reply_cnt : 100 }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div data-v-67377e58="" class="reply-container">
                                                <div data-v-6b20f11f="" data-v-67377e58-s="" tag="div" name="list"
                                                    class="list-container">
                                                    <div data-v-67377e58="" data-v-6b20f11f="" data-v-67377e58-s=""
                                                        class="comment-item" v-for="(comment_reply, idx) in item.replys"
                                                        :key="comment_reply.id">
                                                        <div data-v-67377e58="" class="comment-inner-container">
                                                            <!-- <div data-v-67377e58="" class="avatar"><a data-v-1d0a8701=""
                                                                    data-v-67377e58=""
                                                                    href="/user/profile/559a20e467bc6501eaa4443f" class=""
                                                                    target="_blank"><img data-v-1d0a8701="" class="avatar"
                                                                        :src="comment_reply.avatar"
                                                                        style="width: 24px; height: 24px;"></a></div> -->
                                                            <div data-v-67377e58="" class="right" style="max-width:100%;">
                                                                <div data-v-67377e58="" class="author-wrapper">

                                                                    <div data-v-67377e58="" class="author">
                                                                        <div data-v-67377e58="" class="avatar">
                                                                            <img data-v-1d0a8701="" class="avatar"
                                                                                :src="comment_reply.avatar"
                                                                                style="width: 20px; height: 20px;" />
                                                                        </div>
                                                                        <div data-v-67377e58="" class="name"
                                                                            style="margin-left: 12px;">{{
                                                                                comment_reply.username }}
                                                                        </div>

                                                                        <span data-v-67377e58=""
                                                                            style="color:rgba(51, 51, 51, 0.6); margin-left: 4px;">
                                                                            {{ idx + 2 }}楼
                                                                        </span>
                                                                        <span v-if="comment_reply.reply_to_floor != idx+1" style='color:#13386C'
                                                                            @click="replyComment(index, comment_reply.reply_to_floor, comment_reply.reply_to_floor == 1 ? item : item.replys[comment_reply.reply_to_floor - 2])">
                                                                            {{ ' - ' + comment_reply.reply_to_username + ' '+comment_reply.reply_to_floor}}楼 </span>
                                                                        <!-- <span style='color:#13386C'> ${comment_reply.reply_to_floor}楼 ${comment_reply.reply_to_username}</span>: ${comment_reply.content}`" -->
                                                                    </div>
                                                                    <div data-v-67377e58="" class="interactions"
                                                                        style="font-size: 12px">
                                                                        <div data-v-67377e58=""
                                                                            class="reply icon-container">
                                                                            <span data-v-67377e58=""
                                                                                style="margin-right: 4px;"
                                                                                @click="copy_comment(comment_reply.content)">复制</span>

                                                                            <svg @click="replyComment(index, idx + 2, comment_reply)"
                                                                                data-v-7c2d5134="" data-v-67377e58=""
                                                                                class="reds-icon reply-icon" width="16"
                                                                                height="16" style="margin-left: 8px">
                                                                                <use data-v-7c2d5134="" xlink:href="#reply">
                                                                                </use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                                <!-- <div data-v-67377e58="" class="content">
                                                                    <span data-v-67377e58="">回复</span>
                                                                    <span data-v-67377e58="" style="margin-left: 2px; color: #13386c">{{ comment_reply.reply_to_floor+"楼 "+comment_reply.reply_to_username }}</span>
                                                                    {{ comment_reply.content }}
                                                                   
                                                                </div> -->
                                                                <!-- <van-text-ellipsis v-if="comment_reply.ellipsisShow"
                                                                    data-v-67377e58="" class="content"
                                                                    style="white-space: normal;" rows="5"
                                                                    :content="'回复 ' + comment_reply.reply_to_floor + '楼 ' + comment_reply.reply_to_username + ': ' + comment_reply.content"
                                                                    expand-text="展开" collapse-text="收起" position="middle"
                                                                    @click-action="comment_reply.ellipsisShow = false">
                                                                </van-text-ellipsis> -->
                                                                <!-- <div  v-else v-html="md.render(comment_reply.content)">
                                                                </div> -->
                                                                <!-- <v-md-preview-html :html="xss.process(VMdPreview.vMdParser.themeConfig.markdownParser.render(comment_reply.content))" preview-class="vuepress-markdown-body"></v-md-preview-html> -->
                                                                <v-md-preview style="max-height: 300px;  overflow:auto"
                                                                    @copy-code-success="handleCopyCodeSuccess"
                                                                    :text="comment_reply.content" data-v-67377e58=""
                                                                    class="content"></v-md-preview>
                                                                <div data-v-67377e58="" class="labels"></div>
                                                                <!-- <div data-v-67377e58="" class="info">
                                                                    <div data-v-67377e58="">
                                                                        <span data-v-67377e58="">{{ idx + 2 }}楼</span>
                                                                        <span data-v-67377e58="">{{ comment_reply.date }}</span>
                                                                        <span data-v-67377e58="" class="location">浙江</span>
                                                                    </div>
                                                                    <div data-v-67377e58="" class="interactions">
                                                                        <div data-v-67377e58="" class="like"><span
                                                                                data-v-809eb46a="" data-v-67377e58=""
                                                                                class="like-wrapper"
                                                                                points="[object Object]"
                                                                                track-data="[object Object]"><span
                                                                                    data-v-809eb46a="" class="like-lottie"
                                                                                    style="width: 16px; height: 16px;"></span><svg
                                                                                    data-v-7c2d5134="" data-v-809eb46a=""
                                                                                    class="reds-icon like-icon" width="16"
                                                                                    height="16">
                                                                                    <use data-v-7c2d5134=""
                                                                                        xlink:href="#like"></use>
                                                                                </right-icon	svg><span data-v-809eb46a=""
                                                                                    class="count">746</span></span></div>
                                                                        <div data-v-67377e58=""
                                                                            class="reply icon-container">
                                                                            <span data-v-67377e58=""
                                                                                style="margin-right: 4px;"
                                                                                @click="copy_comment(comment_reply.content)">复制</span>
                                                                            <svg data-v-7c2d5134="" data-v-67377e58=""
                                                                                class="reds-icon reply-icon" width="16"
                                                                                height="16">
                                                                                <use data-v-7c2d5134="" xlink:href="#reply">
                                                                                </use>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div> -->
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div v-if="item.reply_cnt - item.replys.length > 0" data-v-6b20f11f=""
                                                    data-v-67377e58-s="" class="show-more" @click="text_expand(index)">展开 {{
                                                        item.reply_cnt - item.replys.length }} 条回复
                                                </div>
                                                <!-- <div v-if="item.reply_cnt == -1" data-v-6b20f11f="" data-v-67377e58-s=""
                                                    style="color: #13386c; cursor: pointer;" @click="text_expand(index)">
                                                    展开回复
                                                </div> -->
                                                <!-- <div style="height: 1px; background: gray; position: re;"></div> -->

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div ref="bottomRef"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- <van-popup v-model:show="fromButton" position="bottom" :style="{ height: preShowIndex != -1 ? '50%' : '' }">
                    <template #default>
                        <van-field @keydown.enter.native="handleKeyBoard" :border="false" v-model="commentContent"
                            :placeholder=commentContentPlaceHolder.content type="textarea" rows="3"
                            ref="commentFieldPopup" />
                        <van-row style="padding-bottom:12px;">
                            <van-col span="12">
                                <svg @click="bottomShow(0)" class="reds-icon" width="24" height="24"
                                    :style="{ 'margin-left': '12px', 'color': preShowIndex == 0 ? '#13386c' : '#969799' }">
                                    <use data-v-7c2d5134="" xlink:href="#chat"></use>
                                </svg>
                                <svg @click="bottomShow(1)" class="reds-icon" width="24" height="24"
                                    :style="{ 'margin-left': '12px', 'color': preShowIndex == 1 ? '#13386c' : '#969799' }">
                                    <use data-v-7c2d5134="" xlink:href="#mention"></use>
                                </svg>
                            </van-col>
                            <van-col span="12">
                                <div @click="submitComment" style="
                                    background-color: #408af2;
                                    font-size: 14px;
                                    position: absolute;
                                    right: 24px;
                                    color: white;
                                    border-radius: 18px;
                                    padding-top: 3px;
                                    padding-bottom: 3px;
                                    padding-left: 18px;
                                    padding-right: 18px;">发送</div>
                            </van-col>
                        </van-row>
                        <van-checkbox-group v-if="bottomShowList[0]" v-model="checkedClipBoard">
                            <van-cell-group>
                                <van-cell v-for="(item, idx) in clipBoardList" clickable :key="item"
                                    @click="toggleClipBoard(idx)">
                                    <template #title>
                                        <div>
                                            <van-text-ellipsis :content="item" />
                                        </div>

                                    </template>
                                    <template #right-icon>
                                        <van-checkbox :name="item" :ref="el => checkboxRefsClipBoard[idx] = el"
                                            @click.stop />
                                    </template>
                                </van-cell>
                            </van-cell-group>
                        </van-checkbox-group>
                        <van-checkbox-group v-if="bottomShowList[1]" v-model="checkedAgent">
                            <van-cell-group>
                                <van-cell v-for="(item, idx) in agentList" clickable :key="item"
                                    :title="item.role + ':' + item.content" @click="toggleAgent(idx)">
                                    <template #right-icon>
                                        <van-checkbox :name="idx" :ref="el => checkboxRefsAgent[idx] = el" @click.stop />
                                    </template>
                                </van-cell>
                            </van-cell-group>
                        </van-checkbox-group>
                    </template>
                </van-popup> -->

                <div data-v-11b921ce="" class="interactions">
                    <!-- <van-field @input="handleInput" @keydown.enter.native="handleKeyBoard" id="commentFieldFocus"
                        ref="commentField" type="textarea" autosize rows="1"
                        style="background-color: rgba(0, 0, 0, 0.03); border-radius: 22px;" v-model="commentContent"
                        :placeholder=commentContentPlaceHolder.content>
                        <template #right-icon>
                            <svg @click="clearReplyTo" class="reds-icon" width="24" height="24" style="margin-left: 8px;">
                                <use xlink:href="#chat"></use>
                            </svg>
                            <svg @click="submitComment()" class="reds-icon" width="24" height="24"
                                style="margin-left: 8px;">
                                <use xlink:href="#chat"></use>
                            </svg>
                            <svg @click="bottomShow(1)" class="reds-icon" width="24" height="24">
                                <use xlink:href="#mention"></use>
                            </svg>

                        </template>

                    </van-field> -->
                    <!-- <Mentionable
                        :keys="['@']"
                        :items="items"
                        offset="6"
                    >
                        <textarea v-model="text"> </textarea>
                    </Mentionable> -->
                    <van-checkbox-group v-if="bottomShowList[0]" v-model="checkedClipBoard"
                        style="max-height: 150px; overflow: auto;">
                        <van-cell-group>
                            <van-cell v-for="(item, idx) in clipBoardList" clickable :key="item"
                                @click="toggleClipBoard(idx)">
                                <template #title>
                                    <div>
                                        <van-text-ellipsis :content="item" />
                                    </div>

                                </template>
                                <template #right-icon>
                                    <van-checkbox :name="item" :ref="el => checkboxRefsClipBoard[idx] = el" @click.stop />
                                </template>
                            </van-cell>
                        </van-cell-group>
                    </van-checkbox-group>
                    <!-- <van-checkbox-group v-if="bottomShowList[1]" v-model="checkedAgent"
                        style="max-height: 150px; overflow: auto;">
                        <van-cell-group>
                            <van-cell v-for="(item, idx) in agentList" clickable :key="item"
                                :title="item.role + ':' + item.content" @click="toggleAgent(idx)">
                                <template #right-icon>
                                    <van-checkbox :name="idx" :ref="el => checkboxRefsAgent[idx] = el" @click.stop />
                                </template>
                            </van-cell>
                        </van-cell-group>
                    </van-checkbox-group> -->

                    <van-radio-group v-if="bottomShowList[1]" v-model="checkedAgent" style="max-height: 150px; overflow: auto;">
                        <van-cell-group>
                            <!-- <van-cell v-for="(item, idx) in agentList" clickable :key="item"
                                :title="item.role + ':' + item.content" @click="checkedAgent = checkedAgent == idx ? -1 : idx">
                                <template #right-icon>
                                    <van-radio :name="idx"></van-radio>
                                </template>
                            </van-cell> -->
                            <div v-for="(item, idx) in agentList" :key="item" style="display: flex; flex-direction: row;" >
                                <van-field :border="false" v-model="item.role" :readonly="item.readonly" style="width: 30%; overflow: auto">
                                    <template #left-icon>
                                        <van-icon v-if="item.readonly" name="edit" @click="agentList[idx].readonly = false"/>
                                        <van-icon v-else name="passed" @click="submitAgent(idx)"/>
                                    </template>
                                </van-field>
                                <van-field :border="false" v-model="item.content" :readonly="item.readonly" style="overflow: auto;" :clickable="item.readonly" @click="checkedAgent = checkedAgent == idx ? -1 : idx">
                                    <template #right-icon>
                                        <van-radio :name="idx" v-if="item.readonly" :disabled="!item.readonly"></van-radio>
                                        <van-icon name="minus" v-else @click="deleteAgent(idx)"/>
                                    </template>
                                </van-field>
                            </div>
                            <van-row justify="center" style="margin-top: 10px;">
                                <van-col span="1"><van-icon name="add-o" @click="addAgent()"/></van-col>
                            </van-row>
                            <!-- <van-field v-for="(item, idx) in agentList" clickable :key="item"
                                v-model="item.role" @click="checkedAgent = checkedAgent == idx ? -1 : idx">
                                <template #right-icon>
                                    <van-radio :name="idx"></van-radio>
                                </template>
                            </van-field> -->
                        </van-cell-group>
                    </van-radio-group>
                    <van-row style="padding-bottom:12px;">
                        <van-col span="16">

                            <!-- <svg @click="bottomShow(0)" class="reds-icon" width="24" height="24"
                                :style="{ 'color': preShowIndex == 0 ? '#13386c' : '#969799' }">
                                <use data-v-7c2d5134="" xlink:href="#chat"></use>
                            </svg> -->
                            <van-icon @click="bottomShow(0)" class="reds-icon" size="24" name="notes-o" :style="{ 'color': preShowIndex == 0 ? '#13386c' : '#969799' }"/>
                            <svg @click="bottomShow(1)" class="reds-icon" width="24" height="24"
                                :style="{ 'margin-left': '12px', 'color': preShowIndex == 1 ? '#13386c' : '#969799' }">
                                <use data-v-7c2d5134="" xlink:href="#mention"></use>
                            </svg>
                            <svg @click="clearReplyTo" class="reds-icon" width="24" height="24"
                                :style="{ 'margin-left': '12px', 'color': '#969799' }">
                                <use xlink:href="#chat"></use>
                            </svg>
                            <van-icon size="24" class="reds-icon" :style="{'margin-left': '12px','color': commentContentPreview ? '#13386c' : '#969799'}"  name="eye-o" @click="commentContentPreview = !commentContentPreview"/>
                        </van-col>
                        <van-col span="8">
                            <div @click="submitComment" style="
                                    background-color: #1989FA;
                                    font-size: 14px;
                                    position: absolute;
                                    right: 24px;
                                    color: white;
                                    border-radius: 18px;
                                    padding-top: 3px;
                                    padding-bottom: 3px;
                                    padding-left: 18px;
                                    padding-right: 18px;">回复</div>
                        </van-col>
                    </van-row>
                    <!-- <van-field @keydown.enter.native="handleKeyBoard" :border="false" v-model="commentContent"
                        :placeholder=commentContentPlaceHolder.content type="textarea" rows="1" autosize ref="commentFieldPopup" /> -->
                    <van-field v-if="!commentContentPreview" @keydown="handleKeyDown" @input="handleInput" @keydown.enter.native="handleKeyBoard"
                        id="commentFieldFocus" ref="commentField" type="textarea" :autosize="{ maxHeight: 200 }" rows="1"
                        style="background-color: rgba(0, 0, 0, 0.03); border-radius: 12px;" v-model="commentContent"
                        :placeholder=commentContentPlaceHolder.content>
                    </van-field>
                    <v-md-preview v-if="commentContentPreview" @copy-code-success="handleCopyCodeSuccess" :text="commentContent"
                        data-v-5245913a="" style="padding: 10px; font-size: 14px;" class="desc"></v-md-preview>
                    <!-- <v-md-editor :placeholder="commentContentPlaceHolder.content" id="commentFieldFocus" 
                        ref="commentField" @keydown="handleKeyDown" @input="handleInput" 
                        @keydown.enter.native="handleKeyBoard"
                        mode="edit"  
                        left-toolbar=""
                        right-toolbar=""
                        @change="handleInput"
                        v-model="commentContent" /> -->

                </div>
            </div>
        </div>
    </div>
    <!-- </keep-alive> -->
</template>

<script setup>
import { ref, onMounted, onBeforeUpdate, watch, watchEffect } from 'vue'
import { getCommentsReplyList } from "@/api/index";
import chat from "@/views/RedBook/data"
import { useRoute, useRouter } from 'vue-router';
import useClipboard from "vue-clipboard3";
import { nextTick } from 'vue';
import pinyin from 'pinyin';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const articleDescriptionPreview = ref(true)
const commentContentPreview = ref(false)
const bottomRef = ref('')
// const clipboardItems = ref([])

// onMounted(() => {
//   if ('ClipboardItem' in window) {
//     navigator.clipboard.read().then((items) => {
//       items.forEach((item) => {
//         clipboardItems.value.push(item)
//       })
//     })
//   }
// })

// import { Mentionable } from 'vue-mention'
// import 'floating-vue/dist/style.css'

const { toClipboard } = useClipboard();
// import { xss } from '@kangc/v-md-editor';
// import VMdPreview, {xss} from '@kangc/v-md-editor/lib/preview';
// import '@kangc/v-md-editor/lib/style/preview.css';

// import { md } from "@/views/RedBook/markdown";
// const html = xss.process(VMdPreview.vMdParser.themeConfig.markdownParser.render('### 标题'));
// console.log(html)
const handleCopyCodeSuccess = (code) => {
    console.log(code);
}
const items = ref([])
// const html = ;
const articleTableName = ref('article')
const assistantTableName = ref('assistant')
const articleId = ref('')
const route = useRoute()
const router = useRouter()
articleId.value = route.query.id
console.log(route.query)
// 标题和描述
const article = ref({
    'title': '',
    'description': ''
})
const oldArticle = {
    'title': '其实参加酒局多了，都差不多',
    'description': '没那么惊讶\n人生不就是一场行为艺术吗'
}
// const title = ref('其实参加酒局多了，都差不多')
// const description = ref('没那么惊讶\n人生不就是一场行为艺术吗')
const decoder = new TextDecoder("utf-8");

// const apiKey = "77cbaa81-dbcb-4800-9aee-98b8abb9a5b9"; //集团key
const apiKey = "sk-0skLQXN5d0bBaQYQBFGTanCAgrzDgWXOCqc4b4yAiUaltX1d"
const commentField = ref(null)
const commentFieldPopup = ref(null)

const onClickLeft = async () => {
    await submitArticle()
    router.go(-1)
}

const onClickRight = async () => {
    await submitArticle()
    router.push({
        path: '/assistant'
    })
}
const commentContent = ref('')
// watch(commentContent,(newValue, oldValue) => {
//     if (newValue.length>oldValue){ //新增字符
//         let newChar = newValue.slice(-1) // 获取最新输入的字符
//     }else if (newValue.length < oldValue) //删除字符
//         let oldChar = oldValue.slice(-1)
//     }
//         let newChar = newValue.slice(-1) // 获取最新输入的字符
//         // console.log(newChar)
//         let newChar1 = oldValue.slice(-1)
//         // console.log(newChar1)
//         console.log(newValue, newChar)
//         console.log(oldValue, newChar1)
//     }
// )

const handleInput = (event) => {
    console.log('handleInput')
    if (searchAgent.value) {
        searchText.value = ''
        if (event.target.selectionStart - pos_alta.value > 0) {
            // console.log(event.target.value)
            searchText.value += event.target.value.slice(pos_alta.value + 1, event.target.selectionStart)
            // console.log('searchText',searchText.value)
            agentList.value = agentListOri.value.filter((item) =>
                (item.role+' ').includes(searchText.value) || (item.pinyin+' ').includes(searchText.value)
            )
            if (agentList.value.length == 1 && agentList.value[0]['role']+' ' == searchText.value) {
                // console.log(checkboxRefsAgent.value)
                // checkboxRefsAgent.value[0].toggle()
                // toggleAgent(0)
                checkedAgent.value = 0
                searchAgent.value = false
            }
            // console.log(searchText.value, agentList.value)
        }
    }
}

// 获取 article 数据
const getArticle = async () => {
    let query = Bmob.Query(articleTableName.value)
    let res = await query.get(articleId.value)
    // console.log('get Article', res)
    article.value.title = res.title
    article.value.description = res.description
    oldArticle.title = article.value.title
    oldArticle.description = article.value.description
}

// 获取 一级评论 数据
const articleCommentCnt = ref(0)
const getRedBookCommentsList = async () => {
    let query = Bmob.Query(articleTableName.value)
    query.order("createdAt")
    query.field('comments', articleId.value)
    let res = await query.relation('sub_comment')
    articleCommentCnt.value = res.count
    return res
}

// 新增一条评论
const newComment = async (comment) => {
    let query = Bmob.Query('sub_comment')
    query.set("username", comment.username)
    query.set("content", comment.content)
    query.set("replyTo", comment.replyTo)
    query.set("isAgent", comment.isAgent)
    query.set("replyCnt", 0)
    query.set("avatar", comment.avatar)
    // query.set("cueWho", comment.cue_who)
    const res = await query.save()
    return res
    // console.log('newComment')
}


// 处理评论区展示
const commentsList = ref([]);
const names = ref([]);
const reply_ids = ref([]);
const getCommentsList = async () => {
    let data = await getRedBookCommentsList()
    // console.log('commentlist', data)
    for (let i = 0; i < data.count; i++) {
        data.results[i].id = data.results[i].objectId
        data.results[i].reply_cnt = -1//data.results[i].replyCnt
        data.results[i].replys = []
        data.results[i].ellipsisShow = true
        let replys_length = data.results[i].replys.length;
        let tmp_reply_ids = []
        let tmp_names = []
        let comment = data.results[i]
        tmp_reply_ids.push(comment.id)
        tmp_names.push(comment.username)
        for (let j = 0; j < replys_length; j++) {
            let reply_to_floor = tmp_reply_ids.indexOf(comment.replys[j].reply_to) + 1
            data.results[i].replys[j].reply_to_floor = reply_to_floor
            data.results[i].replys[j].reply_to_username = tmp_names[reply_to_floor - 1]
            tmp_reply_ids.push(comment.replys[j].id)
            tmp_names.push(comment.replys[j].username)
        }
        names.value.push(tmp_names)
        reply_ids.value.push(tmp_reply_ids)
    }

    commentsList.value = commentsList.value.concat(data.results);
    // console.log('getCommentList', commentsList.value)
    // console.log('getCommentList names reply_ids', names, reply_ids)
}

const readStream = async (
    reader,
    status
) => {
    let partialLine = "";
    commentsList.value.at(commentContentPlaceHolder.value.index).replys.at(-1).content = ''
    while (true) {
        // eslint-disable-next-line no-await-in-loop
        const { value, done } = await reader.read();
        if (done) break;

        const decodedText = decoder.decode(value, { stream: true });

        if (status !== 200) {
            const json = JSON.parse(decodedText); // start with "data: "
            const content = json.error.message ?? decodedText;
            appendLastMessageContent(content);
            return;
        }
        const chunk = partialLine + decodedText;
        const newLines = chunk.split(/\r?\n/);

        partialLine = newLines.pop() ?? "";

        for (const line of newLines) {
            if (line.length === 0) continue; // ignore empty message
            if (line.startsWith(":")) continue; // ignore sse comment message
            if (line === "data: [DONE]") return; //

            const json = JSON.parse(line.substring(6)); // start with "data: "
            const content =
                status === 200
                    ? json.choices[0].delta.content ?? ""
                    : json.error.message;
            appendLastMessageContent(content);
        }
    }
};

const appendLastMessageContent = (content) =>
    (commentsList.value.at(commentContentPlaceHolder.value.index).replys.at(-1).content += content)

// 下拉刷新commentList：pagenation
// getCommentsList()

// 点击 展开更多回复
const text_expand = async (comment_index) => {

    let query = Bmob.Query('sub_comment')
    query.order("createdAt")
    query.field('replys', reply_ids.value[comment_index][0])
    let data = await query.relation('sub_comment')
    // console.log('sub_comment replys', data)

    commentsList.value[comment_index].reply_cnt = data.count

    let tmp_reply_ids = reply_ids.value[comment_index]

    let tmp_names = names.value[comment_index]
    // console.log('reply_ids', tmp_reply_ids, tmp_names)
    for (let j = 0; j < data.results.length; j++) {
        data.results[j].reply_to = data.results[j].replyTo
        data.results[j].id = data.results[j].objectId
        data.results[j].ellipsisShow = true
        let reply_to_floor = tmp_reply_ids.indexOf(data.results[j].reply_to) + 1
        // console.log('reply_to_floor', data.results[j].reply_to, tmp_reply_ids)
        data.results[j].reply_to_floor = reply_to_floor
        data.results[j].reply_to_username = tmp_names[reply_to_floor - 1]
        tmp_reply_ids.push(data.results[j].id)
        tmp_names.push(data.results[j].username)
    }
    commentsList.value[comment_index].replys = commentsList.value[comment_index].replys.concat(data.results)
    names.value[comment_index] = tmp_names
    reply_ids.value[comment_index] = tmp_reply_ids
}

// 点击复制按钮
const copy_comment = async (content) => {
    await toClipboard(content);
    // getClipBoard()
    // console.log(content)
}

const clipboardItems = ref([])
const getClipBoard = async () => {
    let copyText = await navigator.clipboard.readText();
    console.log('剪贴板内容', copyText)

//     if ('ClipboardItem' in window) {
//     navigator.clipboard.read().then((items) => {
//       items.forEach((item) => {
//         clipboardItems.value.push(item)
//       })
//     })
//   }
//   console.log('剪贴板历史', clipboardItems.value)
}
// getClipBoard()

// 控制底部弹出框+剪贴板+agent
const fromButton = ref(false)
const preShowIndex = ref(-1)
const bottomShowList = ref([false, false])

const clipBoardList = ref(['1', '2', '34', '5', '6', '7', '8'])
const checkedClipBoard = ref([])
const checkboxRefsClipBoard = ref([])
const toggleClipBoard = (index) => {
    checkboxRefsClipBoard.value[index].toggle()
}

const agentListOri = ref([
    { 'role': 'alex', 'content': 'you are alex, a excellent agent.', 'readonly': true },
    { 'role': '小明', 'content': '你叫小明，你是一个非常有帮助的助手','readonly': true  },
    { 'role': 'python专家', 'content': '你叫python专家，你是一个python编程专家','readonly': true  },
])

const agentList = ref(agentListOri.value)
const searchText = ref('')
// const agentList = ref(['5', '6', '7', '8'])
const checkedAgent = ref(-1)
const checkboxRefsAgent = ref([])
// const toggleAgent = (index) => {
//     console.log(index, checkboxRefsAgent.value)
//     checkboxRefsAgent.value[index].toggle()
//     console.log(checkboxRefsAgent.value[index].checked.value)
// 
    // add selected agent to commentContent
    // if (!checkboxRefsAgent.value[index].checked.value) {
    //     if (commentContent.value.at(-1) == '@') {
    //         commentContent.value += agentList.value[index]['role'] + ' '
    //     } else {
    //         commentContent.value += '@' + agentList.value[index]['role'] + ' '
    //     }
    // } else {
    //     commentContent.value = commentContent.value.slice(0, -1 * (agentList.value[index]['role'].length + 2))
    // }
// }

const bottomShow = (index) => {
    // console.log(index, fromButton.value, preShowIndex.value, bottomShowList.value)
    // fromButton.value = true

    if (preShowIndex.value == -1) {
        bottomShowList.value[preShowIndex.value] = false
        preShowIndex.value = -1
        bottomShowList.value[index] = true
        preShowIndex.value = index
    }
    else if (preShowIndex.value == index) {
        bottomShowList.value[index] = false
        preShowIndex.value = -1
    } else {
        bottomShowList.value[preShowIndex.value] = false
        bottomShowList.value[preShowIndex.value] = false
        bottomShowList.value[index] = true
        preShowIndex.value = index
    }
    // setTimeout(function () {
    //     commentFieldPopup.value.focus()
    // })
    // console.log(index, fromButton.value, preShowIndex.value, bottomShowList.value)
}

const getAgent = async () => {
    let query = Bmob.Query(assistantTableName.value)
    query.order("createdAt")
    let res = await query.find()
    agentListOri.value = res
    agentListOri.value.forEach(item => {
        item['readonly'] = true
        item['role'] = item['name']
        item['pinyin'] = pinyin(item['role'], {
            style: pinyin.STYLE_NORMAL
        }).join('')
    })
    // console.log(agentListOri.value)
    agentList.value = agentListOri.value
}

const addAgent = async () => {
    agentList.value.push({
        'objectId': '',
        'role': '待编辑',
        'content': '待编辑',
        'readonly': false
    })
    // agentList.value = agentListOri.value
}

const deleteAgent = async (index) => {
    if (agentList.value[index].role == '待编辑'){
        agentList.value.pop()
        return 
    }
    const query = Bmob.Query(assistantTableName.value);
    let res = await query.destroy(agentList.value[index].objectId)
    agentList.value.splice(index,index)
    agentListOri.value.splice(index,index)
    console.log('删除agent成功')
}

const submitAgent = async (index) => {
    if (agentList.value[index].role == '待编辑'){
        console.log('请修改agent名称')
        return 
    }
    let query = Bmob.Query(assistantTableName.value)
    query.set("name", agentList.value[index].role)
    query.set("content", agentList.value[index].content)
    if (agentList.value[index].objectId != ''){
        query.set('id', agentList.value[index].objectId) //需要修改的objectId
    }
    let res = await query.save()
    if (agentList.value[index].objectId == ''){
        agentList.value[index].objectId = res.objectId
    }
    console.log('保存成功')
    agentList.value[index].readonly = true
    agentListOri.value[index].role = agentList.value[index].role
    agentListOri.value[index].content = agentList.value[index].content
}


const submitArticle = async () => {
    if (article.value.title == oldArticle.title && article.value.description == oldArticle.description) {
        return
    }
    console.log(article.value)
    let query = Bmob.Query(articleTableName.value)
    if (article.value.title != oldArticle.title){
        query.set("title", article.value.title)
    }
    if (article.value.description != oldArticle.description){
        query.set("description", article.value.description)
    }
    if (articleId.value != "") {
        query.set('id', articleId.value) //需要修改的objectId
    }
    console.log(article.value)
    let res = await query.save()
    if (articleId.value == ""){
        articleId.value = res.objectId
    }
    oldArticle.title = article.value.title
    oldArticle.description = article.value.description
}

// const handleEnter = (event) => {
//     console.log('触发enter')
// }

// const testChange = (text, html) => {
//     console.log('testchange')
//     console.log(text, html)
// }


// shift+enter 发送，enter 换行
const handleKeyBoard = (event) => {
    console.log(handleKeyBoard)
    // console.log(searchAgent.value, agentList.value.length)
    if (searchAgent.value == true && agentList.value.length == 1){
        
        checkedAgent.value = 0
        let curpos = event.target.selectionStart
        console.log(commentContent.value, pos_alta.value)
        console.log(commentContent.value.substring(0, pos_alta.value), commentContent.value.substring(curpos))
        commentContent.value = commentContent.value.substring(0, pos_alta.value) + '@'+agentList.value[checkedAgent.value]['role']+' ' + commentContent.value.substring(curpos) 
        searchAgent.value = false
        // event.target.selectionStart = (commentContent.value.substring(0, pos_alta.value) + '@'+agentList.value[checkedAgent.value]['role']+' ').length-1
        event.target.focus();
        nextTick (() => {
            event.target.selectionStart = (commentContent.value.substring(0, pos_alta.value) + '@'+agentList.value[checkedAgent.value]['role']+' ').length
        })
        event.preventDefault()
        return 
    }
    if (!event.shiftKey) {
        return
    }
    
    submitComment()
}

const searchAgent = ref(false)
const pos_alta = ref('-1')
const handleKeyDown = (event) => {
    // if (event.keyCode == 13){
    //     return 
    // }

    // console.log(event)
    console.log('handleKeyDown')
    // 输入 @ 或者 /
    if (event.key == '@') {
        checkedAgent.value = -1
        searchText.value = ''
        bottomShowList.value[preShowIndex.value] = false
        preShowIndex.value = -1
        bottomShow(1)
        searchAgent.value = true
        pos_alta.value = event.target.selectionStart
    } else if (event.key == '/') {
        bottomShowList.value[preShowIndex.value] = false
        preShowIndex.value = -1
        bottomShow(0)
    }

    // 点击删除键
    var deletedChar = ''
    if (event.keyCode == 8) { // for backspace key
        deletedChar = event.target.value[event.target.selectionStart - 1]
    } else if (event.keyCode == 46) { // for delete key
        deletedChar = event.target.value[event.target.selectionStart]
    }

    if (deletedChar == '@' && preShowIndex.value == 1) {
        // checkedAgent.value = -1
        // agentList.value = agentListOri
        bottomShow(1)
    } else if (deletedChar == '/' && preShowIndex.value == 0) {
        bottomShow(0)
    } else if (deletedChar == ' ' && checkedAgent.value != -1){
        let agentLen = 1 + agentList.value[checkedAgent.value].length
        let selectionStart = event.target.selectionStart + 1
        let rangeStr = event.target.value.slice(selectionStart-agentLen, selectionStart)
        // console.log(agentList.value[checkedAgent.value]['role'])
        // console.log(rangeStr.length, ('@'+agentList.value[checkedAgent.value]['role']+' ').length)
        // console.log(rangeStr, ('@'+agentList.value[checkedAgent.value]))
        if (rangeStr == '@'+agentList.value[checkedAgent.value]['role']+' '){
            searchAgent.value = true
            checkedAgent.value = -1
        }
    }
}

// 输入框回车激活submitComment
// 获得最终comment内容

const submitComment = async () => {  // 发表评论
    // console.log('submitComment', commentContent.value)


    // 检测是否有改动，有则提交修改
    submitArticle()
    // 内容为空，点击无效
    if (commentContent.value == '') {
        return ''
    }
    // console.log(checkedAgent.value)
    let prefix = '@'
    // let agentRole = checkedAgent.value.map(item => prefix + agentList.value[item]['role'])
    // agentRole = agentRole.join('->')
    // let agentRole = agentList.value[checkedAgent.value]['role']
    // return 
    let clipboard_ = checkedClipBoard.value.join(',')
    let commentContent_ = commentContent.value
    // let composedComment = agentRole + ' ' + clipboard_ + commentContent_
    let composedComment = clipboard_ + commentContent_
    let avatar = 'https://i2.hdslb.com/bfs/face/27ec942e8d4e6e024d3a9f11240d81a0aa90caca.jpg@60w_60h_1c.png'
    let username = '唐某人'
    let date = '08-11'
    let reply_cnt = 0
    // let cue_who = checkedAgent.value.map(item => agentList.value[item]['role'])
    let cue_who =  checkedAgent.value == -1 ? '' : agentList.value[checkedAgent.value]['role']
    let reply_to = articleId.value
    let reply_to_floor = -1
    let reply_to_username = '-1'

    let index_ = commentContentPlaceHolder.value.index
    if (commentListRef.value.length>0){
        setTimeout(() => {
            // console.log(index_,  commentListRef.value.length)
            if (index_==-1 ||index_+1 == commentListRef.value.length){
                // commentListRef.value.at(index_).scrollIntoView({behavior: 'smooth', block:'center'})
                bottomRef.value.scrollIntoView({behavior: 'smooth', block: 'center'})
            }
            else if (index_+1 < commentListRef.value.length){
                commentListRef.value.at(index_+1).scrollIntoView({behavior: 'smooth', block:'center'})
            }else{
                commentListRef.value.at(index_).scrollIntoView({behavior: 'smooth', block:'center'})
            }
        }, 200)
    }

    

    // 评论上传数据库，请求success，同时更新 names 和 reply_ids
    if (commentContentPlaceHolder.value.index == -1) {  //一级评论    
        let newCommentRes = await newComment({
            'username': '唐某人',
            'content': composedComment,
            'replyTo': reply_to,
            'isAgent': false,
            'avatar': avatar
        })

        let relation = Bmob.Relation('sub_comment') // 需要关联的表
        let relID = relation.add(newCommentRes.objectId) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
        let query = Bmob.Query('article')
        query.get(articleId.value).then(res => {
            res.set('comments', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
            res.save()
        })

        reply_ids.value.push([newCommentRes.objectId])
        names.value.push([username])
        commentsList.value.push({
            id: newCommentRes.objectId,
            avatar: avatar,
            username: username,
            content: composedComment,
            date: date,
            isAgent: false,
            reply_cnt: reply_cnt,
            reply_to: '-1',
            cue_who: cue_who,
            replay_to_floor: reply_to_floor,
            reply_to_username: reply_to_username,
            replys: [],
            ellipsisShow: true
        })
        articleCommentCnt.value += 1
    } else {                                              // 评论的子评论
        reply_to_floor = commentContentPlaceHolder.value.floor
        reply_to_username = commentContentPlaceHolder.value.comment.username
        reply_to = commentContentPlaceHolder.value.comment.id
        let newCommentRes = await newComment({
            'username': '唐某人',
            'content': composedComment,
            'replyTo': reply_to,
            'isAgent': false,
            'avatar': avatar
        })

        let relation = Bmob.Relation('sub_comment') // 需要关联的表
        let relID = relation.add(newCommentRes.objectId) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
        let query = Bmob.Query('sub_comment')
        query.get(reply_ids.value[commentContentPlaceHolder.value.index][0]).then(res => {
            res.set('replys', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
            res.save()
        })


        reply_ids.value[commentContentPlaceHolder.value.index].push(newCommentRes.objectId)
        names.value[commentContentPlaceHolder.value.index].push(username)
        commentsList.value[commentContentPlaceHolder.value.index].replys.push({
            id: newCommentRes.objectId,
            avatar: avatar,
            username: username,
            content: composedComment,
            reply_cnt: reply_cnt,
            isAgent: false,
            date: date,
            reply_to: reply_to,
            cue_who: cue_who,
            reply_to_floor: reply_to_floor,
            reply_to_username: reply_to_username,
            ellipsisShow: true
        })
        // 回复成功，当前评论的一级评论的子评论数量+1
        commentsList.value[commentContentPlaceHolder.value.index].reply_cnt += 1

        // setTimeout(() => {
        //     nextTick(() => {
        //         console.log(commentContentPlaceHolder.value.index,  commentListRef.value.length)
        //         if (commentContentPlaceHolder.value.index+1 < commentListRef.value.length){
        //             commentListRef.value.at(commentContentPlaceHolder.value.index+1).scrollIntoView({behavior: 'smooth', block:'center'})
        //         }else{
        //             commentListRef.value.at(commentContentPlaceHolder.value.index).scrollIntoView({behavior: 'smooth', block:'center'})
        //         }
                
        //     })
        // })
    }
    // console.log('回复成功', commentContentPlaceHolder.value.index, commentsList)


    // let agentContent = checkedAgent.value.map(item => agentList.value[item]['content'])
    let agentContent = checkedAgent.value == -1 ? '' : agentList.value[checkedAgent.value]['content']
    if (checkedAgent.value.length == 0 && agentListOri.value.map(item => item['role']).includes(commentContentPlaceHolder.value.comment.username)) {
        for (let i = 0; i < agentListOri.value.length; i++) {
            if (commentContentPlaceHolder.value.comment.username == agentListOri.value[i]['role']) {
                agentContent = [agentListOri.value[i]['content']]
                break
            }
        }
    }
    
    // let cnt = 0
    let last_reply_floor = reply_to_floor
    let messages = ref([])
    if (commentContentPlaceHolder.value.index != -1) {
        messages.value.push(
            { "role": "user", "content": composedComment },
        )
    }
    // let messages = ref([
    //     { "role": "user", "content": composedComment },
    // ])
    let tmp_reply = undefined
    while (last_reply_floor != 1 && last_reply_floor != -1) {
        // cnt = cnt + 1
        tmp_reply = commentsList.value[commentContentPlaceHolder.value.index].replys[last_reply_floor - 2]
        messages.value.push({
            "role": tmp_reply.isAgent ? "assistant" : "user", "content": tmp_reply.content
        })
        last_reply_floor = tmp_reply.reply_to_floor
        // console.log('last_reply_floor',last_reply_floor)
        // if (cnt > 10){
        //     break
        // }
    }
    // console.log(commentContentPlaceHolder)
    messages.value.push({
        "role": "user", "content": commentsList.value.at([commentContentPlaceHolder.value.index]).content
    },
        {
            "role": "system", "content": `${agentContent}\n标题：${article.value.title}\n描述：${article.value.description} `
        })
    messages.value.reverse()
    console.log(messages.value)
    // const messages = ref([
    //     { "role": "system", "content": `${agentContent[0]}\n标题：${article.value.title}\n描述：${article.value.description} ` },
    //     { "role": "user", "content": clipboard_ + '\n' + commentContent_ },
    // ])


    // 如果 @ 了agent，或者回复了agent的消息，需要agent做出回应
    // if (checkedAgent.value.length >= 1 || agentList.value.map(item => item['role']).includes(commentContentPlaceHolder.value.comment.username)) {
    if (checkedAgent.value != -1 || agentListOri.value.map(item => item['role']).includes(commentContentPlaceHolder.value.comment.username)) {
        
        llmResponse(messages)
    } else {
        
        // 重置 commentContentPlaceHolder，checkedClipBoard, checkboxRefsClipBoard, checkedAgent, checkboxRefsAgent
        checkedClipBoard.value = []
        checkboxRefsClipBoard.value = []
        // checkedAgent.value = []
        checkedAgent.value = -1
        searchAgent.value = false
        agentList.value = agentListOri.value
        checkboxRefsAgent.value = []
        // commentContentPlaceHolder.value = {
        //     content: '说点什么...',
        //     index: -1,
        //     floor: -1,
        //     comment: {}
        // }
        // 回复成功后默认继续回复agent的当前回复
        if (commentContentPlaceHolder.value.index == -1){
            replyComment(commentsList.value.length-1, 1, commentsList.value.at(-1))    
        }else{
            replyComment(commentContentPlaceHolder.value.index, commentsList.value[commentContentPlaceHolder.value.index].replys.length+1, commentsList.value[commentContentPlaceHolder.value.index].replys.at(-1))
        }
        // let agentFloor = reply_to_floor + 1 // commentsList.value[index].replys.length+1
        // replyComment(index, agentFloor, commentsList.value[index].replys[agentFloor - 2])
    }

    // 清理 commentContent，
    commentContent.value = ''

    // 重置 fromButton, preShowIndex, bottomShowList
    fromButton.value = false
    preShowIndex.value = -1
    bottomShowList.value = [false, false]
}

// const agentComment = ref('')
// agent 回复
const llmResponse = async (messages) => {
    // if (checkedAgent.value.length > 1) {
    //     // alert
    //     // console.log('目前仅支持同时@一个agent')
    //     return
    // }

    // 如果是@agent回复新建的一级评论
    let index = commentsList.value.length - 1
    let username = checkedAgent.value != -1 ? agentList.value[checkedAgent.value]['role'] : commentContentPlaceHolder.value.comment.username
    // let reply_id = ''
    let reply_to = commentsList.value[index].id
    let reply_to_floor = 1
    let reply_to_username = commentsList.value[index].username

    if (commentContentPlaceHolder.value.index != -1) {  // @agent 二级评论
        index = commentContentPlaceHolder.value.index
        // reply_id = ''
        let replys = commentsList.value[index].replys
        reply_to = replys[replys.length - 1].id,
            reply_to_floor = replys.length + 1
        reply_to_username = replys[replys.length - 1].username
    }
    // console.log('asdf')
    let { body, status } = await chat(messages.value, apiKey)

    commentsList.value[index].replys.push({
        // id: reply_id,
        avatar: 'https://avatars.githubusercontent.com/u/14957082?s=200&v=4',
        username: username,
        content: '思考中...',//llmResponse_.data.choices[0].message.content,
        date: '08-06',
        reply_to: reply_to,
        cue_who: [],
        reply_to_floor: reply_to_floor,
        reply_to_username: reply_to_username,
        ellipsisShow: false
    })
    // console.log('llm response')
    // 回复成功，当前评论的一级评论的子评论数量+1
    commentsList.value[index].reply_cnt += 1

    if (body) {
        let reader = body.getReader();
        await readStream(reader, status);
    }

    // newComment()

    let newCommentRes = await newComment({
        'username': username,
        'content': commentsList.value[index].replys.at(-1).content,
        'replyTo': reply_to,
        'isAgent': true,
        'avatar': 'https://avatars.githubusercontent.com/u/14957082?s=200&v=4'
    })
    commentsList.value[index].replys.at(-1).id = newCommentRes.objectId

    reply_ids.value[index].push(newCommentRes.objectId)
    names.value[index].push(username)

    let relation = Bmob.Relation('sub_comment') // 需要关联的表
    let relID = relation.add(newCommentRes.objectId) //关联表中需要关联的objectId, 返回一个Relation对象, add方法接受string和array的类型参数
    let query = Bmob.Query('sub_comment')
    // console.log(reply_ids.value, index)
    query.get(reply_ids.value[index][0]).then(res => {
        res.set('replys', relID); // 将Relation对象保存到two字段中，即实现了一对多的关联
        res.save()
    })

    // 重置 commentContentPlaceHolder，checkedClipBoard, checkboxRefsClipBoard, checkedAgent, checkboxRefsAgent, agentComment
    checkedClipBoard.value = []
    checkboxRefsClipBoard.value = []
    // checkedAgent.value = []
    checkedAgent.value = -1
    searchAgent.value = false
    agentList.value = agentListOri.value
    checkboxRefsAgent.value = []
    commentContentPlaceHolder.value = {
        content: '说点什么...',
        index: -1,
        floor: -1,
        comment: {}
    }

    // 回复成功后默认继续回复agent的当前回复
    let agentFloor = reply_to_floor + 1 // commentsList.value[index].replys.length+1
    // console.log('default replyComment after agent reply to user', agentFloor, commentsList.value[index].replys[agentFloor - 2])
    replyComment(index, agentFloor, commentsList.value[index].replys[agentFloor - 2])
}

const commentListRef = ref([])

const setCommentListRef = (el) => {
    // console.log(el)
    commentListRef.value.push(el)
    // console.log(commentListRef)
}



// 回复某个评论按钮
const commentContentPlaceHolder = ref({
    content: '说点什么...',
    index: -1,
    floor: -1,
    comment: {}
})
const replyComment = (index, floor, comment) => {
    // console.log(commentsList.value[0])
    // const commentRef_ = ref(commentsList.value[0].id)
    // commentRef_.value.$el.scrollIntoView({behavior: 'smooth'})
    // commentsList.value[0].id.scrollIntoView({behavior:'smooth'})
    // floor：第 floor 楼
    commentContentPlaceHolder.value = {
        content: `回复 ${floor}楼 ${comment.username}`,
        floor: floor,
        index: index,
        comment: comment
    }
    if (!isMobile){
        commentField.value.focus()  //聚焦到输入框
    }
    // console.log(commentContentPlaceHolder.value)
}

// 清除commentContentPlaceHolder按钮， 清除回复某个评论的 placeholder，直接成为一级评论
const clearReplyTo = () => {
    commentContentPlaceHolder.value = {
        content: '说点什么...',
        index: -1,
        floor: -1,
        comment: {}
    }
}


// if (isMobile) {
//   const inputElement = document.getElementById('input'); // 假设输入框的id为input
//   inputElement.addEventListener('focus', () => {
//     // 修改页面样式，将页面上移
//     document.body.style.transform = 'translateY(-200px)'; // 可根据实际情况调整上移的距离
//   });

//   inputElement.addEventListener('blur', () => {
//     // 恢复页面样式，取消上移
//     document.body.style.transform = 'translateY(0)';
//   });
// }

// 声明一个 ref 来存放该元素的引用
// 必须和模板里的 ref 同名
onMounted(() => {
    getCommentsList()
    getArticle()
    getAgent()

    // if ('ClipboardItem' in window) {
    //     navigator.clipboard.read().then((items) => {
    //     items.forEach((item) => {
    //         clipboardItems.value.push(item)
    //     })
    //     })
    // }
    // console.log('剪贴板历史', clipboardItems.value)
});


onBeforeUpdate(() => {
    checkboxRefsClipBoard.value = []
    commentListRef.value = []
    // checkboxRefsAgent.value = []
});


</script>


<style lang="less" scoped>
.note-detail-mask[data-v-024e536f] {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    overflow: auto;
}

.author[data-v-70c71a67] {
    display: flex;
}

.author[data-v-70c71a67] {
    display: none;
    background: #fff;
    height: 64px;
    position: -webkit-sticky;
    position: sticky;
    z-index: 5;
    top: 0;
}

.author[data-v-ebd8abd4] {
    padding: 12px;
}

.author .info[data-v-ebd8abd4] {
    padding-left: 48px;
}

.author .info[data-v-ebd8abd4] {
    display: flex;
    align-items: center;
}

.avatar[data-v-1d0a8701] {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    object-fit: cover;
}

a {
    text-decoration: none;
    background-color: transparent;
}

.author .name[data-v-ebd8abd4] {
    margin-left: 12px;
    font-weight: 500;
    font-size: 16px;
    color: #333;
}


// body,
// html {
//     font-size: 14px;
//     color: #333;
//     width: 100vw !important;
//     max-width: 100%;
//     font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, PingFang SC, PingFang TC, PingFang HK, Microsoft Yahei, Microsoft JhengHei;
//     margin: 0;
//     background-color: #fff;
//     -webkit-font-smoothing: antialiased;
// }
.author .follow[data-v-ebd8abd4] {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    width: 68px;
    height: 36px;
    // background: #ff2442;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}

.note-scroller[data-v-11b921ce] {
    overflow: initial;
}

.note-scroller[data-v-11b921ce] {
    transition: scroll .4s;
    overflow-y: scroll;
    flex-grow: 1;
}

.note-content[data-v-5245913a] {
    padding: 10px 14px 20px;
    margin: 0 5px;
    color: #333;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    // padding: 10px 0 0px;
}

.title[data-v-5245913a] {
    // margin-bottom: 20px;
    margin-top: 30px;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    // font-size: 15px;
    // line-height: 16px;
}

.desc[data-v-5245913a] {
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #333;
    // white-space: pre-wrap;
    overflow-wrap: break-word;
    // font-size: 13px;
    // line-height: 15px;
}

.tag[data-v-5245913a] {
    margin-right: 2px;
    color: #13386c;
}

.date[data-v-5245913a] {
    margin-top: 10px;
    font-size: 12px;
    line-height: 24px;
    color: rgba(51, 51, 51, 0.6);
}

.comments-el[data-v-6b20f11f] {
    position: relative;
}

.comments-container[data-v-6b20f11f] {
    // padding: 20px 30px;
    // padding: 0px 20px;
    padding: 0px 20px 150px 20px;
}

.total[data-v-6b20f11f] {
    font-size: 14px;
    line-height: 18px;
    color: rgba(51, 51, 51, 0.6);
    // font-size: 11px;
    // line-height: 15px;
}

.list-container[data-v-6b20f11f] {
    position: relative;
}

.comment-inner-container[data-v-67377e58] {
    position: relative;
    display: flex;
    z-index: 1;
    width: 100%;
    flex-shrink: 0;
}

.note-scroller {
    transition: scroll .4s;
    overflow-y: scroll;
    flex-grow: 1;
}

// .note-content {
//     padding: 10px 0 20px;
//     margin: 0 30px;
//     color: #333;
//     border-bottom: 1px solid rgba(0, 0, 0, 0.08);
// }

// .desc {
//     margin: 0;
//     font-weight: 400;
//     font-size: 16px;
//     line-height: 28px;
//     color: #333;
//     white-space: pre-wrap;
//     overflow-wrap: break-word;
// }

// .total[data-v-6b20f11f] {
//     font-size: 14px;
//     line-height: 18px;
//     color: rgba(51, 51, 51, 0.6);
// }

.list-container[data-v-6b20f11f] {
    position: relative;
}

.comment-item[data-v-67377e58] {
    position: relative;
    display: flex;
    margin-top: 12px;
}

.comment-inner-container[data-v-67377e58] {
    position: relative;
    display: flex;
    z-index: 1;
    width: 100%;
    flex-shrink: 0;
}

.note-scroller[data-v-11b921ce][data-v-d21d8bf9] {
    transition: scroll 0.4s;
    overflow-y: scroll;
    flex-grow: 1;
}

.note-scroller[data-v-11b921ce][data-v-d21d8bf9] {
    overflow: initial;
}

.author[data-v-ebd8abd4] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 20px 24px;
    border-bottom: 1px solid transparent;
}

.note-scroller[data-v-d21d8bf9] {
    transition: scroll 0.4s;
    overflow-y: scroll;
    flex-grow: 1;
}

// .interactions[data-v-11b921ce][data-v-d21d8bf9] {
//     flex-shrink: 0;
//     padding: 3vw 6vw 6vw;
//     height: 35.5vw;
//     border-top: 1px solid rgba(0, 0, 0, 0.08);
//     flex-basis: 32.5vw;
//     background-color: #fff;
//     z-index: 1;
// }


.interactions[data-v-11b921ce] {
    // flex-shrink: 0;
    // padding: 12px 24px 24px;
    // height: 142px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    flex-basis: 130px;
    background-color: #fff;
    z-index: 1;
    padding: 12px 12px 30px;
}

.interactions[data-v-11b921ce] {
    // position: -webkit-sticky;
    // position: sticky;
    bottom: 0;
    position: absolute;
    width: 100%;
}

.buttons[data-v-36e1f3e7] {
    display: flex;
    justify-content: space-between;
}

.buttons .left[data-v-36e1f3e7] {
    display: flex;
}

.like-wrapper[data-v-809eb46a] {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.like-lottie[data-v-809eb46a] {
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(1.7);
}

.reds-icon[data-v-7c2d5134] {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
}

.collect-wrapper[data-v-ffc64454] {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: rgba(51, 51, 51, 0.6);
}

.collect-icon[data-v-ffc64454],
.count[data-v-ffc64454] {
    color: #333;
}

.reds-icon[data-v-7c2d5134] {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
}

.buttons[data-v-36e1f3e7] .count {
    margin-left: 6px;
    margin-right: 12px;
    font-weight: 500;
    font-size: 12px;
}

// .reds-icon[data-v-7c2d5134] {
//     display: inline-block;
//     vertical-align: middle;
//     fill: currentColor;
// }

.buttons[data-v-36e1f3e7] .count {
    margin-left: 6px;
    margin-right: 12px;
    font-weight: 500;
    font-size: 12px;
}

.buttons .share-wrapper[data-v-36e1f3e7] {
    position: relative;
}

.buttons .share-icon[data-v-36e1f3e7] {
    cursor: pointer;
    color: #333;
}

.reds-icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
}

// .comment-comp[data-v-e223d0aa] {
//     margin-top: 20px;
// }

.comment-wrapper[data-v-e6930618] {
    display: flex;
    font-size: 16px;
    overflow: hidden;
}

.show-more[data-v-6b20f11f] {
    margin-left: 32px;
    margin-top: 16px;
    line-height: 18px;
    color: #1989FA;
    cursor: pointer;
}

.mention-select-container.close[data-v-e6930618] {
    opacity: 0;
    z-index: -1;
    transform: translate(-19px, -100%);
    animation: mention-hide-e6930618 .2s;
}

.mention-select-container[data-v-e6930618] {
    position: absolute;
    width: 376px;
    height: 160px;
    padding: 20px 16px;
    background: #fff;
    box-shadow: 0 4px 32px 0 rgba(0, 0, 0, 0.06), 0 1px 4px 0 rgba(0, 0, 0, 0.03);
    border-radius: 12px;
    overflow: auto;
    display: none;
}

.input-wrapper[data-v-e6930618] {
    display: flex;
    position: relative;
    width: 100%;
    flex-shrink: 0;
    transition: flex .3s;
}

// .comment-input[data-v-e6930618]:placeholder-shown {
//     background-image: none;
//     padding: 12px 92px 12px 36px;
//     background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAANlBMVEUAAAA0NDQyMjIzMzM2NjY2NjYyMjI0NDQ1NTU1NTUzMzM1NTU1NTUzMzM1NTUzMzM1NTU1NTVl84gVAAAAEnRSTlMAmUyGEzlgc2AmfRx9aToKQzCSoXt+AAAAhElEQVRIx+3Uuw6DMAyF4XOcBOdCafv+L9vQkQFyJBak/JOHT7K8GLM7epuHusRhHwP/mejJ77i32CpZh33aD+lDFDzgZFE8+tgUv5BB9NxEb9NPL3i46JvoUUhXPBKZFQ/rTPHI3ZXt8xr12KX055LoAVtXz9kKHprxNMMxXqRvmAn9ACQ7A/tTXYAxAAAAAElFTkSuQmCC);
//     background-repeat: no-repeat;
//     background-size: 16px 16px;
//     background-position: 16px 12px;
//     color: rgba(51, 51, 51, 0.3);
// }

.comment-input[data-v-e6930618] {
    padding: 12px 92px 12px 16px;
    width: 100%;
    height: 40px;
    line-height: 16px;
    background: rgba(0, 0, 0, 0.03);
    caret-color: rgba(51, 51, 51, 0.3);
    border-radius: 22px;
    border: none;
    outline: none;
    resize: none;
    color: #333;
}

.input-buttons[data-v-e6930618] {
    // position: absolute;
    right: 0;
    top: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    // width: 92px;
    color: rgba(51, 51, 51, 0.3);
}


.reds-icon {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
}

.input-buttons .reds-icon {
    margin: 0 6px;
    cursor: pointer;
    transition: all .2s;
}

.submit[data-v-e6930618] {
    margin-left: 8px;
    width: 60px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    flex-shrink: 0;
    background: #3d8af5;
    border-radius: 44px;
    font-size: 16px;
}

button {
    padding: 0;
}

.close-box[data-v-237ed470] {
    display: flex;
}

.close-box[data-v-237ed470] {
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: #fff;
    color: rgba(51, 51, 51, 0.8);
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    margin: 12px;
    z-index: 5;
}

.note-content-emoji {
    margin: 0 1px;
    height: 16px;
    transform: translateY(2px);
}

img {
    border-style: none;
}

.buttons .chat-wrapper[data-v-36e1f3e7] {
    cursor: pointer;
    color: #333;
}

.avatar[data-v-67377e58] {
    flex: 0 0 auto;
}

.avatar[data-v-1d0a8701] {
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.08);
    object-fit: cover;
}

.right[data-v-67377e58] {
    // margin-left: 12px;
    // padding-bottom: 16px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    flex-grow: 1;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.author-wrapper[data-v-67377e58] {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.author[data-v-67377e58] {
    display: flex;
    align-items: center;
}

.name[data-v-67377e58] {
    color: rgba(51, 51, 51, 0.6);
    line-height: 18px;
}

.content[data-v-67377e58] {
    margin-top: 5px;
    line-height: 22px;
    color: #333;
}

.labels[data-v-67377e58] {
    margin-top: 4px;
}

.info[data-v-67377e58] {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    font-size: 12px;
    color: rgba(51, 51, 51, 0.6);
    line-height: 16px;
}

.location[data-v-67377e58] {
    margin-left: 5px;
}

.interactions[data-v-67377e58] {
    display: flex;
}

.like-wrapper[data-v-809eb46a] {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.like-lottie[data-v-809eb46a] {
    position: absolute;
    left: 0;
    top: 0;
    transform: scale(1.7);
}

.reds-icon[data-v-7c2d5134] {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
}

.count {
    margin-left: 4px;
}

// .comment-floor {
//     margin-left;
// }
.reply[data-v-67377e58] {
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.icon-container[data-v-67377e58] {
    color: rgba(51, 51, 51, 0.6);
}

[data-v-956360f6] .close-box {
    top: 72px;
}

.close-box[data-v-237ed470] {
    display: flex;
}

.close-box[data-v-237ed470] {
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: #fff;
    color: rgba(51, 51, 51, 0.8);
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    margin: 12px;
    z-index: 5;
}

.reds-icon[data-v-7c2d5134] {
    display: inline-block;
    vertical-align: middle;
    fill: currentColor;
}

[data-v-956360f6] .note-container {
    box-shadow: none;
    transition: height .6s;
}

.note-container[data-v-70c71a67] {
    box-shadow: none;
    height: 100%;
    width: 100%;
    border-radius: 0;
    border: 0;
    flex-direction: column;
    overflow: scroll;
    transition: none;
}

// .note-container[data-v-70c71a67] {
//     display: flex;
//     border: 1px solid var(--color-border);
//     box-shadow: var(--elevation-note-shadow);
//     border-radius: 20px;
//     background: var(--elevation-note-background);
//     transform-origin: left top;
// }

/* 添加这段样式后，Primary Button 会变成红色 */
// :root:root {
//     --van-popup-round-radius: 2px;
// }

.van-text-ellipsis /deep/ .van-text-ellipsis__action {
    cursor: pointer;
    color: rgb(19, 56, 108);
}

.van-cell:not(:last-child)::after {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
    top: 0;
}

.github-markdown-body {
    // padding: 16px 32px 32px;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    line-height: 1.5;
    word-wrap: break-word;
    padding: 0px;
}

// .van-text-ellipsis {
//     line-height: var(--van-text-ellipsis-line-height);
//     // white-space: pre-wrap;
//     word-break: break-word;
// }
// :root {
// --van-nav-bar-text-color: red;
// }</style>

