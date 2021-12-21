   let sub1 = document.getElementById('sub1');
   let sub2 = document.getElementById('sub2');
   let sub3 = document.getElementById('sub3');
   let sub4 = document.getElementById('sub4');
   let result = document.getElementById('result');
   let para = document.getElementById('para');
   let status1 = document.getElementById('status');

   result.addEventListener('click',function () {
       let totalNumber = 400;
       eng =+ sub1.value;
       urdu =+ sub2.value;
       math =+ sub3.value;
       science =+ sub4.value;
     let  obtainedMarks = eng + urdu + math + science;
     let  percentage = obtainedMarks/totalNumber * 100;
     if (percentage >= 90 && percentage <= 100 ) {
         status1.innerText = 'your grade is A';
      } else if (percentage >= 80 && percentage <= 89 ) {
          status1.innerText = 'your grade is B';
      }else if (percentage >= 70 && percentage <= 79 ){
          status1.innerText = 'your grade is C'
      }else if (percentage >= 60 && percentage <= 69) {
        status1.innerText = 'your grade is D'
    }else if (percentage >= 50 && percentage <= 59) {
        status1.innerText = 'your grade is E'
    }else if (percentage >= 40 && percentage <= 49) {
        status1.innerText = 'your grade is F'
    }else if (percentage >= 33 && percentage <= 39) {
        status1.innerText = 'your grade is lower F'
    }else if (percentage < 33) {
        status1.innerText = ' FAIL ! try again next time'
    }
    else{
        status1.innerText = 'INVALID '
    }

     para.innerText = 'Out of ' + totalNumber + ' your obtained marks is ' + obtainedMarks 
     + ' and your percentage is ' + percentage + ' %';

   })