const BASE_URL = "http://api.login2explore.com:5577";
const IML_ENDPOINT = "/api/iml";
const IRL_ENDPOINT = "/api/irl";
const TOKEN = "90934356|-31949198827582087|90957532";

$("#studentRollNumber").focus();

function getStudent() {
  const studentRollNumber = getStudentRollNumber();

  const getReqStr = createGET_BY_KEYRequest(
    TOKEN,
    "SCHOOL",
    "STUDENT",
    studentRollNumber
  );

  jQuery.ajaxSetup({ async: false });
  var resultObj = executeCommandAtGivenBaseUrl(
    getReqStr,
    BASE_URL,
    IRL_ENDPOINT
  );
  jQuery.ajaxSetup({ async: true });
  if (resultObj.status === 400) {
    $("#studentSave").prop("disabled", false);
    $("#studentReset").prop("disabled", false);
    $("#studentName").focus();
  } else {
    $("#studentRollNumber").prop("disabled", true);

    fillDate(resultObj);
    $("#studentChange").prop("disabled", false);
    $("#studentReset").prop("disabled", false);
  }
}

function fillDate(resultObj) {
  console.log(resultObj);
  const record = JSON.parse(resultObj.data).record;
  const rec_no = JSON.parse(resultObj.data).rec_no;
  localStorage.setItem("rec_no", rec_no);

  $("#studentName").val(record.name);
  $("#studentClass").val(record.class);
  $("#studentBirth").val(record.dob);
  $("#studentAddress").val(record.address);
  $("#enrollmentDate").val(record.enrollDate);
  console.log(record, "this isthe result object");
}

function getStudentRollNumber() {
  var studentRollNumber = $("#studentRollNumber").val();
  var jsonStr = {
    roll: studentRollNumber,
  };
  return JSON.stringify(jsonStr);
}

function validateAndGetFormData() {
  var studentRollNumber = $("#studentRollNumber").val();
  if (studentRollNumber === "") {
    alert("Student Roll Number is Required Value");
    $("#studentRollNumber").focus();
    return "";
  }
  var studentName = $("#studentName").val();
  if (studentName === "") {
    alert("Student Name is Required Value");
    $("#studentName").focus();
    return "";
  }
  var studentClass = $("#studentClass").val();
  if (studentClass === "") {
    alert("Student Class is Required Value");
    $("#studentClass").focus();
    return "";
  }

  var studentBirth = $("#studentBirth").val();
  if (studentBirth === "") {
    alert("Student Birth is Required Value");
    $("#studentBirth").focus();
    return "";
  }
  var studentAddress = $("#studentAddress").val();
  if (studentAddress === "") {
    alert("Student Address is Required Value");
    $("#studentAddress").focus();
    return "";
  }

  var enrollmentDate = $("#enrollmentDate").val();
  if (enrollmentDate === "") {
    alert("Enrollment Date is Required Value");
    $("#enrollmentDate").focus();
    return "";
  }

  var jsonStrObj = {
    roll: studentRollNumber,
    name: studentName,
    class: studentClass,
    dob: studentBirth,
    address: studentAddress,
    enrollDate: enrollmentDate,
  };
  return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.

function resetForm() {
  $("#studentRollNumber").val("");
  $("#studentName").val("");
  $("#studentClass").val("");
  $("#studentBirth").val("");
  $("#studentAddress").val("");
  $("#enrollmentDate").val("");
  $("#studentRollNumber").prop("disabled", false);
  $("#studentRollNumber").focus();
}
function saveStudent() {
  var jsonStr = validateAndGetFormData();
  if (jsonStr === "") {
    return;
  }
  var putReqStr = createPUTRequest(TOKEN, jsonStr, "SCHOOL", "STUDENT");
  alert(putReqStr);
  jQuery.ajaxSetup({ async: false });
  var resultObj = executeCommandAtGivenBaseUrl(
    putReqStr,
    BASE_URL,
    IML_ENDPOINT
  );
  alert(JSON.stringify(resultObj));
  jQuery.ajaxSetup({ async: true });
  resetForm();
}

function changeStudent() {
  var jsonStr = validateAndGetFormData();
  if (jsonStr === "") {
    return;
  }
  var putReqStr = createUPDATERecordRequest(
    TOKEN,
    jsonStr,
    "SCHOOL",
    "STUDENT",
    localStorage.getItem("rec_no")
  );
  alert(putReqStr);
  jQuery.ajaxSetup({ async: false });
  var resultObj = executeCommandAtGivenBaseUrl(
    putReqStr,
    BASE_URL,
    IML_ENDPOINT
  );
  alert(JSON.stringify(resultObj));
  jQuery.ajaxSetup({ async: true });
  resetForm();
}
