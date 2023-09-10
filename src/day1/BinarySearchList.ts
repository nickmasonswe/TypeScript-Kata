

// https://leetcode.com/explore/learn/card/binary-search/138/background/



export default function bs_list(haystack: number[], needle: number, lo: number = 0, hi: number = haystack.length): boolean {
    //Recursive Version:
    //set a lo and a hi inside of the argument list as default paramaters.

    //set a middle using the formula.
    let middle = Math.floor(lo+(hi-lo)/2);
    //set current.
    let current = haystack[middle];
    //set basecase if needle equals current ret true
    if(needle === current) return true;
    //set basecase, if lo > hi return false
    if(lo>=hi) return false;
    //carry out recursive logic:
    //if needle is less than current, make hi the middle and recurse.
    if(needle < current) {
        hi = middle;
    }
    //if needle is greater than current, make lo the middle+1 and recurse.  
        else if(needle > current) {lo = middle+1;}

    return bs_list(haystack,needle,lo,hi);
}
//Seems like I have to use lo>=hi for recursive base case but not for iterative. 
// //Iterative Version:
    //set a lo and a hi
    // let lo: number = 0;
    // let hi: number = haystack.length;
    // //while loop, condition is if lo is greater than hi.
    // while(lo < hi) {
    //     //set a middle, formula: the floor of (lo + (lo-hi)/2)
    //     let middle: number = Math.floor(lo + (hi-lo)/2);
    //     //set a current (middle element of haystack)
    //     let current: number = haystack[middle];
    //     //if current equals needle return true;
    //     if(needle === current) return true;
    //     //if needle greater than current, move the lo index to one more than current value, since its been checked.
    //     if(needle > current) {
    //         lo = middle+1;
    //     } 
    //     //if needle is less than current, move the hi to the middle (hi is always exlusive so no +1, or this element will never be checked).
    //     else if(needle < current) {
    //         hi = middle; //because our high is exclusive, we don't check that index
    //     }
    // } 
    //    //if lo index is ever greater than hi index/ needle not found, return -1. 
    //    return false;
