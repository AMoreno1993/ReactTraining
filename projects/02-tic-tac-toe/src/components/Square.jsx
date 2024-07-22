//children es lo que tiene que tener dentro el tablero
//updateboard es una forma de actualizar el tablero
//Esto es cada cuadrado con el contenido del children entre diamantes y llaves
// que en este caso es el index
// eslint-disable-next-line react/prop-types
export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
