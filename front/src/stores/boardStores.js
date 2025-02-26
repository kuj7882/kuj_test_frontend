import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api"; // API URL을 환경 변수나 더 유연하게 관리할 수 있다면 좋습니다.

export const boardStores = defineStore("board", {
  state: () => ({
    boards: [],
    board: {},
    comments: [],
  }),
  actions: {
    // 게시판 목록을 가져오는 함수
    async getBoards() {
      try {
        const response = await axios.get(backend + "/board");
        this.boards = response.data;
      } catch (error) {
        console.error("게시판 목록을 가져오는 중 오류 발생:", error);
      }
    },

    // 특정 게시판을 가져오는 함수
    async getBoard(id) {
      try {
        const response = await axios.get(backend + "/board/" + id);
        this.board = response.data;
      } catch (error) {
        console.error(`게시판 ${id}를 가져오는 중 오류 발생:`, error);
      }
    },

    // 특정 게시판의 댓글을 가져오는 함수
    async getComments(id) {
      try {
        const response = await axios.get(backend + "/board/" + id + "/comment");
        this.comments = response.data;
      } catch (error) {
        console.error(`게시판 ${id}의 댓글을 가져오는 중 오류 발생:`, error);
      }
    },
  },
});
