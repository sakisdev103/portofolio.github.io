document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <ul>
                    <li><span id="taskname">
                    ${document.querySelector('#newtask input').value}
                        </span>
                        <button class="delete-button">
                            <img src="https://img.icons8.com/ios-glyphs/23/000000/filled-trash.png"/>
                        </button>
                    </li>
                </ul>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete-button");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}