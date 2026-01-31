const insert = document.querySelector("#insert");
window.addEventListener("keydown", function (e) {
  insert.innerHTML = `<div class="key">
    <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            
        </tr>
        <tr>
            <td>${e.key == " " ? "space" : e.key}</td>
            <td>${e.keyCode}</td>
            
        </tr>
    </table>
    </div>`;
});
