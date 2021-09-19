import React from 'react';
// подключение библиотеки yandex-map, на 22 строчке можно задать api-ключ
import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';
import { useState } from 'react';
import coords from './coords.json';
import logo from './logo.png';
import { useHistory } from 'react-router-dom'
// стили задаем для изменения цвета фона карты, фильтр меняет также цвет лого-меток, поэтому перезаписываем стили на лого, чтобы вернуть прежний цвет лого
import './YandexMap.css';

function YandexMap({key}) {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  const history = useHistory();

  // задает центровые координаты при загрузке карты
  const mapState = {
    center: [59.91807199347784, 30.304908500000003],
    zoom: 9
  }

  const redirectToAddress = async (coords) => {
    console.log('currentCard', coords)
if(coords.id === '1'){
  // <Link to={`/componentone`}>componentone</Link>
  history.push('/componentone');
}else if(coords.id === '2'){
  // <Link to={`/componenttwo`}>componenttwo</Link>
  history.push('/componenttwo');
}else if(coords.id === '3'){
  // <Link to={`/componentthree`}>componentthree</Link>
  history.push('/componentthree');
}else{
  // <Link to={`/componentfour`}>componentfour</Link>
  history.push('/componentfour');
}
  }

  return (
    <>
      {/* <YMaps query={{ apikey: '27544797-3131-4759-9f4b-54f17c827eb2&lang=ru_RU', }} version={"2.1"}> */}
      <YMaps>
        <div className='mapContainer'>
          <Map state={mapState} width='40%'
            height='450px' >
            <ZoomControl options={{ float: 'left' }} />
            <Placemark geometry={[lat, lng]} onClick={redirectToAddress}/>
            
            {/* берет координаты из json файла, задает кастомную картинку в опциях ( Валерия Гаврилина, дом 3 корпус 1 [60.07451356399184, 30.331777499999962],
Большая Зеленина 15 [59.96190356413901, 30.291478999999995], Проспект Пятилеток 8к1 [59.92181306419169, 30.459400999999986],
Ленинский проспект 92к1 [59.8548470642688, 30.212112499999996]) */}

            {coords.map((coordinates) => (  
              <>
              <Placemark 
                key={coordinates.id}
                geometry={coordinates.coords}
                options={{
                  iconLayout: "default#image",
                  iconImageHref: logo,
                  iconImageSize: [30, 42],
                  iconImageOffset: [-5, -38],
                }}
              />
              </>
            ))}

          </Map>
        </div>
      </YMaps>
    </>
  );
}
export default YandexMap;
