var pageTracker = null;
$(document).ready(function() {
  pageTracker = _gat._createTracker("UA-6240543-1");
  pageTracker._trackPageview();
});

function CheckMultiple24(frm, name) {
  for (var i=0; i<frm.length; i++) {
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

function CheckForm24(f) {
  setGFields(document.forms[0]);

  var email_re = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
  if (!email_re.test(f.email.value)) {
    alert('הכנס את כתובת הדוא"ל שלך');
    f.email.focus();
    return false;
  }

  var fname = "CustomFields_2_24";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("הכנס את שמך הפרטי");
    fld.focus();
    return false;
  }

  var fname = "CustomFields_5_24";
  var fld = document.getElementById(fname);
  if (fld.value == "") {
    alert("Please enter a value for field Mobile phone");
    fld.focus();
    return false;
  }

  CheckNum = parseInt(fld.value);
  if (fld.value != "" && isNaN(CheckNum)) {
    alert("Please enter a numeric value for field Mobile phone");
    fld.select();
    fld.focus();
    return false;
  }

  if (Drupal.settings.ca_interspire_sideblock.is_course) {
    $('#CustomFields_13_24 option:selected').val(Drupal.settings.ca_interspire_sideblock.request_uri);
  }
  else {
    var fname = "CustomFields_13_24";
    var fld = document.getElementById(fname);
    if (fld.value == "") {
      alert("שלך בעיצוב בחר את תחום העניין");
      fld.focus();
      return false;
    }
  }

  return true;
}

function init_google() {
  var pattern = /google\./i;
  if (pattern.exec(document.referrer) != null) {
    var url_parts = document.referrer.split('?'); // URL query
    if (url_parts[1]) {
      var url_args = url_parts[1].split('&');
      for (var i = 0; i < url_args.length; i++) {
        var keyval = url_args[i].split('=');
        if (keyval[0] == 'q') {
          return _utf8_decode(decode_url(keyval[1])); //decode_url(keyval[1]);
        }
      }
    }
  }
  return '';
}

// private method for UTF-8 decoding
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

function go_google(terms) {
  terms = terms.replace(/\"/g,"");
  return terms;
}

function _uGC(l,n,s) {
  if (!l || l=="" || !n || n=="" || !s || s=="") {
    return "-";
  }

  var i, i2, i3, c = "-";
  i = l.indexOf(n);
  i3 = n.indexOf("=") + 1;
  if (i > -1) {
    i2 = l.indexOf(s, i);
    if (i2 < 0) {
      i2 = l.length;
    }
    c = l.substring((i+i3), i2);
  }

  return c;
}

function setGFields(f) {
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

  $('#CustomFields_19_24').val(source);
  $('#CustomFields_21_24').val(init_google() + ' >> ' + _utf8_decode(decode_url(term)));
  $('#CustomFields_22_24').val(content);
  $('#CustomFields_23_24').val(campaign);
  $('#CustomFields_24_24').val(csegment);
  $('#CustomFields_25_24').val(nVisits);
  $('#CustomFields_26_24').val(decodeURI(document.URL));

  return true;
}
