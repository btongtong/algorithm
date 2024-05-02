// 계산했던 걸 중복으로 또 계산함 -> 비효율
function fibonacci1(n) {
    if(n == 0 || n == 1) return n;
    return fibonacci1(n - 2) + fibonacci1(n - 1);
}

// 메모이제이션(재귀: 복잡한 문제 직관전, 쉽게 해결 가능, 메모리 사용 많음)
// 햐향식 계산 방식, 중복 계산 안해서 속도 빠름
function fibonacci2(n, memo) {
    if(n == 0 || n == 1) return n;

    if(memo[n] == null) {
        memo[n] = fibonacci2(n - 2, memo) + fibonacci2(n - 1, memo);
    }

    return memo[n];
}

// 타뷸레이션
// 상향식 계산 방식, 계산에 필요한 모든 값 전부 계산 후 저장해 둠
function fibonacci3(n) {
    if(n <= 1) return n;

    let table = [0, 1];

    for(let i = 2; i <= n; i++) {
        table[i] = table[i - 2] + table[i - 1];
    }

    return table[n];
}

let start = new Date();
console.log(fibonacci1(40));
let end = new Date();
console.log(`fibonacci1 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci2(40, {}));
end = new Date();
console.log(`fibonacci2 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(fibonacci3(40));
end = new Date();
console.log(`fibonacci3 함수 실행시간: ${end - start}ms`);