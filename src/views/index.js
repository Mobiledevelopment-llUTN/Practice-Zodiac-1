/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, ScrollView,  Text, View} from 'react-native';
import {style_01} from '../styles/style_Sign01.js';

const data = [
    {
        Signo : 'Aries',
        Dias  : '21 de marzo al 19 de abril. ',
        Elemento : 'Fuego',
        Astro: 'Sol',
        Piedra_Preciosa: 'Ruby',
    },
    {
        Signo : 'Tauro',
        Dias  : '20 de abril y el 20 de mayo. ',
        Elemento : 'Tierra',
        Astro: 'Venus',
        Piedra_Preciosa: 'Cuarzo Rosa',
    },
    {
        Signo : 'Geminis',
        Dias  : '21 de mayo y el 20 de junio. ',
        Elemento : 'Aire',
        Astro: 'Mercurio',
        Piedra_Preciosa: 'Ambar',
    },
    {
        Signo : 'Cancer',
        Dias  : '21 de junio y el 22 de julio ',
        Elemento : 'Agua',
        Astro: 'Luna',
        Piedra_Preciosa: 'Esmeralda',
    },
    {
        Signo : 'Leo',
        Dias  : '22 de julio y 22 de agosto ',
        Elemento : 'Fuego',
        Astro: 'Sol',
        Piedra_Preciosa: 'Jaspe Rojo',
    },
    {
        Signo : 'Virgo',
        Dias  : '23 de agosto y el 22 de septiembre ',
        Elemento : 'Tierra',
        Astro: 'Mercurio',
        Piedra_Preciosa: 'Lapislázuli',
    },
    {
        Signo : 'Libra',
        Dias  : '23 de septiembre y el 22 de octubre. ',
        Elemento : 'Aire',
        Astro: 'Venus',
        Piedra_Preciosa: 'Zafiro',
    },
    {
        Signo : 'Escorpio',
        Dias  : '23 de octubre al 21 de noviembre ',
        Elemento : 'Agua',
        Astro: 'Pluton',
        Piedra_Preciosa: 'Amatista',
    },
    {
        Signo : 'Sagitario',
        Dias  : '22 de noviembre y el 21 de noviembre. ',
        Elemento : 'Fuego',
        Astro: 'Jupiter',
        Piedra_Preciosa: 'Citrino',
    },
    {
        Signo : 'Capricornio',
        Dias  : '21 de marzo al 19 de abril. ',
        Elemento : 'Tierra',
        Astro: 'Saturno',
        Piedra_Preciosa: 'Granate',
    },
    {
        Signo : 'Acuario',
        Dias  : '21 de diciembre y el 19 de enero ',
        Elemento : 'Aire',
        Astro: 'Urano',
        Piedra_Preciosa: 'Fluorita Verde',
    },
    {
        Signo : 'Piscis',
        Dias  : '19 de febrero y el 20 de marzo ',
        Elemento : 'Agua',
        Astro: 'Neptuno',
        Piedra_Preciosa: 'Cuarzo Transparente',
    },
];

const Index = () => {
    return (
        <View>
            <View style={style_01.divMain}>
                <Text style={style_01.h1}>Lista de Zodiacos</Text>
                <Text style={style_01.p1}>En la astrología occidental se conoce como signos del zodiaco o astrológicos a los doce sectores de treinta grados exactos en los que los babilonios dividieron el camino que recorre el Sol alrededor de la Tierra y que hasta entonces se había segmentado en ocho partes.</Text>

                <ScrollView style={{marginTop:8}}>
                    {data.map(item => <View style={style_01.tarjeta} key={item.Signo} >
                        <Image source={require('../imgs/Signs/Air.jpeg')}/>
                        <Text>Signo: {item.Signo}</Text>
                        <Text>Dias que Abarca: {item.Dias}</Text>
                        <Text>Elemento: {item.Elemento}</Text>
                        <Text>Astro: {item.Astro}</Text>
                        <Text> Piedra Preciosa: {item.Piedra_Preciosa}</Text>
                    </View>)
                    }
                </ScrollView>
            </View>

            <View style={style_01.divFooter}>
                <Text style={style_01.textFooter}>Carrera de Tecnologías de Información</Text>
                <Text style={style_01.textFooter}>Sede del Pacífico</Text>
            </View>
        </View>
    );
};

export default Index;
