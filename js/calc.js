function addCalculation(areaType, areaValue){
    // console.log(areaType, areaValue);
    const areaEntry= document.getElementById('area-entry');
    const count=areaEntry.childElementCount;
    const li=document.createElement('li');
    li.innerHTML=`${count+1}. ${areaType} <div>${areaValue}</div> <button class="text-xs text-white bg-[#1090D8] p-2 rounded-md">Convert to m<sup>2</sup></button>`;
    li.classList.add('flex', 'justify-between', 'items-center', 'mb-3');
    areaEntry.appendChild(li);
}

function getInputValue(field) {
    const str = document.getElementById(field);
    const valueText = str.value;
    const value = parseFloat(valueText);
    return value;
}

function area(fieldx, fieldy, z = 1) {
    const x = getInputValue(fieldx);
    if(isNaN(x)){
        alert('Give ant valid numer');
        return 0;
    }
    const y = getInputValue(fieldy);
    if(isNaN(y)){
        alert('Give ant valid numer');
        return 0;
    }
    return (x * y * z).toFixed(2);
}

function triangle() {
    const areaText = document.getElementById('triangle-area');
    areaValue = area('triangle-base', 'triangle-height', 0.5);
    if(areaValue!==0){
        areaText.innerText = areaValue;
        addCalculation("Triangle", areaValue);
    }
}

function rectangle() {
    const areaText = document.getElementById('rectangle-area');
    areaValue = area('rectangle-base', 'rectangle-height');
    if(areaValue!==0){
        areaText.innerText = areaValue;
        addCalculation("Rectangle", areaValue);
    }
}

function parallelogram() {
    const areaText = document.getElementById('parallelogram-area');
    areaValue = area('parallelogram-base', 'parallelogram-height');
    if(areaValue!==0){
        areaText.innerText = areaValue;
        addCalculation("parallelogram", areaValue);
    }
}

function rhombus() {
    const areaText = document.getElementById('rhombus-area');
    areaValue = area('rhombus-base', 'rhombus-height', 0.5);
    if(areaValue!==0){
        areaText.innerText = areaValue;
        addCalculation("Rhombus", areaValue);
    }
}

function pentagon() {
    const areaText = document.getElementById('pentagon-area');
    areaValue = area('pentagon-base', 'pentagon-height', 0.5);
    if(areaValue!==0){
        areaText.innerText = areaValue;
        addCalculation("Pentagon", areaValue);
    }
}

function ellipse() {
    const areaText = document.getElementById('ellipse-area');
    areaValue = area('ellipse-base', 'ellipse-height', Math.PI);
    if(areaValue!==0){
        areaText.innerText = areaValue;
        addCalculation("Ellipse", areaValue);
    }
}