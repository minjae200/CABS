function OnLoad(obj, html)
{
    const sidebarBody = document.getElementById('modal-sidebar');

    var elements = sidebarBody.querySelectorAll('li');

    const targetId = obj.id;
    for (const element of elements) {
        if (element.id === targetId) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    }
    document.getElementById('modal-main').innerHTML = html;
}
