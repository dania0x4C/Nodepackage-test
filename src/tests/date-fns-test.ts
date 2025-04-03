/**
 * date-fns 패키지 테스트 파일
 * 
 * 실행 방법: npm run run:test src/tests/date-fns-test.ts
 * 
 * 참고: 이 파일을 실행하기 전에 date-fns를 설치해야 합니다.
 * npm install date-fns
 */

// 필요한 경우 여기에 date-fns를 import 합니다
import { areIntervalsOverlapping, isAfter, isBefore, isExists, isFuture, isPast, isValid, parse } from 'date-fns';

async function testDateFns() {
    try {
        // date 객체가 유효한 날짜인지 확인 추가로 날짜 입력은 Date 객체만 가능
        console.log("isUndefined", isValid(undefined));// false
        console.log("isDateNull", isValid(null));// false
        console.log("isDateNow", isValid(new Date()));// true
        console.log("2025-02-31", isValid("2025-02-31"));// false
        console.log("isStringDate", isValid('2025-04-02'));//false

        // 날짜 포맷 확인 -> parse 함수는 날짜 포맷을 확인하고 날짜 객체인지, 유효한 시간인지 확인하는 함수
        console.log((parse('2025-04-02', 'yyyy-MM-dd', new Date()))); // true
        console.log(isValid(parse('2025-03-31', 'yyyy-MM-dd', new Date()))); // true
        console.log(isValid(parse('2025-02-28 12:00:00', 'yyyy-MM-dd HH:mm:ss', new Date()))); // true
        console.log(isValid(parse('2025-04-02', 'yyyy-mm-dd', new Date()))); // false
        console.log(isValid(parse('2025-03-31', 'yyyy-mm-dd', new Date()))); // false
        console.log(isValid(parse('2025-02-31 12:00:00', 'yyyy-MM-dd:HH:mm:ss', new Date()))); // false
        console.log(isValid(parse('2025-02-31', 'yyyy-mm-dd', new Date()))); // false
        
        //isFuture, isPast, isBefore, isAfter, areIntervalsOverlapping, isExists 함수
        console.log("isFuture", isFuture(new Date()));// false 현재 날짜가 미래인지 확인
        console.log("isFuture", isFuture(new Date('2025-04-05'))); // true
        console.log("isPast", isPast(new Date()));// false 현재 날짜가 과거인지 확인
        console.log("isPast", isPast(new Date('2025-04-02'))); // true
        console.log("isBefore", isBefore(new Date(), new Date()));// false a, b중 a가 뒤에 날짜인지 확인
        console.log("isAfter", isAfter(new Date(), new Date()));// false a, b중 a가 앞에 날짜인지 확인
        console.log("areIntervalsOverlapping", areIntervalsOverlapping(// 날짜 겹칩 확인
            { start: new Date('2025-01-01'), end: new Date('2025-01-10') },
            { start: new Date('2025-01-05'), end: new Date('2025-01-15') }
          )); // true
        console.log("isExists", isExists(2025, 1, 31)); // true
        console.log("isExists", isExists(2025, 2, 31)); // false

   } catch (error) {
     console.error('Error:', error);
   }
 }
 
testDateFns();    