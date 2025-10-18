var isSubsequence = function(s, t) {
    var sSplited = s.split("")
    var tSplited = t.split("")
    var result = []
    
    for (var i = 0; i < sSplited.length; i++) {
        for (var j = 0; j < tSplited.length; j++) {
            if (tSplited[j] !== sSplited[i + 1]) {
              if (sSplited[i] === tSplited[j]){
                  result.push(sSplited[i]) 
                  break
              }
            }
            else{
                return false
            }
        }
    }
    return true
};
console.log(isSubsequence("acg", "ahbgdc"))
