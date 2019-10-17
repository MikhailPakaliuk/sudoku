module.exports = function solveSudoku(matrix) {
  
  function zero_matrix(value){
    let result=0;
    for(let i=0;i<value.length;i++){
	    for(let j=0;j<value.length;j++){
		    if (value[i][j]==0){
		  	  result+=1;
		    }
	    }
    }
    return result;
  }
  
}
