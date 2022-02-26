import _ from "lodash";

const ItemDisplay = (props) => {
  const images = [
    'https://cdn4.iconfinder.com/data/icons/REALVISTA_developement/development/png/128/ruby.png',
    'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/ruby-on-rails-128.png',
    'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-128.png',
    'https://cdn1.iconfinder.com/data/icons/logotypes/32/wordpress-128.png',
    'https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-128.png',
    'https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-128.png',
    'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/367_Vuejs_logo-128.png',
    'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react_color-128.png'
  ];
  const allSrc = _.fromPairs(_.times(8).map(n => ['item' + n, images[n]]));
  const displaySrc = allSrc[props.value];

  return <>
    <img src={displaySrc} />
  </>
}

export default ItemDisplay;
