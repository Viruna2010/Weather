// ශ්‍රී ලංකාවේ සියලු දිස්ත්‍රික්ක
const DISTRICTS = [
  { id: 'colombo',      name: 'කොළඹ',        nameEn: 'Colombo',      province: 'බස්නාහිර',  lat: 6.9271,  lon: 79.8612 },
  { id: 'gampaha',      name: 'ගම්පහ',        nameEn: 'Gampaha',      province: 'බස්නාහිර',  lat: 7.0840,  lon: 80.0098 },
  { id: 'kalutara',     name: 'කළුතර',        nameEn: 'Kalutara',     province: 'බස්නාහිර',  lat: 6.5854,  lon: 79.9607 },
  { id: 'kandy',        name: 'මහනුවර',       nameEn: 'Kandy',        province: 'මධ්‍යම',    lat: 7.2906,  lon: 80.6337 },
  { id: 'matale',       name: 'මාතලේ',        nameEn: 'Matale',       province: 'මධ්‍යම',    lat: 7.4675,  lon: 80.6234 },
  { id: 'nuwara_eliya', name: 'නුවරඑළිය',     nameEn: 'Nuwara Eliya', province: 'මධ්‍යම',    lat: 6.9497,  lon: 80.7891 },
  { id: 'galle',        name: 'ගාල්ල',        nameEn: 'Galle',        province: 'දකුණු',     lat: 6.0535,  lon: 80.2210 },
  { id: 'matara',       name: 'මාතර',         nameEn: 'Matara',       province: 'දකුණු',     lat: 5.9485,  lon: 80.5353 },
  { id: 'hambantota',   name: 'හම්බන්තොට',    nameEn: 'Hambantota',   province: 'දකුණු',     lat: 6.1241,  lon: 81.1185 },
  { id: 'jaffna',       name: 'යාපනය',        nameEn: 'Jaffna',       province: 'උතුරු',     lat: 9.6615,  lon: 80.0255 },
  { id: 'kilinochchi',  name: 'කිලිනොච්චිය',  nameEn: 'Kilinochchi',  province: 'උතුරු',     lat: 9.3803,  lon: 80.4037 },
  { id: 'mannar',       name: 'මන්නාරම',      nameEn: 'Mannar',       province: 'උතුරු',     lat: 8.9810,  lon: 79.9044 },
  { id: 'vavuniya',     name: 'වව්නියාව',     nameEn: 'Vavuniya',     province: 'උතුරු',     lat: 8.7514,  lon: 80.4971 },
  { id: 'mullaitivu',   name: 'මුලතිව්',      nameEn: 'Mullaitivu',   province: 'උතුරු',     lat: 9.2671,  lon: 80.8128 },
  { id: 'batticaloa',   name: 'මඩකලපුව',      nameEn: 'Batticaloa',   province: 'නැගෙනහිර', lat: 7.7170,  lon: 81.7004 },
  { id: 'ampara',       name: 'අම්පාර',       nameEn: 'Ampara',       province: 'නැගෙනහිර', lat: 7.2911,  lon: 81.6724 },
  { id: 'trincomalee',  name: 'ත්‍රිකුණාමලය', nameEn: 'Trincomalee',  province: 'නැගෙනහිර', lat: 8.5874,  lon: 81.2152 },
  { id: 'kurunegala',   name: 'කුරුණෑගල',     nameEn: 'Kurunegala',   province: 'වයඹ',       lat: 7.4867,  lon: 80.3647 },
  { id: 'puttalam',     name: 'පුත්තලම',      nameEn: 'Puttalam',     province: 'වයඹ',       lat: 8.0362,  lon: 79.8283 },
  { id: 'anuradhapura', name: 'අනුරාධපුර',    nameEn: 'Anuradhapura', province: 'උ.මැද',     lat: 8.3114,  lon: 80.4037 },
  { id: 'polonnaruwa',  name: 'පොළොන්නරුව',   nameEn: 'Polonnaruwa',  province: 'උ.මැද',     lat: 7.9403,  lon: 81.0188 },
  { id: 'badulla',      name: 'බදුල්ල',       nameEn: 'Badulla',      province: 'ඌව',        lat: 6.9934,  lon: 81.0550 },
  { id: 'monaragala',   name: 'මොනරාගල',      nameEn: 'Monaragala',   province: 'ඌව',        lat: 6.8728,  lon: 81.3394 },
  { id: 'ratnapura',    name: 'රත්නපුර',      nameEn: 'Ratnapura',    province: 'සබරගමු',   lat: 6.7056,  lon: 80.3847 },
  { id: 'kegalle',      name: 'කෑගල්ල',       nameEn: 'Kegalle',      province: 'සබරගමු',   lat: 7.2513,  lon: 80.3464 },
];

const CONDITION_SI = {
  'Clear': 'පැහැදිලිය', 'Clouds': 'වලාකුළු', 'Rain': 'වැසි',
  'Drizzle': 'සිහිල් වැසි', 'Thunderstorm': 'ගිගුරුම් සහිත',
  'Snow': 'හිම', 'Mist': 'මීදුම', 'Haze': 'හේස්',
  'Fog': 'මදිරා', 'Dust': 'දූවිලි', 'Smoke': 'දුම',
};

function uvLevel(uvi) {
  if (uvi <= 2)  return { label: 'අඩු',      color: '#4CAF50' };
  if (uvi <= 5)  return { label: 'මධ්‍යම',   color: '#FFC107' };
  if (uvi <= 7)  return { label: 'ඉහළ',      color: '#FF9800' };
  if (uvi <= 10) return { label: 'ඉතා ඉහළ',  color: '#F44336' };
  return           { label: 'අතිශය',         color: '#9C27B0' };
}

function mockData(d) {
  const baseTemps = {
    Colombo:29,Gampaha:29,Kalutara:29,Kandy:24,Matale:26,
    'Nuwara Eliya':16,Galle:28,Matara:29,Hambantota:32,
    Jaffna:33,Kilinochchi:31,Mannar:33,Vavuniya:30,Mullaitivu:29,
    Batticaloa:29,Ampara:30,Trincomalee:31,Kurunegala:28,Puttalam:32,
    Anuradhapura:31,Polonnaruwa:30,Badulla:22,Monaragala:28,
    Ratnapura:27,Kegalle:26,
  };
  const conds = ['Clear','Clouds','Rain','Drizzle','Thunderstorm','Mist'];
  const ci    = Math.floor(Math.random() * conds.length);
  const base  = baseTemps[d.nameEn] || 28;
  const temp  = Math.round((base + (Math.random()-0.5)*4) * 10) / 10;
  const uvi   = Math.round(ci === 0 ? 8+Math.random()*4 : 2+Math.random()*5);
  return {
    district: d.nameEn, districtSi: d.name, province: d.province,
    lat: d.lat, lon: d.lon,
    temp, feelsLike: Math.round((temp-1+Math.random()*2)*10)/10,
    humidity:  Math.round(60 + Math.random()*30),
    pressure:  Math.round(1008 + Math.random()*10),
    windSpeed: Math.round((2+Math.random()*8)*10)/10,
    windDeg:   Math.round(Math.random()*360),
    visibility:ci>=3 ? Math.round(3+Math.random()*5) : Math.round(8+Math.random()*2),
    uvIndex: uvi, uvLevel: uvLevel(uvi),
    condition: conds[ci], conditionSi: CONDITION_SI[conds[ci]] || conds[ci],
    sunrise: '06:05', sunset: '18:15',
    updatedAt: new Date().toISOString(), isMock: true,
  };
}

async function realData(d, apiKey) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${d.lat}&lon=${d.lon}&appid=${apiKey}&units=metric`;
    const res  = await fetch(url);
    if (!res.ok) throw new Error('OWM ' + res.status);
    const w    = await res.json();
    const uvi  = 5;
    const sr   = new Date(w.sys.sunrise * 1000);
    const ss   = new Date(w.sys.sunset  * 1000);
    const pad  = n => String(n).padStart(2,'0');
    return {
      district: d.nameEn, districtSi: d.name, province: d.province,
      lat: d.lat, lon: d.lon,
      temp:      Math.round(w.main.temp*10)/10,
      feelsLike: Math.round(w.main.feels_like*10)/10,
      humidity:  w.main.humidity, pressure: w.main.pressure,
      windSpeed: Math.round(w.wind.speed*10)/10, windDeg: w.wind.deg||0,
      visibility:Math.round((w.visibility||10000)/1000),
      uvIndex: uvi, uvLevel: uvLevel(uvi),
      condition:   w.weather[0].main,
      conditionSi: CONDITION_SI[w.weather[0].main] || w.weather[0].main,
      sunrise: `${pad(sr.getHours())}:${pad(sr.getMinutes())}`,
      sunset:  `${pad(ss.getHours())}:${pad(ss.getMinutes())}`,
      updatedAt: new Date().toISOString(), isMock: false,
    };
  } catch {
    return mockData(d);
  }
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function onRequest({ request, env }) {
  const url      = new URL(request.url);
  const path     = url.pathname;           // /api/weather/all  etc.
  const apiKey   = env.OWM_API_KEY || '';
  const useReal  = apiKey && apiKey !== 'YOUR_API_KEY_HERE';
  const getData  = d => useReal ? realData(d, apiKey) : Promise.resolve(mockData(d));

  // GET /api/districts
  if (path === '/api/districts') {
    return json({ success: true, districts: DISTRICTS });
  }

  // GET /api/health
  if (path === '/api/health') {
    return json({ success: true, mode: useReal ? 'live' : 'demo', districts: DISTRICTS.length });
  }

  // GET /api/weather/all
  if (path === '/api/weather/all') {
    const results = await Promise.all(DISTRICTS.map(getData));
    return json({ success: true, count: results.length, data: results, timestamp: new Date().toISOString() });
  }

  // GET /api/weather/:id
  const singleMatch = path.match(/^\/api\/weather\/([^/]+)$/);
  if (singleMatch) {
    const id = singleMatch[1];
    const d  = DISTRICTS.find(x => x.id === id);
    if (!d) return json({ success: false, error: 'District not found' }, 404);
    const data = await getData(d);
    return json({ success: true, data });
  }

  return json({ success: false, error: 'Not found' }, 404);
}
