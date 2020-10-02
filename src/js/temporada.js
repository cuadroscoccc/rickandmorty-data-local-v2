import characters from '../characters/rickandmorty_1.js'; 
import episodes from '../episodes/episodios.js';

import {episodioXpersonajes} from './data.js'



const tabsItems = Array.from(document.querySelectorAll('.tabs__item'))
const panelsItems = Array.from(document.querySelectorAll('.panels__item'))
document.getElementById('tabs').addEventListener('click', e => {
    if (e.target.classList.contains('tabs__item')) {
        const pulsaIndex = tabsItems.indexOf(e.target);
        tabsItems.forEach(tab => tab.classList.remove('habilitar'));
        tabsItems[pulsaIndex].classList.add('habilitar');
        panelsItems.forEach(panel => panel.classList.remove('habilitar'));
        panelsItems[pulsaIndex].classList.add('habilitar');
    }
}) 

const dataCharacters = characters.results;
const dataEpisodes = episodes.episodes;

episodioXpersonajes(dataCharacters, dataEpisodes);


