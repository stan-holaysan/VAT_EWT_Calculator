function compute(){
    VAT_SALES = parseFloat(document.getElementById("vat_sales").value)
    VAT_EXEMPT = parseFloat(document.getElementById("vat_exempt").value)
    VAT_RATE = parseFloat(document.getElementById("vat_rate").value)
    EWT_RATE = parseFloat(document.getElementById("ewt_rate").value)

    VATABLE = VAT_SALES / 1 + VAT_RATE/100
    VAT_AMOUNT = VATABLE * VAT_RATE/100
    NET_OF_VAT = VATABLE + VAT_EXEMPT
    EWT_AMOUNT = (NET_OF_VAT * EWT_RATE) / 100
    TOTAL_AMOUNT_DUE = VAT_SALES + VAT_EXEMPT - EWT_AMOUNT

    document.getElementById("vatable").innerHTML = "VATABLE: <b>" + (Math.round((VATABLE + Number.EPSILON) * 100) / 100) + "</b>"
    document.getElementById("vat_amount").innerHTML = "VAT AMOUNT: <b>" + (Math.round((VAT_AMOUNT + Number.EPSILON) * 100) / 100)  + "</b>"
    document.getElementById("net_of_vat").innerHTML = "NET OF VAT: <b>" + (Math.round((NET_OF_VAT + Number.EPSILON) * 100) / 100)  + "</b>"
    document.getElementById("ewt_amount").innerHTML = "EWT AMOUNT: <b>" + (Math.round((EWT_AMOUNT + Number.EPSILON) * 100) / 100)  + "</b>"
    document.getElementById("total_amount_due").innerHTML = "TOTAL AMOUNT DUE: <b>" + (Math.round((TOTAL_AMOUNT_DUE + Number.EPSILON) * 100) / 100)  + "</b>"
}