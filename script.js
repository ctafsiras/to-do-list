const addClick = () => {
    const input = document.getElementById('input').value;
    const mainDiv = document.getElementById('main-div');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="d-flex w-75 mx-auto align-items-center justify-content-between px-2 bg-info my-1">
                <h2 class="text-center fs-3">${input}</h2>
                <i onclick="crossClick(event)" class="fa-solid fa-xmark fs-1"></i>
            </div>
    `;
    document.getElementById('input').value = '';
    mainDiv.appendChild(div);

}
const crossClick = (e) => {
    const mainDiv = document.getElementById('main-div');
    mainDiv.removeChild(e.target.parentNode.parentNode);
}