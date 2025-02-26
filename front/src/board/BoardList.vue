<template>
    <div class="container">
      <header></header>
      <table class="table">
        <thead class="thead-light">
          <tr class="text-center">
            <th scope="col">#</th>
            <th scope="col">제목</th>
            <th scope="col">작성자</th>
            <th scope="col">내용</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="post in postList" :key="post.id">
            <th scope="row">{{ post.id }}</th>
            <td>
              <a :href="'/post/' + post.id">
                {{ post.title }}
              </a>
            </td>
            <td>{{ post.author }}</td>
            <td>{{ post.content }}</td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col-auto mr-auto"></div>
        <div class="col-auto">
          <a class="btn btn-primary" href="/post" role="button">글쓰기</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        postList: []
      };
    },
    mounted() {
      this.fetchPosts();
    },
    methods: {
      fetchPosts() {
        axios
          .get('/api/board/posts') // 서버에서 게시글 목록을 가져오는 API 경로
          .then(response => {
            this.postList = response.data; // 서버에서 받은 데이터로 postList 갱신
          })
          .catch(error => {
            console.error('게시글을 가져오는 데 실패했습니다:', error);
          });
      }
    }
  };
  </script>
  
  <style scoped>
  /* 필요한 스타일을 여기에 작성 */
  </style>
  