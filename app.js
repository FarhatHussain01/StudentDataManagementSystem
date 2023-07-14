const stdNameInput = document.getElementById("stdName");
const stdEmailInput = document.getElementById("stdEmail")
const rollNumberInput = document.getElementById("Roll-No");
const instituteNameInput = document.getElementById("institute-Name");
const passwordInput = document.getElementById("password");
const userPassword = document.getElementById("user-password");
const userEmail = document.getElementById("user-email")
const stdDataContainer = document.getElementById("resultContainer")
const dataList = document.getElementById("dataList");
const submitBtn = document.getElementById("submitBtn");
const retrieveDataBtn = document.getElementById("retrieveDataBtn");

const studentData = {
  stdNameInput: "",
  stdEmailInput: '',
  rollNumberInput: "",
  instituteNameInput: "",
  passwordInput: "",
};

let retrievedData = {};

const getmyData = () => {
  const myData = localStorage.getItem("studentData");
  retrievedData = (studentData.passwordInput === userPassword.value &&
    studentData.stdEmailInput === userEmail.value) ? JSON.parse(myData) : {};
};

function updateStudentData() {
  studentData.stdNameInput = stdNameInput.value;
  studentData.stdEmailInput = stdEmailInput.value;
  studentData.rollNumberInput = rollNumberInput.value;
  studentData.instituteNameInput = instituteNameInput.value;
  studentData.passwordInput = passwordInput.value;
}

function handleSubmit(event) {
  event.preventDefault();
  updateStudentData();
  console.log(studentData);
  localStorage.setItem("studentData", JSON.stringify(studentData));
  location.href = './GetyourData.html';
}

function handleRetrieveData(event) {
  event.preventDefault();
  getmyData();
  console.log(retrievedData);
   dataList.innerHTML = "";

  for (const key in retrievedData) {
    console.log(key);
    const listItem = document.createElement("li");
    listItem.textContent = `${key}: ${retrievedData[key]}`;
    dataList.appendChild(listItem);
  }


}

submitBtn.addEventListener("click", handleSubmit);
retrieveDataBtn.addEventListener('click', handleRetrieveData);