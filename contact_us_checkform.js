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
    alert("הכנס את שמך הפרטי");
    fld.focus();
    return false;
  }

  var fname = "CustomFields_13_16";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("שלך בעיצוב בחר את תחום העניין");
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

  var fname = "CustomFields_33_16";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("אנא כתוב לנו הודעה:");
    fld.focus();
    return false;
  }

  setGFields();

  return true;
}

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

function setGFields() {
  var z = _uGC(document.cookie, '__utmz=', ';');
  var source   = _uGC(z, 'utmcsr=', '|');
  var medium   = _uGC(z, 'utmcmd=', '|');
  var term     = _uGC(z, 'utmctr=', '|').replace(/%20/g, ' ');
  var content  = _uGC(z, 'utmcct=', '|');
  var campaign = _uGC(z, 'utmccn=', '|');
  var gclid    = _uGC(z, 'utmgclid=', '|');
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

  var a = _uGC(document.cookie, '__utma=', ';');
  var aParts = a.split(".");
  var nVisits = aParts[5];

  $('#CustomFields_19_16').val(source);
  $('#CustomFields_20_16').val(medium);
  $('#CustomFields_21_16').val(_utf8_decode(decode_url(term)));
  $('#CustomFields_22_16').val(content);
  $('#CustomFields_23_16').val(campaign);
  $('#CustomFields_24_16').val(csegment);
  $('#CustomFields_25_16').val(nVisits);

  return true;
}

//private method for UTF-8 decoding
function _utf8_decode(utftext) {
  var string = "";
  var i = 0;
  var c = c1 = c2 = 0;
  while (i < utftext.length) {
    c = utftext.charCodeAt(i);

    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    }
    else if ((c > 191) && (c < 224)) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    }
    else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }

  return string;
}

function decode_url(url) {
  return unescape(url.replace(/\+/g,' '));
}
