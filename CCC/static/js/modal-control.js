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

$('.modal').on('hidden.bs.modal', function(event) {
  $(this).find('form')[0].reset()

  var sidebar = document.getElementsByClassName("sub-sidebar");
  for (var i = 0; i < sidebar.length; i++) {
    sidebar[i].style.display = "none";
  };
  ResetFilter();
});

function OnCreateLoad(obj, html) {
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
  if (branchList === undefined)
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