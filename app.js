var solution = function(A) {
    var x = 0 //จุดเริ่มต้น
    var y = 0 //จุดเริ่มต้น
    var numDirections = 4 //สี่เหลี่ยม
    var places = {} //เก็บตำแหน่ง
    var step //
    var direction //ทิศทาง
    var res = []
    
    for (var i = 0, s = A.length; i < s; i ++) {
        step = A[i]
        direction = i % numDirections
        
        for (var ii = 0; ii < step; ii ++) {
            switch (direction) {
                case 0: y += 1; break //North
                case 1: x += 1; break //East
                case 2: y -= 1; break //South
                case 3: x -= 1; break //West
            }
            
            var position = x.toString() + y.toString()
            if (places[position]) { //ถ้าเจอตำแหน่ง
                return i + 1

            }
            places[position] = true

        }
    }

    return 0
}

/*var a = []
var arrayNumber = prompt("Please enter number of array", 9)
for (var i = 0; i < arrayNumber; i++) {
    a[i] = prompt("Please enter number ", 1)
}*/

//console.log(solution([1, 3, 2, 5, 4, 4, 6, 3, 2]))
//console.log(solution([1, 3, 3, 6, 4, 7, 3, 2, 1, 1]))
console.log(solution([1, 1, 1, 1]))
//console.log(solution([1, 1, 2, 1, 1, 2, 3, 4]))
//console.log(solution([1, 1, 2, 2, 2, 1]))
//console.log(solution([1, 1000000, 1, 999999, 2, 1111111]))
//console.log(solution(a))