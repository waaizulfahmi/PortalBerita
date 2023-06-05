import { useState, useEffect } from "react";
import parser from "html-react-parser";

const CuacaPanel = () => {
    const [weather, setWeather] = useState({});

    const fetchUserData = () => {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=purwokerto&units=imperial&appid=4ad9126a1f97c33e5930db5297993398"
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setWeather(data);
            });
    };
    useEffect(() => {
        fetchUserData();
    }, []);
    console.log(weather);

    const convertToCelcius = (fahrenheit) => {
        const fah = ((fahrenheit - 32) * 5) / 9;
        var precise = fah.toPrecision(3); //"4.500"
        var result = parseFloat(precise);

        return result;
    };
    const current = new Date();
    const date = `${current.toLocaleString("id", {
        weekday: "long",
    })}, ${current.getDate()} ${current.toLocaleString("id", {
        month: "long",
    })} ${current.getFullYear()} 
    `;

    return (
        <div class="flex flex-col bg-violet-200 lg:ml-10 p-4 lg:p-8 mt-0 w-full h-full max-w-2xl md:max-w-3xl md:p-5">
            <div class="font-bold text-xl">{weather.name}</div>
            <div class="text-sm text-gray-500">{date}</div>
            <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
                <svg
                    class="w-32 h-32"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                </svg>
            </div>

            <div class="flex flex-row items-center justify-center mt-6">
                <div class="font-medium text-6xl">
                    {convertToCelcius(weather.main && weather.main.temp)}°
                </div>
                <div class="flex flex-col items-center ml-6">
                    {weather.weather && weather.weather[0].main}
                    <div class="mt-1">
                        <span class="text-sm">
                            <i class="far fa-long-arrow-up"></i>
                        </span>
                        <span class="text-sm font-light text-gray-500">
                            {convertToCelcius(
                                weather.main && weather.main.feels_like
                            )}
                            °C
                        </span>
                    </div>
                    <div>
                        <span class="text-sm">
                            <i class="far fa-long-arrow-down"></i>
                        </span>
                        <span class="text-sm font-light text-gray-500">
                            {convertToCelcius(
                                weather.main && weather.main.temp_min
                            )}
                            °C
                        </span>
                    </div>
                </div>
            </div>
            <div class="flex flex-row justify-between mt-6">
                <div class="flex flex-col items-center">
                    <div class="font-medium text-sm">Wind</div>
                    <div class="text-sm text-gray-500">
                        {weather.main && weather.wind.speed}
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="font-medium text-sm">Humidity</div>
                    <div class="text-sm text-gray-500">
                        {weather.main && weather.main.humidity}%
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div class="font-medium text-sm">Pressure</div>
                    <div class="text-sm text-gray-500">
                        {weather.main && weather.main.pressure}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CuacaPanel;
