import characters from '../characters/rickandmorty_1.js'; 
import {verGenero} from './data.js'
import {verEstado} from './data.js'  


const dataCharacters = characters.results;


verGenero(dataCharacters);
verEstado(dataCharacters);