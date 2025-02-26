<template>
    <div class="comment-create-container">
      <h2 class="comment-create-title">댓글 작성</h2>
      <form @submit.prevent="submitComment" class="comment-create-form">
        <div class="form-group">
          <label for="author" class="form-label">작성자</label>
          <input
            v-model="comment.author"
            type="text"
            id="author"
            class="form-input"
            placeholder="작성자 이름을 입력하세요"
            required
          />
        </div>
        <div class="form-group">
          <label for="content" class="form-label">댓글 내용</label>
          <textarea
            v-model="comment.content"
            id="content"
            class="form-input"
            placeholder="댓글 내용을 입력하세요"
            rows="4"
            required
          ></textarea>
        </div>
        <div class="form-group">
          <button type="submit" class="submit-button">댓글 작성</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comment: {
          author: '',
          content: '',
        },
      };
    },
    methods: {
      submitComment() {
        // 댓글 데이터를 처리하는 로직 (API 호출 등)
        console.log('댓글이 작성되었습니다:', this.comment);
        alert('댓글이 작성되었습니다.');
        
        // 댓글 작성 후, 페이지 갱신 등 다른 처리
        this.$router.push({ name: 'BoardDetail', params: { id: this.$route.params.id } }); // 예시로 게시판 상세 페이지로 이동
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-create-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 30px;
    background-color: #f4f4f9;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .comment-create-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .comment-create-form {
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
  