/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// 当前模块，API进行统一管理，即对请求接口统一管理
import axios from "axios";

// 对axios二次封装
const requests = axios.create({
  timeout: 5000
});

// 获取轮播图数据的接口
export const getSwiperList = () => {
  return requests({
    url: "/swiperList",
    method: "get"
  });
};

// 获取频道菜单数据的接口
export const getNavList = () => {
  return requests({
    url: "/navList",
    method: "get"
  });
};

// 获取视频列表数据的接口
export const getVideosList = () => {
  return requests({
    url: "/videosList",
    method: "get"
  });
};

// 获取推荐列表数据的接口
export const getRecommendList = () => {
  return requests({
    url: "/recommendList",
    method: "get"
  });
};

// 获取评论列表数据的接口
export const getCommentsList = () => {
  return requests({
    url: "/commentsList",
    method: "get"
  });
};

export const getRedBookCommentsList = () => {
  return requests({
    url: "/redBookCommentsList",
    method: "get"
  }); 　
};

export const getCommentsReplyList = () => {
  return requests({
    url: "/commentsReplyList",
    method: "get"
  });
};

