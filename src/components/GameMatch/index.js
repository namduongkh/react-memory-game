import { useMemo, useState } from "react";
import _ from "lodash";
import "./style.css";

import GameBoard from "../GameBoard";

const ITEMS = _.times(8).map(n => 'item' + n);

const GameMatch = (props) => {
  const [items, setItems] = useState([]);
  const [pickedItems, setPickedItems] = useState([]);
  const [point, setPoint] = useState(0);
  const [preventClick, setPreventClick] = useState(false);

  const startGame = () => {
    let newItems = [];
    ITEMS.forEach(item => newItems = newItems.concat([item, item]));
    setItems(_.shuffle(newItems).map((value, index) => {
      return {
        value,
        index,
        found: false
      }
    }));
  }

  const onItemClick = (item) => {
    if (preventClick || !item || item.found || pickedItems.some(i => i.index === item.index)) return;

    const newPickedItems = pickedItems.concat(item)
    setPickedItems(newPickedItems);

    if (newPickedItems.length === 2) {
      if (newPickedItems[0].value === newPickedItems[1].value) {
        setItems(items.map(item => {
          if (item.value === newPickedItems[0].value) {
            item.found = true
          }

          return item;
        }))

        if (isWin) {
          setPoint(point + 1);
        }
      }

      setPreventClick(true);
      setTimeout(() => {
        setPickedItems([]);
        setPreventClick(false);
      }, 1000);
    }
  }

  const boardStatus = useMemo(() => {
    return {
      picked: pickedItems
    };
  }, [pickedItems]);

  const isWin = useMemo(() => {
    return items.every(item => item.found);
  }, [items])

  const gameStatus = useMemo(() => {
    if (!items.length) return 'stoped';
    if (isWin) return 'ended';
    return 'running';
  }, [items, isWin]);

  const replay = () => {
    props.onNewGame();
    startGame();
  }

  return (
    <>
      <h1>Memory Game</h1>
      {['stoped'].includes(gameStatus) && <button className="btn-play" onClick={() => { startGame() }}>PLAY</button>}
      {['ended'].includes(gameStatus) && <>
        <h2>YOU WIN!</h2>
        <button className="btn-play" onClick={() => { replay() }}>REPLAY</button>
      </>
      }
      <GameBoard items={items} onItemClick={onItemClick} status={boardStatus} />
    </>
  )
}

export default GameMatch;
