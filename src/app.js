import React from 'react'
import ReactDOM from 'react-dom'

import IMG from './components/IMG'
import {EasyCMSLogo} from './image/images.ts'



ReactDOM.render(
  <IMG src={EasyCMSLogo} width="200px"/>,
  document.getElementById('root')
);