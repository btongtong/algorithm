// 장점: 이해와 구현이 간단
// 단점: 성능이 좋지 않음

function SelectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let minValueIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[minValueIndex] > arr[j]) {
                minValueIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minValueIndex];
        arr[minValueIndex] = temp;
    }
}

let arr = [4, 2, 1, 3];

console.log("=== 정렬 전 ===");
console.log(arr);

SelectionSort(arr);

console.log("=== 정렬 후 ===");
console.log(arr);