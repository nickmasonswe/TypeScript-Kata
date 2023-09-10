export default function bubble_sort(arr: number[]): void {
     //only use of the outside loop is to make sure we go all the way thru the length-1;
    for(let i = 0; i < arr.length-1; i++) {
        //the "real" loop for comparing. go thru length minus i bc no need to check already sorted values from previous loops.
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                //switch their places with a temp var
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}