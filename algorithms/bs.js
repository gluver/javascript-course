//solution 1
// export default function binarySearch(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;
//     // if (arr[start] > target || arr[end] < target) {
//     //     return -1;
//     // }
//     while (start < end) {
//         let mid = start + Math.floor((end - start) / 2);
//         if (arr[mid] === target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             start = mid + 1;
//         }
//         else if (arr[mid] > target) {
//             end = mid - 1;
//         }
//         console.log(mid)
//     }
//     return -1;
// }
//recursive
export function binarySearch(arr,target,start=0,end=arr.length){
    if (start>end){
        console.log("value not found");
        return -1;
    }
    let mid = start + Math.floor((end-start)/2);
    if (arr[mid]===target){
        return mid;
    }
    else if(arr[mid]>target){
        end=mid-1
        return binarySearch(arr,target,start,end);
    }
    else if(arr[mid]<target){
        start=mid+1
        return binarySearch(arr,target,start,end)
    }
}
const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
console.log(binarySearch(arr, 'c'));

