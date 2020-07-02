# moon_phases
 LAP III
# **Proyecto Laboratorio de Proyectos III 2020**<br>
## Diego Salischiker


### Etapa 1: Investigación
<br>APIs:
* SunMoonCalc
* Moon Phase
* MoonCalc REST API
* The Solar System OpenData REST API

***
## [SunMoonCalc](https://rapidapi.com/kirs26/api/sunmooncalc)

### Documentación:

**Sunlight times:**
_Returns an object with the following properties:_
<br>• sunrise - sunrise (top edge of the sun appears on the horizon)
<br>• sunriseEnd - sunrise ends (bottom edge of the sun touches the horizon)
<br>• goldenHourEnd - morning golden hour (soft light, best time for photography) ends
<br>• solarNoon - solar noon (sun is in the highest position)
<br>• goldenHour - evening golden hour starts
<br>• sunsetStart - sunset starts (bottom edge of the sun touches the horizon)
<br>• sunset - sunset (sun disappears below the horizon, evening civil twilight starts)
<br>• dusk - dusk (evening nautical twilight starts)
<br>• nauticalDusk - nautical dusk (evening astronomical twilight starts)
<br>• night - night starts (dark enough for astronomical observations)
<br>• nadir - nadir (darkest moment of the night, sun is in the lowest position)
<br>• nightEnd - night ends (morning astronomical twilight starts)
<br>• nauticalDawn - nautical dawn (morning nautical twilight starts)
<br>• dawn - dawn (morning nautical twilight ends, morning civil twilight starts)

**Sun position:**
_Returns an object with the following properties:_
<br>• altitude - sun altitude above the horizon in radians, e.g. 0 at the horizon and PI/2 at the zenith (straight over your head)
<br>• azimuth - sun azimuth in radians (direction along the horizon, measured from south to west), e.g. 0 is south and Math.PI * 3/4 is northwest


**Moon position**
_Returns an object with the following properties:_
<br>• altitude - moon altitude above the horizon in radians
<br>• azimuth - moon azimuth in radians
<br>• distance - distance to moon in kilometers
<br>• parallacticAngle - parallactic angle of the moon in radians

**Moon illumination**
_Returns an object with the following properties:_
<br>• fraction - illuminated fraction of the moon; varies from 0.0 (new moon) to 1.0 (full moon)
<br>• phase - moon phase; varies from 0.0 to 1.0, described below
<br>• angle - midpoint angle in radians of the illuminated limb of the moon reckoned eastward from the north point of the disk; the moon is waxing if the angle is negative, and waning if positive

**Moon phase value should be interpreted like this:**
<br>• 0 - New Moon (Waxing Crescent)
<br>• 0.25 - First Quarter (Waxing Gibbous)
<br>• 0.5 - Full Moon (Waning Gibbous)
<br>• 0.75 - Last Quarter (Waning Crescent)

**Moon rise and set times**
_Returns an object with the following properties:_
<br>• rise - moonrise time
<br>• set - moonset time
<br>• alwaysUp - true if the moon never rises/sets and is always above the horizon during the day
<br>• alwaysDown - true if the moon is always below the horizon

***

### EndPoints:
**• (GET) moon-position**
<br>_Header params:_
<br>		Host (string), Key (string)
<br>_Required params:_
<br>		Date (YYYY-MM-DD), time (HH-MM), long (number), lat (number)
<br>_Optional params:_
<br>		Result_date_format (DD-MM-YYYY HH:MM:SS)

**• (GET) sunlight-times**
<br>	_Header params:_
<br>		Host (string), Key (string)
<br>	_Required params:_
<br>		lat (number), Date (YYYY-MM-DD), time (HH-MM), long (number)
<br>	_Optional params:_
<br>		Result_date_format (DD-MM-YYYY HH:MM:SS)

**• (GET) sun-position**
<br>	_Header params:_
<br>		Host (string), Key (string)
<br>	_Required params:_
<br>		long (number), lat (number), time (HH-MM), date (YYYY-MM-DD)
<br>	_Optional params:_
<br>		Result_date_format (DD-MM-YYYY HH:MM:SS)

**• (GET) moon-illumination**
<br>	_Header params:_
<br>		Host (string), Key (string)
<br>	_Required params:_
<br>		time (HH-MM), date (YYYY-MM-DD)

**• (GET) moon-rise-and-set-times**
<br>	_Header params:_
<br>		Host (string), Key (string)
<br>	_Required params:_
<br>		time (HH-MM), date (YYYY-MM-DD), lat (number), long (number)
<br>	_Optional params:_
<br>		Inutc (Boolean)
<br>		Result_date_format (DD-MM-YYYY HH:MM:SS)


***

### Código disponible:
**• Javascript**
<br>- jQuery
<br>- fetch
<br>- XMLHttpRequest

**• Node.js**
<br>- HTTP
<br>- Request
<br>- Unirest
<br>- Axios

**• Python**
<br>- http.client
<br>- Requests
<br>- Unirest


***

### Prueba de funcionamiento

**Request:**
<br><br>
![Request](https://i.imgur.com/g8R7Sv5.png)

**Response:**
<br><br>
![Response](https://i.imgur.com/Fu2zsG3.png)


***
### Etapa 2: Diseñar una aplicación
La aplicación será más que nada un dispositivo decorativo, con su buen aspecto informativo, para aquellas personas interesadas o que gusten de mirar el cielo por las noches, ya sea buscando un encuentro con nuestra Luna u otros astros.
La idea del dispositivo sería que además de informar sobre el estado actual de nuestro satélite, sirva como elemento decorativo para tener a nuestra Luna siempre a la vista.
Podría utilizarse en cualquier parte del mundo ya que la información que se muestra dependería de la ubicación del usuario, por lo que está sería programable a gusto y piaccere.
Existen aplicaciones con este tipo de información, sobre todo apps móviles o desktop, o como información adicional a resúmenes climatológicos, pero las opciones que sirven de elemento decorativo, a su vez que informa en tiempo real el estado actual no son muchas.

### ¿Cómo se implementa y cómo funciona? (diseño conceptual)
![Diseño conceptual](https://i.imgur.com/yuZ1AbG.jpg)

***
### Etapa 3: Diseñar una interfase
[Tutorial de cómo conectar múltiples LEDs a Arduino](https://www.instructables.com/id/Controlling-Multiple-LEDs-With-an-Arduino-Uno/)

**Elementos necesarios:**
* Arduino ONE
* Protoboard
* 4 LEDs
* 4 resistores (ohms?)
* 4 cables
* [Software que diga qué LED se enciende dependiendo de la fase de la Luna](https://github.com/dieguito711/moon_phases/blob/master/assets/js/main.js)

***
### Simulación:
![Simulación diseño](https://i.imgur.com/cnEwgg0.png)

![Simulación circuitos](https://i.imgur.com/hR5EODo.png)

Web que hace request a la api y simula el entorno

[Link a la web](https://moon-phases.vercel.app/)

![Web](https://i.imgur.com/AeaNTrU.png)
