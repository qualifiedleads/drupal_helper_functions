/**
 * @file
 * This file is used by the /contact-us page.
 */

function CheckMultiple16(frm, name) {
  for (var i=0; i < frm.length; i++) {
    fldObj = frm.elements[i];
    fldId = fldObj.id;
    if (fldId) {
      var fieldnamecheck=fldObj.id.indexOf(name);
      if (fieldnamecheck != -1) {
        if (fldObj.checked) {
          return true;
        }
      }
    }
  }
  return false;
}

/**
 * Checks the form16
 *
 * @param f
 *
 * @returns {Boolean}
 */
function CheckForm16(f) {
  var email_re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
  if (!email_re.test(f.email.value)) {
    alert("Please enter your email address.");
    f.email.focus();
    return false;
  }

  if (f.format.selectedIndex == -1) {
    alert("Please choose a format to receive your email campaigns in");
    f.format.focus();
    return false;
  }

  var fname = "CustomFields_2_16";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("Please enter a value for field First Name");
    fld.focus();
    return false;
  }

  var fname = "CustomFields_13_16";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("Please enter a value for field Subject / Area of Interest");
    fld.focus();
    return false;
  }

  var fname = "CustomFields_5_16";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("חובה למלא את השדה מסר.");
    fld.focus();
    return false;
  }

  var fname = "CustomFields_22_16";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("חובה למלא את השדה מסר.");
    fld.focus();
    false;
  }

  setGFields();

  return false;
}

/**
 * Extracts value from cookie
 *
 * @param text
 *   The full text of cookie
 * @param name
 *   The variable name
 * @param separator
 *   The separator or values
 *
 * @returns {String}
 *   The value of the variable
 */
function _uGC(text, name, separator) {
  if (!text || text=="" || !name || name=="" || !separator || separator=="") {
    return '-';
  }
  var i, i2, i3, c = '-';
  i = text.indexOf(name);
  i3 = name.indexOf('=') + 1;
  if (i > -1) {
    i2 = text.indexOf(separator, i);
    if (i2 == -1) {
      i2 = text.length;
    }
    c = text.substring((i+i3), i2);
  }
  return c;
}

/**
 * Set the Google Analitics fields of the form
 */
function setGFields() {
  //
  var z = _uGC(document.cookie, '__utmz=', ';');
  //
  var source   = _uGC(z, 'utmcsr=', '|');
  var medium   = _uGC(z, 'utmcmd=', '|');
  var term     = _uGC(z, 'utmctr=', '|');
  var content  = _uGC(z, 'utmcct=', '|');
  var campaign = _uGC(z, 'utmccn=', '|');
  var gclid    = _uGC(z, 'utmgclid=', '|');
  //
  if (gclid !="-") {
    source = 'google';
    medium = 'cpc';
  }

  var csegment = _uGC(document.cookie, '__utmv=', ';');
  if (csegment != '-') {
    var csegmentex = /[1-9]*?\.(.*)/;
    csegment = csegment.match(csegmentex);
    csegment = csegment[1];
  }
  else { 
    csegment = '(not set)';
  }

  //
  var a = _uGC(document.cookie, '__utma=', ';');
  var aParts = a.split(".");
  var nVisits = aParts[5];

  try {
    $('#CustomFields_19_16').val(source);
    $('#CustomFields_20_16').val(medium);
    $('#CustomFields_21_16').val(term);
    $('#CustomFields_22_16').val(content);
    $('#CustomFields_23_16').val(campaign);
    $('#CustomFields_24_16').val(csegment);
    $('#CustomFields_25_16').val(nVisits);
  }
  catch(err) { }

  return true;
}
