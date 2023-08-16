import './style.scss';
import { copyOnClick } from './funcs/copy'
import { updateParam } from './funcs/param'
import { generate } from './funcs/generate'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div class="container">
<p id="copy-content"></p>
</div>
<div class="generate">
  <input type="text" id="param" placeholder="<input text here!/>"/>
  <button id="generate">Generate</button>
</div>
<div class="footer">
  <span>Created by <a href="https://vyft.xyz/luke" target="_blank">Luke</a></span>

  `

updateParam(document.querySelector<HTMLDivElement>('#copy-content')!, 'p')
copyOnClick(document.querySelector<HTMLDivElement>('#copy-content')!)
generate()
