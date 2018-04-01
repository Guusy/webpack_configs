import React, {Component} from 'react';
import {render} from 'react-dom';
import Home from '../components/Home';

const divTorender = document.getElementById('container');
console.log(divTorender);
render(<Home/>,divTorender);