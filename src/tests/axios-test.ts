/**
 * axios 패키지 테스트 파일
 * 
 * 실행 방법: npm run run:test src/tests/axios-test.ts
 * 
 * 참고: 이 파일을 실행하기 전에 axios를 설치해야 합니다.
 * npm install axios
 */

// 필요한 경우 여기에 axios를 import 합니다
import axios from 'axios';

async function testAxios() {
   try {
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
     console.log(response.data);
   } catch (error) {
     console.error('Error:', error);
   }
 }
 
testAxios();    