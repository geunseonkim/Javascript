// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// Check 버튼을 누르면 할일이 끝나면서 밑줄이 쳐진다.
// 1. check 버튼을 클릭하는 순간 false true.
// 2. true이면 끝난 걸로 간주하고 밑줄 보여주기.
// 3. false이면 안 끝난 걸로 간주하고 그대로!
// Delete 버튼을 누르면 할일이 삭제된다.

// 진행 중, 끝남 탭을 누르면 언더바가 이동한다.
// 끝남 탭은, 끝난 아이템만, 진행 중인 탭은 진행 중인 아이템만.
// 전체 탭을 누르면 다시 전체 아이템으로 돌아옴.

let taskInput = document.getElementById("task-input");
//console.log(taskInput);

let addButton = document.getElementById("add-button");

addButton.addEventListener("click",addTask);

let taskList = [];

function addTask() {
    let task = {  // 객체.
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false       // 끝났는지 안 끝났는지도 알아야 해.
      }
    taskList.push(task); // 위 객체를 넣어준다.
    console.log(taskList);
    render();
}

function render() {
    let resultHTML = '';
    for(let i = 0; i < taskList.length; i++) {
        if (taskList[i].isComplete == true) {   // 7. true이면 끝난 걸로 간주하고 밑줄(class="task-done") 보여주기.
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
              <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>`
        } else {
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
              <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>`;
        } // 1. Check 버튼을 클릭하는 순간 onclick 이벤트에 이해서 toggleComplete 실행된다. 그 순간 id 값이랑 같이 가져간다.
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {   // 2. toggleComplete는 이 id를 매개변수로써 받게 된다.
    console.log("체크 됐음!") // 이제 선택한 아이템을 true로 바꿔줘야 하는데, 함수 입장에서는 아떤 아이템이 선택됐는지 어떻게 알지? unique 한 id 부여.
    console.log("id:", id) // 이 id 값을 통해 각각의 item(tasklist)들을 찾을 것.

    for(let i =0; i < taskList.length; i++) {   // 3. 위의 id 값을 가지고 taskList를 돌리면서 이 id 가지고 있는 건 누구인지 찾는다.
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete //true; (x) 체크 버튼을 다시 누르면 그 전 상태로 돌아올 수도 있어야 한다.  // 4. 찾으면 if 문에서 isComplete를 true로 바꿔준다.
            break;  // 5. 아이템을 찾는 순간 빠져나올 수 있도록 for 문을 종료한다.
        }
    }
    render()    // 6. false - > true 값만 바꿔서 되는 게 아니라 UI도 업데이트를 해줘야 한다.
    console.log(taskList);
}

function deleteTask(id) {
  console.log("삭제하자.");
  console.log("id:",id);

  for(let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
        taskList.splice(i,1)
        break;
    }
  }
  console.log(taskList); // 값이 업데이트 되면 UI도 업데이트.
  render();
}

function randomIDGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9); // 정보에는 고유한 각각의 id 값이 필요하다.
}