//프로그래머스 1단계 문제
//https://programmers.co.kr/learn/courses/30/lessons/12912

/*
* 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
* 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  const [smaller, bigger] = a <= b ? [a, b] : [b, a];
  let sum = 0;

  for(let i=smaller; i<=bigger; i++) sum += i;
  return sum;
}