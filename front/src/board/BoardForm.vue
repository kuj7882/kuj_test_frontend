<template>
    <div class="create-board-container">
      <h1 class="create-board-title">게시글 작성</h1>
      <form @submit.prevent="submitPost" class="create-board-form">
        <div class="form-group">
          <label for="title" class="form-label">게시글 제목</label>
          <input
            v-model="post.title"
            type="text"
            id="title"
            class="form-input"
            placeholder="게시글 제목을 입력하세요"
            required
          />
        </div>
        <div class="form-group">
          <label for="author" class="form-label">작성자</label>
          <input
            v-model="post.author"
            type="text"
            id="author"
            class="form-input"
            placeholder="작성자를 입력하세요"
            required
          />
        </div>
        <div class="form-group">
          <label for="content" class="form-label">내용</label>
          <textarea
            v-model="post.content"
            id="content"
            class="form-input"
            placeholder="게시글 내용을 입력하세요"
            rows="6"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-button">게시글 작성</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        post: {
          title: '',
          author: '',
          content: '',
        },
      };
    },
    methods: {
      submitPost() {
        // 게시글을 작성하는 API 호출 등 처리가 들어갑니다.
        console.log('게시글이 작성되었습니다:', this.post);
        alert('게시글이 작성되었습니다.');
        
        // 게시글 작성 후, 게시판 페이지로 리다이렉트
        this.$router.push({ name: 'BoardList' }); // 게시판 목록 페이지로 이동
      },
    },
  };
  </script>
  
  <style scoped>
  .create-board-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f4f4f9;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .create-board-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }
  
  .create-board-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    font-size: 1.1rem;
    color: #555;
    margin-bottom: 8px;
    display: block;
  }
  
  .form-input {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
  }
  
  .form-input:focus {
    outline: none;
    border-color: #4CAF50;
  }
  
  .submit-button {
    padding: 12px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  </style>
  