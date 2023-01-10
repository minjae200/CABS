var dropdown = document.getElementsByClassName("dropdown-sidebar");
for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    var sidebar = this.nextElementSibling;
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  });
}

$('.modal').on('show.bs.modal', function(event) {
  TomorrowDate('create-date');
  TodayDate('manual-create-date');
});

$('.modal').on('hidden.bs.modal', function(event) {
  try {
    $(this).find('form')[0].reset()
  } catch {

  }
  var sidebar = document.getElementsByClassName("sub-sidebar");
  for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].style.display = "none";
  };
  ResetFilter();
  OnLodaingDefaultHTML();
});

function OnLodaingDefaultHTML() {
  const createSidebar = document.getElementById('auto-create-side');
  if (createSidebar !== undefined && createSidebar !== null) {
    createSidebar.click();
  }

  const registerSidebar = document.getElementById('module-side');
  if (registerSidebar !== undefined && registerSidebar !== null) {
    registerSidebar.click();
  }
}

function OnCreateLoad(obj, html, callback) {
  const sidebarBody = document.getElementById("create-modal-sidebar");

  var elements = sidebarBody.querySelectorAll("li");

  const targetId = obj.id;
  for (const element of elements) {
    if (element.id === targetId) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
  document.getElementById("create-modal-main").innerHTML = html;

  if (callback === null || callback === undefined)
    return;
  callback();
}

function OnLoad(obj, html) {
  const sidebarBody = document.getElementById("modal-sidebar");

  var elements = sidebarBody.querySelectorAll("li");

  const targetId = obj.id;
  for (const element of elements) {
    if (element.id === targetId) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  }
  document.getElementById("modal-main").innerHTML = html;
}

function ChangeValue() {
  const value = document.getElementById('patch_input').value;
  console.log(value);
  document.getElementById("upload_text").value = value;
}

function ResetFilter() {
  var branchList = document.getElementById("branch-list");
  if (branchList === undefined || branchList === null)
    return;
  var tableRows = branchList.getElementsByClassName("table-row");
  for (var i = 0; i < tableRows.length; i++) {
    tableRows[i].style.display = "";
  }
}

function FilterBranch() {
  var input = document.getElementById("create-branch");
  var filter = input.value.toUpperCase();
  var branchList = document.getElementById("branch-list");
  var tableRows = branchList.getElementsByClassName("table-row");

  for (var i = 0; i < tableRows.length; i++) {
    var branchName = tableRows[i].getElementsByClassName("branch-name-cell")[0];
    var value = branchName.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      tableRows[i].style.display = "";
    } else {
      tableRows[i].style.display = "none";
    }
  }
}

function UpdateBranch(obj) {
  var branch = obj.getElementsByClassName("branch-name-cell")[0].textContent;
  if (branch === undefined) {
    return;
  }
  document.getElementById("create-branch").value = branch;
}

function TomorrowDate() {
  var element = document.getElementById('create-date');
  if (element === undefined || element === null) {
    return;
  }
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1)
  element.value = tomorrow.toISOString().substring(0, 10);
}

function TodayDate() {
  var element = document.getElementById('manual-create-date');
  if (element === undefined || element === null) {
    return;
  }
  let today = new Date();
  element.value = today.toISOString().substring(0, 10);
}