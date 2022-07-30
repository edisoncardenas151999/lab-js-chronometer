// class Chronometer {
//   constructor() {
//    this.currentTime = 0;
//    this.intervalId = null

//   }

//   start(printTimeCallback) {
//    this.intervalId = setInterval(()=>{
//     this.currentTime++;

//     if(printTimeCallback){
//       printTimeCallback()
//     }
    
//   },1000)
//    }
  
   
  

//   getMinutes() {
//    let  numOfMin = Math.floor(this.currentTime / 60)
//    return numOfMin
//   }

//   getSeconds() {
//    let numOfSecs = this.currentTime % 60
//    return numOfSecs
//   }

//   computeTwoDigitNumber(value) {
//     if(value < 10){
//       return "0" + value
//     }
    
//   return `${value}`
//   }
//   stop() {
//     clearInterval(this.intervalId)

//   }

//   reset() {
//    clearTimeout(this.currentTime = 0)
//   }

//   split() {
//     let minutes = this.computeTwoDigitNumber(this.getMinutes())
//     let seconds = this.computeTwoDigitNumber(this.getSeconds())

//     return `${minutes}:${seconds}`
    
//   }


// }

class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null

  }

  start(printTimeCallback) {
   this.intervalId = setInterval(()=>{
    this.currentTime++;

    if(printTimeCallback){
      printTimeCallback()
    }
    
  },10)
   }
  
   
  

  getMinutes() {
   let  numOfMin = Math.floor(this.currentTime / 6000) 
   return numOfMin
  }

  getSeconds() {
   let numOfSecs = Math.floor(this.currentTime / 100)  % 60 
     
   return numOfSecs 
  }
  getCentiseconds() {
    let numOfCenti =  this.currentTime % 100
    return numOfCenti
   }

  computeTwoDigitNumber(value) {
    if(value < 10){
      return "0" + value
    }
    
  return `${value}`
  }
  stop() {
    clearInterval(this.intervalId)

  }


  reset() {
   this.currentTime = 0
  }

  split() {
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds())
    let minutes = this.computeTwoDigitNumber(this.getMinutes())
    let seconds = this.computeTwoDigitNumber(this.getSeconds())

    return `${minutes}:${seconds}:${centiseconds}`
    
  }


}
