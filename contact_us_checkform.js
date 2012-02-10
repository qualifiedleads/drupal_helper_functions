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

  return false;
}
