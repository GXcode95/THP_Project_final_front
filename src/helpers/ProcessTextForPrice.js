const processTextToPrice = (text , quantity = 1, total = "0.0", addOrRemove = 1) => {
  let centNum = parseInt(text.split(".").join(""))
  let totalNum
  if (total.split(".")[1].length <2){
    totalNum = parseInt(total.split(".").join("") + "0")
  }else{
    totalNum = parseInt(total.split(".").join(""))
  }
  let stringNum = `${centNum*quantity*addOrRemove + totalNum}`
  let decimals = stringNum.slice(-2)
  let integer = stringNum.slice(0,stringNum.length-2)? stringNum.slice(0,stringNum.length-2) : "0"
  let finalString = integer + "." + decimals

  return finalString
}
  
export default processTextToPrice