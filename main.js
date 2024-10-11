const task1 = document.getElementById("str1");

const tasks = [
    {
        name: "Ветерочки",
        coment: "Ветерочки это молодёжная группа в которой вы научитесь играть на народных инструментах, петь и танцевать.",
        dataTime: 'Каждый четверг 17:00-21:00'
    }, {
        
    }
]

const fullText = (a) => {
    console.log("ok")
    task1.innerHTML = `
    <h3>
        "${tasks[a].name}"
    </h3>
         ${tasks[a].dataTime}
        <input onclick="fullText(4)"type="button" value="+">
        <p>${tasks[a].coment}</p>
    `;
}

