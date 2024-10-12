const array = [document.getElementById("str1"), document.getElementById("str2"), document.getElementById("str3"), document.getElementById("str4")]
const tasks = [
    {
        name: "Ветерочки",
        coment: "Ветерочки это молодёжная группа в которой вы научитесь играть на народных инструментах, петь и танцевать.",
        dataTime: 'Каждый четверг 17:00-21:00'
    }, {
        name: "Традиционное рукоделие",
        coment: "Вы сможете научится рукоделию. Группа для взрослых",
        dataTime: "Каждую среду в 16:00-17:30"
    }, {
        name: "Русский традиционный костюм",
        coment: "Группа для взрослых. Вы сделаете своими руками народный костюм. Это не так сложно как кажется.",
        dataTime: "Каждый четверг в 16:00-20:00"
    }, {
        name: "Ветерки",
        coment: "Группа для самых младших школьников от 7 до 11 лет. На занятиях будет пение танцы и народные инструменты",
        dataTime: "Каждую среду в 17:30-19:30"
    }
]
const ivent = [
    {
        week: "Суббота",
        day: "12 Октября",
        time: "18:00",
        name: "Рекрутская вечёрка",
        map: "Луга",
        iventer: "Ветерочки"
    }, {
        week: "Четверг",
        day: "17 Октября",
        time: "18:30",
        name: "Покровская вечёрка",
        map: "Березка",
        iventer: "?"
    }, {
        week: "Четверг",
        day: "14 Ноября",
        time: "17:30",
        name: "Капустки",
        map: "Березка",
        iventer: "Ветерочки"
    }
]
const card = [document.getElementById("card1"), document.getElementById("card2"), document.getElementById("card3")]

const fullText = (a) => {
    array[a].innerHTML = `
    <h3>
        "${tasks[a].name}"
    </h3>
         ${tasks[a].dataTime}
        <input onclick="smolText(${a})"type="button" value="+">
        <p>${tasks[a].coment}</p>
    `;
}
const smolText = (a) => {
    array[a].innerHTML = `
    <h3>
        "${tasks[a].name}"
    </h3>
         ${tasks[a].dataTime}
        <input onclick="fullText(${a})"type="button" value="+">
    `;
};


const render = () => {
    smolText(0);
    smolText(1);
    smolText(2);
    smolText(3);
    card[0].innerHTML = `
            <div class="data">${ivent[0].day}<p>${ivent[0].week}</p></div> 
            <div class="time">${ivent[0].time}</div>
            <div class="map">${ivent[0].map} </div>
            <div class="name">${ivent[0].name} </div>
            <div class="iventer">${ivent[0].iventer}</div>
        `;
    card[1].innerHTML = `
            <div class="data">${ivent[1].day}<p>${ivent[1].week}</p></div> 
            <div class="time">${ivent[1].time}</div>
            <div class="map">${ivent[1].map} </div>
            <div class="name">${ivent[1].name} </div>
            <div class="iventer">${ivent[1].iventer}</div>
        `;
    card[2].innerHTML = `
            <div class="data">${ivent[2].day}<p>${ivent[2].week}</p></div> 
            <div class="time">${ivent[2].time}</div>
            <div class="map">${ivent[2].map} </div>
            <div class="name">${ivent[2].name} </div>
            <div class="iventer">${ivent[2].iventer}</div>
        `;
};


render()