// var age = 32;
// switch (true){
//     case (age >= 1  && age <= 17):
//     console.log("You are underage");
//     break;
  
//     case (age >= 18 && age <= 30):
//     console.log("You are eligible ");
//     break; 
    
//     default:
//     console.log("Enter Age");
//     break;    
// }

// const isEligible = (a) => {
//     switch(true){
//     case(a<=17):
//     console.log("You are not eligible");
//     return(a);
//     break;
//     case(a>=18):
//     console.log("You are eligible");

//     }
//   };
// const isEligible = (a) => {
// if(a<=17){
//   var c="You are not eligible;"
//   return (c);
// }
// else{
//     var d=("You are eligible");
//     return d;
// }
// }

// const findRelation = (x,y) =>{
//     if(x<y){
//        return ("x is greater than y")
//     }
//     else if(x>y){
//         return("x is greater than y") 
//      }
//      else if(x=y){
//         return("x is equal to y") 
//      }
//      else{
//       return("Enter Valid Numbers")
//      }
// };



// const findGrades = (a) => {
//     switch(true){
//       case (a<=10):
//       var E="E"
//         return (E);
//         break;
//         case (a<=20 && a>=11):
//          var D="D"
//         return(D);
//         break;
//         case (a<=30 && a>=21):
//          var C="C"
//         return(C);
//         break;
//         case (a<=40 && a>=31):
//          var B="B"
//         return(B);
//         break;
//         case (a<=50 && a>=41):
//          var A="A"
//         return(A);
//         break;      
//     }  
//   };



// const getValue = (a) => 
// {
// var C;
// var P="Prepebytes";
// if(C=P){
//    console.log("Prepbytes");
// }
// else{
//    console.log("sorry");
// }
// };
// console.log(typeof P)


// const Max_out_of_three = (X,Y,Z) => {

//    if(X<Y<Z){
//       return(Y);
//    }
//    else if(Y<Z<X){
//       return(Z);
//    }
//    else if(Z<X<Y){
//       return (X);
//    }
//    else{
//       console.log("Enter Three Numbers")
//    }
// };



const getValue = (a) => {
    switch(a){
      case 'P':
        var Prep="PrepBytes";
        return(Prep);
        break;
        case"p":
          var prep="PrepBytes";
          return(prep);
          break;
          case"Z":
            var Zen="Zenith";
            return(Zen);
            break;
            case"z":
              var zen="Zenith";
              return(zen);
              break;
              case"E":
                var Exp="Expert Coder";
                return(Exp);
                break;
                case"e":
                  var exp="Expert Coder";
                  return(exp);
                  break;
                  case"D":
                    var Data="Data Structure";
                    return(Data);
                    break;
                    case"d":
                      var data="Data Structure";
                      return(data);
                      break;
                    default:
                    var def="Enter a Valid Keyword";
                    return(def);
                    break;
    }
};