import { fetchCss } from './remote-resources';

export default function() {
  return fetchCss().then((cssString) => {
    let styleElement = document.createElement('style');
    /**
     * Security comment:
     * The CSS String is generated by the DSM Server, and does not contain any user input.
     */
    styleElement.innerHTML = cssString;

    document.getElementsByTagName('head')[0].appendChild(styleElement);
  });
}
