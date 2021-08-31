
const Number = Array(10).fill(false); 
// 0 ~ 9까지 중복되지 않게 해주는 장치

let question = '';
while (question.length < 4) {
    const random = parseInt(Math.random()*10) // 0 ~ 9까지
    if (Number[random]===false){
        question += random;
        Number[random] = true;
    }
}
console.log(question);

function solution(test) {
    let strike = [];
    let x = String(test).split(''); 
    // test가 0으로 시작될시 0이 없어지는 오류 방지하기 위해 문자열 변환
    let qes = String(question).split('')


    for(let i=0; i<4; i++){
        if(qes[i] == x[i]) {
            strike.push(x[i]);
          /*  x.splice(i, 1);
            qes.splice(i, 1); 
            배열이 줄어듬으로 2,3,4 값 추출이 안됨
          */ 
        } 
    }
    let ballFilter = [];
    ballFilter = x.filter(a => !strike.includes(a))
    ballFilter = ballFilter.filter(a => qes.includes(a)) 

let answer = strike.length;
let answer2 = ballFilter.length;
return answer + ` strike!` + answer2 + ` ball!`;
}





