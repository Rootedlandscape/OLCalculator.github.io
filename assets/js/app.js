function rangeChangeFunc(index_i, index_j, flag = false) {

    if (flag) {
        document.getElementById(`desc_${price_data[index_i].id}`).innerHTML = `<p>${price_data[index_i].list[index_j].desc}</p>`
        document.getElementById(`bg-img_${price_data[index_i].id}`).style.backgroundImage = `url(${price_data[index_i].list[index_j].image})`
    } else {
        document.getElementById(`desc_second_${price_data[index_i].id}`).innerHTML = `<p>${price_data[index_i].list[index_j].desc}</p>`
        document.getElementById(`back_${price_data[index_i].id}`).style.backgroundImage = `url(${price_data[index_i].list[index_j].image})`
    }

    radioOnChange(index_i, index_j)
}

function modalShow() {
    jQuery('#displayModal').toggle();
    itemRender()
}

function modalHide() {
    jQuery('#displayModal').hide();
}


let arrayToRender = []
let arrayToChecked = []
function itemRender() {
    document.getElementById("here").innerHTML = ''
    for (let i = 0; i < price_data.length; i++) {

        var optionsHTML = ""

        for (var j = 0; j < (price_data[i].list).length; j++) {
            var minValue = (price_data[i].list[j].min >= 1000) ? (price_data[i].list[j].min / 1000) + "k" : price_data[i].list[j].min
            var maxValue = (price_data[i].list[j].max >= 1000) ? (price_data[i].list[j].max / 1000) + "k" : price_data[i].list[j].max
            optionsHTML += `<div class="flex-fill">
            <input type="radio" class="radioButton" name="button_${price_data[i].id}" id="option_${price_data[i].id}_${j}" ${(j == 0) ? "checked" : ""} value="${price_data[i].id}" data-min="${price_data[i].list[j].min}" data-max="${price_data[i].list[j].max}" onchange="rangeChangeFunc(${i},${j},true); radioOnChange()">
            <label for="option_${price_data[i].id}_${j}" class="checkButton">
            ${minValue}-${maxValue}
            </label>
            </div>`
        }

        var flagForRemoveButton = arrayToRender.includes(i)
        document.getElementById("here").innerHTML += `<div id="add_${price_data[i].id}" class="cards">
            <div class="bg_img" id="bg-img_${price_data[i].id}" style="background-image:url(${price_data[i].list[0].image});">
                <div class="liteBackground">
                    <div class="textBackground">
                        <div>&nbsp;</div>
                        <div class="title"><p>${price_data[i].category}</p></div>
                        <div>&nbsp;</div>
                        <div id="desc_${price_data[i].id}" class="desc"><p>${price_data[i].list[0].desc}</p></div>
                    </div>
        
                    <div class="spaceBT" style="gap:5px">${optionsHTML}</div>
                </div>
            </div>
        
            <div>
            <button class="addButton" id="remove_pro_${price_data[i].id}" onclick="removeItem(${i})" ${(!flagForRemoveButton) ? 'style="display: none;"' : ""}>REMOVE PROJECT</button>
                <button class="addButton" id="add_pro_${price_data[i].id}" onclick="addItem(${i})" ${(flagForRemoveButton) ? 'style="display: none;"' : ""}>ADD PROJECT</button>
            </div>
        </div>`
    }


    document.getElementById("project_add_here").innerHTML = ''
    for (let k = 0; k < arrayToRender.length; k++) {

        let index = arrayToRender[k];

        var optionsHTML = "";
        var minValue = "";
        var maxValue = "";
        for (var j = 0; j < (price_data[index].list).length; j++) {

            minValue = (price_data[index].list[j].min >= 1000) ? (price_data[index].list[j].min / 1000) + "k" : price_data[index].list[j].min
            maxValue = (price_data[index].list[j].max >= 1000) ? (price_data[index].list[j].max / 1000) + "k" : price_data[index].list[j].max

            toCheckFlag = false
            arrayToChecked.forEach(element => {
                if (element.name == price_data[index].id && element.min == price_data[index].list[j].min && element.max == price_data[index].list[j].max) {
                    toCheckFlag = true
                }
            });

            optionsHTML += `<div class="flex-fill">
        <input type="radio" class="radioButton checkedInput" name="button_second_${price_data[index].id}" id="option_second_${price_data[index].id}_${j}" ${(j == 0 || toCheckFlag) ? "checked" : ""} value="${price_data[index].id}" data-min="${price_data[index].list[j].min}" data-max="${price_data[index].list[j].max}" onchange="rangeChangeFunc(${index},${j});radioOnChange()">
        <label for="option_second_${price_data[index].id}_${j}" class="checkButton">
        ${minValue}-${maxValue}
        </label>
        </div>`
        }

        //debugger
        document.getElementById("project_add_here").innerHTML += `<div class="cards">
    <div class="bg_img" id="back_${price_data[index].id}" style="background-image:url(${price_data[index].list[0].image});">
    <div class="liteBackground">
    <div class="textBackground">
    <div>&nbsp;</div>
    <div class="title"><p>${price_data[index].category}</p></div>
    <div>&nbsp;</div>
    <div class="desc" id="desc_second_${price_data[index].id}"><p>${price_data[index].list[0].desc}</p></div>
        </div>
    
        <div class="spaceBT" style="gap:5px">${optionsHTML}</div>
    </div>
    </div>
    
    <div>
<button class="addButton" id="remove_pro_second${price_data[index].id}" onclick="removeItem(${index})">REMOVE PROJECT</button>
</div>

</div>`;

    }

}



function radioOnChange() {
    arrayToChecked = []
    var inputClass = document.getElementsByClassName("checkedInput");
    for (var j = 0; j < inputClass.length; j++) {
        if (jQuery(inputClass[j]).is(':checked')) {
            arrayToChecked.push({
                name: inputClass[j].value,
                min: jQuery('input[name=' + inputClass[j].attributes.name.value + ']:checked').data('min'),
                max: jQuery('input[name=' + inputClass[j].attributes.name.value + ']:checked').data('max'),
            })
        }
    }
    calculateSum()
}

function calculateSum() {
    var minSumValue = 0
    var maxSumValue = 0
    for (var a = 0; a < arrayToRender.length; a++) {
        var index = arrayToRender[a]
        arrayToChecked.forEach(element => {
            if (element.name == price_data[index].id) {
                minSumValue += element.min
                maxSumValue += element.max
            }
        });
    }

    var monthly = (minSumValue / 48);
    monthly = monthly + (monthly * 0.09)
    document.getElementById("perMonth").innerHTML = `<p>or as low as <span style="color:#00C389;">$${monthly.toFixed(2)}</span>/month O.A.C.<p>`

    minSumValue = (minSumValue >= 1000) ? (minSumValue / 1000) + "k" : minSumValue
    maxSumValue = (maxSumValue >= 1000) ? (maxSumValue / 1000) + "k" : maxSumValue

    document.getElementById('minMaxRange').innerHTML = minSumValue + " - " + maxSumValue
}

function addItem(indexValue) {
    arrayToRender.push(indexValue);
    modalHide()
    itemRender()
    radioOnChange()
    document.getElementById("displayNone").style.display = 'none';
    document.getElementById("displayBlock").style.display = 'block';
}

function removeItem(indexValue) {
    //debugger
    let index = arrayToRender[indexValue]
    arrayToRender.splice(index, 1);
    itemRender()
    radioOnChange()
}
