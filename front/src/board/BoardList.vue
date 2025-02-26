<template>
    <div class="board-container">
      <h1 class="board-title">게시판 리스트</h1>
      <div v-if="boardList.length === 0" class="no-data">
        <p>게시글이 없습니다.</p>
      </div>
      <ul class="board-list">
        <li v-for="post in boardList" :key="post.id" class="board-item">
          <div class="post-title">{{ post.title }}</div>
          <div class="post-meta">
            <span class="post-author">{{ post.author }}</span>
            <span class="post-date">{{ post.date }}</span>
          </div>
          <p class="post-description">{{ post.description }}</p>
          <button @click="BoardForm(post.id)" class="view-button">보기</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boardList: [
          { id: 1, title: '게시글 제목 1', author: '홍길동', date: '2025-02-26', description: '게시글 설명 1' },
          { id: 2, title: '게시글 제목 2', author: '김철수', date: '2025-02-25', description: '게시글 설명 2' },
          { id: 3, title: '게시글 제목 3', author: '이영희', date: '2025-02-24', description: '게시글 설명 3' },
        ]
      };
    },
    methods: {
      viewPost(postId) {
        alert(`게시글 ID: ${postId}의 상세 페이지로 이동합니다.`);
      }
    }
  };
  </script>
  
  <style scoped>
  .board-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .board-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  .no-data {
    text-align: center;
    color: #888;
  }
  
  .board-list {
    list-style-type: none;
    padding: 0;
  }
  
  .board-item {
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 25px;
    margin-bottom: 20px;
    border-radius: 10px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    width: 100%;
  }
  
  .board-item:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
  
  .post-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  
  .post-meta {
    font-size: 1.1rem;
    color: #777;
    margin-top: 8px;
  }
  
  .post-author {
    margin-right: 15px;
  }
  
  .post-date {
    color: #999;
  }
  
  .post-description {
    margin-top: 20px;
    font-size: 1.2rem;
    color: #555;
  }
  
  .view-button {
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
  }
  
  .view-button:hover {
    background-color: #45a049;
  }
  </style>
  