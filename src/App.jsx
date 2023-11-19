import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  console.log("--App--");
  const [num, setNum] = useState(0); // useStateはconst App内の最上段でしか呼べない
  const [isShowFace, setIsShowFace] = useState(false);
  const onClicKCountUp = () => {
    setNum((prev) => prev + 1); // setNum(num + 1);と同じ処理
    // setNum(num + 1);
  };
  const onClickToggle = () => {
    setIsShowFace(!isShowFace);
  };

  // num > 0の時に(*´ω｀)を表示させる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowFace || setIsShowFace(true);
      } else {
        isShowFace && setIsShowFace(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です!</ColorfulMessage>
      <button onClick={onClicKCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>(*´ω｀)</p>}
    </>
  );
};
