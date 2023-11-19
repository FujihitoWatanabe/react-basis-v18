// 引数のcolor, childrenでpropsを省略{props.children}→{children}
export const ColorfulMessage = ({ color, children }) => {
  const contentStyleA = {
    color, // 省略記法
    fontSize: "18px"
  };
  // childrenでApp.jsでタグの始めと終わりを可能にしている<ColorfulMessage></ColorfulMessage>
  return <p style={contentStyleA}>{children}</p>;
};
