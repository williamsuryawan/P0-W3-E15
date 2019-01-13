function groupAnimals(arr) {
  var zoo =[];

  for (var i =0;i<arr.length;i++){
    var cage =[];
    var isExist=false;
    for (j=0;j<zoo.length;j++){
      if(zoo[j][0][0]===arr[i][0]){
        zoo[j].push(arr[i])
        isExist=true
      }
    }
    if(isExist===false){
      cage.push(arr[i])
      zoo.push(cage);
    }

  }
  return zoo.sort()
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]