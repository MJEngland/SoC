function sort(arr){
  const length = arr.length;
  for(let i=0; i<length; i++){
    for(let j=i+1; j<length; j++){
      if(arr[j]<arr[i]){
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
    console.log(arr)
  }
  return arr;
}
