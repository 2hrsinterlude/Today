// const dateurl = 'http://worldtimeapi.org/api/timezone/Europe/Moscow'
//
// const dateApi = async (url) => {
//     const response = await fetch(url);
//     const json = await response.json();
//     return json;
// }
//
// const data = dateApi(dateurl)
// JSON.stringify(data)
// console.log(data);

// -----------------

// const dateurl = 'http://worldtimeapi.org/api/timezone/Europe/Moscow';
//
// const dateApi = async (url) => {
//     return await fetch(url)
//         .then(response => response.json());
// };
//
// const fetchData = async (url) => {
//     const data = await dateApi(url);
//     console.log(data); // Теперь выведет объект с данными
//     return data;
// };
//
// const date= fetchData(dateurl);
// console.log(date);


const fetchTimeData = async () => {
    try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Amsterdam');
        // const response = await fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow');
        if (!response.ok) {
            throw new Error('Не удалось получить данные');
        }
        const jsonData = await response.json();

        // Извлекаем необходимые данные: datetime и timezone
        const { datetime, timezone } = jsonData;

        console.log(datetime)

        // Форматируем datetime
        const dateObj = new Date(datetime);
        const time = dateObj.toLocaleTimeString( 'en-GB', { hour: '2-digit', minute: '2-digit'});
        const day = dateObj.toLocaleString('en-GB', { day: '2-digit' });
        const month = dateObj.toLocaleString('en-GB', { month: 'long' });

        document.querySelector('.location').innerHTML = timezone
        document.querySelector('.day').innerHTML = day
        document.querySelector('.month').innerHTML = month
        document.querySelector('.hours').innerHTML = time

        return { datetime: { time, day, month }, timezone };
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        throw error;
    }
};
fetchTimeData()


// const loc = document.querySelector('.location').innerHTML = timezone;
// loc.innerHTML = timezone




// Используем асинхронную функцию внутри IIFE (Immediately Invoked Function Expression)
/*(async () => {
    try {
        const { datetime, timezone } = await fetchTimeData();
        console.log('Время:', datetime.time);
        console.log('День:', datetime.day);
        console.log('Месяц:', datetime.month);
        console.log('Часовой пояс:', timezone);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
})();*/


// const {timezone, datetime} = await fetch('http://worldtimeapi.org/api/timezone/Europe/Amsterdam').then(response => response.json())
// console.log(timezone, datetime)
// document.querySelector('.today').innerHTML = timezone + datetime




