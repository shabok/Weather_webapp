function GetInfo() {

    var newName=document.getElementById("cityInput");
    var cityName=document.getElementById("cityName");
    cityName.innerHTML = newName.value;


    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&units=metric&appid=49f4008337c9ef51dac59a2c6c7e344f")
    .then(response => response.json())
    .then(data => {
        document.getElementById("todaysTemp").innerHTML=""+Number(data.list[0].main.temp).toFixed(1)+" °C";
        document.getElementById("todaysFeels").innerHTML="Feels like: "+Number(data.list[0].main.feels_like).toFixed(1)+" °C";
        document.getElementById("todaysMin").innerHTML="Minimum: "+Number(data.list[0].main.temp_min).toFixed(1)+" °C";
        document.getElementById("todaysMax").innerHTML="Maximum: "+Number(data.list[0].main.temp_max).toFixed(1)+" °C";
        document.getElementById("todaysCondition").innerHTML=""+data.list[0].weather[0].main;
        document.getElementById("img1").src="http://openweathermap.org/img/wn/"+data.list[0].weather[0].icon+".png";

        for(i=1; i<5; ++i){
            document.getElementById("img"+(i+1)).src="http://openweathermap.org/img/wn/"+data.list[i].weather[0].icon+".png";
        }

        for(i=1; i<5; ++i){
            document.getElementById("day"+(i+1)+"Condition").innerHTML=""+data.list[i].weather[0].main;
        }

        for(i=1; i<5; ++i){
            document.getElementById("temp"+(i+1)).innerHTML=""+Number(data.list[i].main.temp).toFixed(1)+" °C";
        }
    })
    
    .catch(err => alert("Something Went Wrong!"))

}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue="Dhaka";
    GetInfo();
}

var d = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

function CheckDay(day){
    if(day+d.getDay()>6){
        return day+d.getDay()-7;
    }
    else{
        return day+d.getDay();
    }
}

    for(i=0; i<5; ++i){
        document.getElementById("day"+(i+1)).innerHTML=daysOfWeek[CheckDay(i)];
    }