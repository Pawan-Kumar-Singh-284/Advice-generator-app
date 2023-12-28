import style from "./Container.module.css";
function Container({ handleClick, advices }) {
  // console.log(advices);

  return (
    <div className={style.container}>
      <div className={style.mainContainer}>
        <p>Advice #{advices.id}</p>
        <h1 className={style.quotes}>"{advices.advice}"</h1>
        <span className={style.border}></span>
      </div>
      <button className={style.dice} onClick={handleClick}>
        <span className={style.imageDice}></span>
      </button>
    </div>
  );
}
export default Container;
