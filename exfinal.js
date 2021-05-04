var snum = window.document.getElementById("txtnum")
var tab = window.document.getElementById('htmltabela')
var res = window.document.getElementById("res")
var valores = []

function isNumber(n){
    if (Number(n) >=1 && Number(n) <=100 ){
        return true
    }else {
        return false
    }
}

function inlista(n, v){
    if(v.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }    
}


function add() {
    if(isNumber(snum.value) && !inlista(snum.value, valores)) {
        //window.alert('TUDO CERTO')
        valores.push(Number(snum.value))
        let item = document.createElement('options')
        item.text = `O numero ${snum.value} foi adicionado`
        tab.appendChild(item)
    } else {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    snum.value = ``
    snum.focu()
}
