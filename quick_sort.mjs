// 장점: 성능 좋음
// 단점: 이해와 구현 어려움

function QuickSort(arr, left, right) {
    if(left <= right) {
        let pivot = divide(arr, left, right);
        QuickSort(arr, left, pivot - 1);
        QuickSort(arr, pivot + 1, right);
    }
}

function divide(arr, left, right) {
    let pivot = arr[left];
    let leftStartIndex = left + 1;
    let rightStartIndex = right;

    while (leftStartIndex <= rightStartIndex) {
        while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
            leftStartIndex++;
        }
        while (rightStartIndex >= (left + 1) && pivot <= arr[rightStartIndex]) {
            rightStartIndex--;
        }

        if(leftStartIndex <= rightStartIndex) {
            swap(arr, leftStartIndex, rightStartIndex);
        }
    }

    swap(arr, left, rightStartIndex);
    return rightStartIndex;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let arr = [5, 3, 7, 2, 6, 4, 9, 1, 8];

console.log("=== 정렬 전 ===");
console.log(arr);

QuickSort(arr, 0, arr.length - 1);

console.log("=== 정렬 후 ===");
console.log(arr);