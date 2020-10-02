
import characters from '../characters/rickandmorty_1.js'; 
import episodes from '../episodes/episodios.js';


import {choiceCharacter} from './data.js'
import {searchCharacter} from './data.js'  
/* import {verModal} from './data.js' */
/* import {verEpisodios } from './data.js' */


const dataCharacters = characters.results;
const dataEpisodes = episodes.episodes;


choiceCharacter(dataCharacters);
searchCharacter(dataCharacters,"search", "cardsSearch", "modal", dataEpisodes); 
/* verModal(dataCharacters); */
/* verEpisodios(dataCharacters, dataEpisodes); */






