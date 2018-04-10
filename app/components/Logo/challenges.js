
//Chunky Monkey

function chunkArrayInGroups(arr, size) {
  // Break it up.
  
   var group = [];
  var position = 0;
  
  while(position < arr.length) {
    group.push(arr.slice(position, position+=size));
  }
  return group;
 
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);