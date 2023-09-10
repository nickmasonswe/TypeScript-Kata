 
 
 /* Given two crystal balls that will break if dropped from high enough distance, determine the exact floor height in which it will break, in the most optimized 
  way. */


  //Well, with two, one can take bigger steps, and then we can go to last known position and walk linearly from there. i.e.: it breaks on floor 4, so we would need to go to the last known position that it didn't break, say floor 2, and start from one above that. 
  
  //Immedeiately might think oh, do binary search, but say its 100 floors and breaks at 50. You would have to go all the way to 0 and walk linearly, possibly all the way to 50.



export default function two_crystal_balls(breaks: boolean[]): number {
// We can use the sqrt of N to jump sqrt N stairs, and if the first ball breaks, we will only have to go back one sqrtN jump and walk from there. (Cube and 4thRoot will be too small, approaching simply N, linear time. )
//Can think of the building or height as an array, filled with 0's for not breaking floors, and 1's for breaking floors. We want the first instance of a floor break.

    //make jump square root of breaks array
    const jump = Math.floor(Math.sqrt(breaks.length));
    //declare i to be jump
    let i = jump;
    //loop and jump square root amount
    for(; i < breaks.length; i+=jump) {
        //if current el is truthy,break the loop.
        if(breaks[i]) {
            break;
        }    
    }
    //walk back square root of n (last known safe place) and go one by one from there.
        i-=jump;
        //loop again, up to jump number of times, increment j for each single step and i to continue to track the floor you're on. 
        for(let j = 0; j < jump; j++, i++) {
            //once the element is truthy return the index
            if(breaks[i]) return i;
        }
        //return -1 if not found in the last portion of the loop. means we checked every single one of the highest floors in the last jump going linearly. 
        return -1;
}