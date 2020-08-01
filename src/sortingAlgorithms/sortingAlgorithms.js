
//Merge Sort Operations:

export function getMergeSortAnimations(array) {

    const animations = [];
    if(array.length <= 1)
    return array;
    const counterArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, counterArray, animations);
    return animations;
}

function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    counterArray,
    animations,
) {

    if(startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(counterArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(counterArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, counterArray, animations);
}

function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    counterArray,
    animations,
) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while(i <= middleIdx && j <= endIdx)
    {

        animations.push([i,j]);

        animations.push([i,j]);
        if(counterArray[i] <= counterArray[j]){
        
            animations.push([k, counterArray[i]]);
            mainArray[k++] = counterArray[i++];
        }
        else{

            animations.push([k, counterArray[j]]);
            mainArray[k++] = counterArray[j++];
        }
    }

    while(i <= middleIdx){
    animations.push([i,i]);
    animations.push([i,i]);
    animations.push([k, counterArray[i] ]);    
    mainArray[k++] = counterArray[i++];
    }
    while(j <= endIdx){
    animations.push([j,j]);
    animations.push([j,j]);
    animations.push([k, counterArray[j] ]); 
    mainArray[k++] = counterArray[j++];
    }
}




//Quick Sort Operations:
export function getQuickSortAnimations(array) {

    const animation = [];
    if(array.length <= 1)
    return array;
    const counterArray = array.slice();
    quickSortHelper(array, 0, array.length - 1, animation);
    return animation;
}

function quickSortHelper(
    array,
    start,
    end,
    animation,
) { if (start >= end) {
    return;
  }
  let pivot = start,
      left = start + 1,
      right = end;
  while (right >= left) {
    if (array[right] < array[pivot] && array[left] > array[pivot]) {
      animation.push([left, right]);
      animation.push([left, right]);
      animation.push([left, right]);
      let temp = array[right];
      array[right] = array[left];
      array[left] = temp;
    }
    if (array[right] >= array[pivot]) {
      right--;
    }
    if (array[left] <= array[pivot]) {
      left++;
    }
  }
  if (pivot !== right) {
    let temp = array[right];
    array[right] = array[pivot];
    array[pivot] = temp;
    animation.push([pivot, right]);
    animation.push([pivot, right]);
    animation.push([pivot, right]);
  }
  quickSortHelper(array, start, right - 1, animation);
  quickSortHelper(array, right + 1, end, animation);
}


//Bubble Sort Operations:
export function getBubbleSortAnimations(array) {

    const animation = [];
    if(array.length <= 1)
    return array;
    const counterArray = array.slice();
    BubbleSortHelper(array, animation);
    return animation;
}

function BubbleSortHelper(
    array,
    animation
){
    let n = array.length;
    for(let i=0; i<n-1; i++)
    {
        for(let j=0; j<n-i-1; j++)
        {
            if(array[j]>array[j+1])
            {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animation.push([j, j+1]);
                animation.push([j, j+1]);
                animation.push([j, j+1]);
            }
        }
    }
}

export function Completed(
    array
) {
    for(let i=0; i<array.length-1; i++)
    {
        for(let j=0; j<array.length - i -1; j++)
        {
            if(array[j]>array[j+1])
            return false;
        }
    }
    return true;
}


export function getHeapSortAnimations(array) {

    const animation = [];
    HeapSortHelper(array, animation);
    return animation;
}
function HeapSortHelper(
    array,
    animation
) 
    { 
        let n = array.length; 
  
        // Build heap (rearrange array) 
        for (let i = n / 2 - 1; i >= 0; i--) 
            heapify(array, n, i, animation); 
  
        // One by one extract an element from heap 
        for (let i=n-1; i>0; i--) 
        { 
            // Move current root to end 
            let temp = array[0]; 
            array[0] = array[i]; 
            array[i] = temp; 
            animation.push([0, i]);
            animation.push([0, i]);
            animation.push([0, i]);
  
            // call max heapify on the reduced heap 
            heapify(array, i, 0, animation); 
        } 
    } 
    function heapify(array, n, i, animation) 
    { 
        let largest = i; // Initialize largest as root 
        let l = 2*i + 1; // left = 2*i + 1 
        let r = 2*i + 2; // right = 2*i + 2 
  
        // If left child is larger than root 
        if (l < n && array[l] > array[largest]) 
            largest = l; 
  
        // If right child is larger than largest so far 
        if (r < n && array[r] > array[largest]) 
            largest = r; 
  
        // If largest is not root 
        if (largest != i) 
        { 
            let swap = array[i]; 
            array[i] = array[largest]; 
            array[largest] = swap; 
            animation.push([i, largest]);
            animation.push([i, largest]);
            animation.push([i, largest]);
            // Recursively heapify the affected sub-tree 
            heapify(array, n, largest, animation); 
        } 
    } 