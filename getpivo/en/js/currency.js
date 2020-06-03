var changeCurrency = function() {
  var checkLanCur = false;

  if (
    curLan == "it" ||
    curLan == "de" ||
    curLanLo == "es-es" ||
    curLan == "nl" ||
    curLan == "pt" ||
    curLan == "fr"
  ) {
    if (currencyCode != "EUR") {
      checkLanCur = true;
    }
  } else if (curLan == "ja" && currencyCode != "JPY") {
    checkLanCur = true;
  } else if (curLanLo == "en-au" && currencyCode != "AUD") {
    checkLanCur = true;
  } else if (curLanLo == "en-uk" && currencyCode != "GBP") {
    checkLanCur = true;
  } else if (curLanLo == "en-ca" && currencyCode != "CAD") {
    checkLanCur = true;
  } else if (curLan == "br" && currencyCode != "BRL") {
    checkLanCur = true;
  } else if (
    (curLanLo == "en-default" || curLanLo == "es-spa") &&
    currencyCode != "USD"
  ) {
    checkLanCur = true;
  }

  return checkLanCur;
};

if (changeCurrency() == true) {
  $(".shopify-currency-form select")
    .eq(0)
    .parents("form")
    .submit();
}
