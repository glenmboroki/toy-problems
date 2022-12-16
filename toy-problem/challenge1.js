// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
 // marks is a global variable
 let marks;  
     
 function grade(){
 //  assigning marks variable a vlaue
     marks= parseInt(Grade.txtnum.value)
//    Arguments of the function
     if (marks >=79 && marks <= 100){
     console.log("A")
    }
      else if (marks >=60 && marks <= 78){
     console.log("B")
    }else if (marks >=49 && marks <= 59){
     console.log("C")
    }else if (marks >=40 && marks <= 49){
     console.log("D")
    }else if (marks >=0 && marks <= 39){
     console.log("E")
    }else if( marks> 100){
     console.log("Please input a valid value")
    }
 }