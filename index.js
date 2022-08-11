/*
function LengthConverter(valNum) {
    document.getElementById("outputFeet").innerHTML= Number((valNum)*3.2808).toFixed(3);
    document.getElementById("outputMeters").innerHTML= Number((valNum)/3.2808).toFixed(3);
    document.getElementById("outputGallons").innerHTML= Number((valNum)*0.264).toFixed(3);
    document.getElementById("outputLiters").innerHTML= Number((valNum)/0.264).toFixed(3);
    document.getElementById("outputPounds").innerHTML= Number((valNum)*2.204).toFixed(3);
    document.getElementById("outputKilos").innerHTML= Number((valNum)/2.204).toFixed(3);
    
    document.getElementById("outputNumbers").innerHTML= valNum;

  } */


  let convertBtn = document.getElementById("convert-btn")
  let inputEl = document.getElementById("input")
  let lengthEl = document.getElementById("length-el")
  let lengthElFirst = document.getElementById("length-el-1")
  let lengthElSecond = document.getElementById("length-el-2")

  
  const meterToFeet =  3.281
  const literToGallon =  0.264
  const kiloToPound =  2.204
  
  convertBtn.addEventListener("click", function() {
      let baseValue = inputEl.value
      
      lengthEl.textContent = `${baseValue} meters = ${ Number(baseValue * meterToFeet).toFixed(3)} feet | 
      ${(baseValue)} feet = ${ Number(baseValue / meterToFeet).toFixed(3)}meters` 


      lengthElFirst.textContent = `${baseValue} liters = ${ Number(baseValue * literToGallon).toFixed(3)} gallons | 
      ${(baseValue)} gallons = ${Number(baseValue / literToGallon).toFixed(3)} liters` 


      lengthElSecond.textContent = `${baseValue} kilos = ${Number(baseValue * kiloToPound).toFixed(3)} pounds | 
      ${(baseValue)} pounds = ${Number(baseValue / kiloToPound).toFixed(3)} kilos` 
 
 
  })






