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
});

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