import { Cloud, CloudFog, CloudLightning, CloudRain, Sun } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Bansud coordinates
const LAT = 12.868;
const LON = 121.465;

async function getWeatherData() {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`,
      { next: { revalidate: 1800 } } // Cache for 30 mins
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function getWeatherIcon(code: number) {
  if (code === 0 || code === 1) return <Sun className="size-8 text-amber-500 drop-shadow-sm" />;
  if (code === 2 || code === 3) return <Cloud className="size-8 text-slate-400 drop-shadow-sm" />;
  if (code >= 45 && code <= 48) return <CloudFog className="size-8 text-slate-400 drop-shadow-sm" />;
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return <CloudRain className="size-8 text-blue-400 drop-shadow-sm" />;
  if (code >= 95) return <CloudLightning className="size-8 text-yellow-600 drop-shadow-sm" />;
  return <Cloud className="size-8 text-slate-400 drop-shadow-sm" />;
}

function getWeatherDescription(code: number) {
  if (code === 0) return "Clear sky";
  if (code === 1 || code === 2 || code === 3) return "Partly cloudy";
  if (code >= 45 && code <= 48) return "Foggy";
  if (code >= 51 && code <= 67) return "Rainy";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 95) return "Thunderstorm";
  return "Varying conditions";
}

export async function WeatherWidget() {
  const weatherData = await getWeatherData();

  if (!weatherData) {
    return (
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Weather Update</CardTitle>
          <CardDescription>Unable to load weather data.</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const current = weatherData.current;
  const temp = current.temperature_2m;
  const humidity = current.relative_humidity_2m;
  const windSpeed = current.wind_speed_10m;
  const code = current.weather_code;

  return (
    <Card className="relative overflow-hidden shadow-sm border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50/30 dark:border-blue-900/50 dark:from-blue-950/40 dark:to-background">
      <div className="absolute right-0 top-0 -mr-4 -mt-4 opacity-10">
        <Cloud className="size-32" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            Bansud Weather
          </CardTitle>
          <Badge variant="outline" className="bg-background shadow-sm border-blue-200/50 text-blue-600 dark:border-blue-800/50 dark:text-blue-400">Live API</Badge>
        </div>
        <CardDescription>Real-time conditions in Poblacion</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-5 mt-1">
          <div className="flex items-center justify-center bg-white/60 dark:bg-black/20 p-3 rounded-2xl shadow-sm backdrop-blur-sm">
            {getWeatherIcon(code)}
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
              {Math.round(temp)}°C
            </span>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {getWeatherDescription(code)}
            </span>
          </div>
          <div className="ml-auto flex flex-col gap-1.5 text-xs text-slate-500 dark:text-slate-400 text-right">
            <div className="flex items-center justify-end gap-2 bg-white/40 dark:bg-black/20 px-2 py-1 rounded-md">
              <span className="font-semibold">Humidity:</span> {humidity}%
            </div>
            <div className="flex items-center justify-end gap-2 bg-white/40 dark:bg-black/20 px-2 py-1 rounded-md">
              <span className="font-semibold">Wind:</span> {windSpeed} km/h
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
