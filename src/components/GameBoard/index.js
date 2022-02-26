import ItemDisplay from '../ItemDisplay';
import './style.css';

const GameBoard = ({ items, onItemClick, status }) => {
  const itemClassName = (item, index) => {
    if (item.found) return 'game-board__item--found';
    if ((status.picked || []).some((item) => item.index === index)) return 'game-board__item--picked';

    return '';
  }

  return (
    <div className="game-board">
      {
        items.map((item, index) => (
          <div key={`item-${item}-${index}`} className={`game-board__item ${itemClassName(item, index)}`} onClick={() => {
            onItemClick(item)
          }}>
            <div className='game-board__item__content'>
              <ItemDisplay value={item.value} />
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default GameBoard;
