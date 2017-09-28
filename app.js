var solution = function(A, responseType = 'all') {
    var x = 0 //จุดเริ่มต้น
    var y = 0 //จุดเริ่มต้น
    var numDirections = 4 //สี่เหลี่ยม
    var places = {} //เก็บตำแหน่ง
    var step //
    var direction //ทิศทาง
    var res = []
    
    for (var i = 0, s = A.length; i < s; i += 1) {
        step = A[i]
        direction = i % numDirections
        
        for (var ii = 0; ii < step; ii += 1) {
            switch (direction) {
                case 0: y += 1; break //North
                case 1: x += 1; break //East
                case 2: y -= 1; break //South
                case 3: x -= 1; break //West
            }

            var position = x.toString() + y.toString()
            if (places[position]) { //ถ้าเจอตำแหน่ง
                if (responseType == 'first') {
                    return i + 1
                }

                res.push(i + 1)
            }

            places[position] = true
        }
    }

    return (responseType == 'first') ? 0 : res
}

/*var a = []
var arrayNumber = prompt("Please enter number of array", 9)
for (var i = 0; i < arrayNumber; i++) {
    a[i] = prompt("Please enter number ", 1)
}*/

var a = [1, 3, 2, 5, 4, 4, 6, 3, 2]
console.log(solution(a, 'first'))
//console.log(solution(a))