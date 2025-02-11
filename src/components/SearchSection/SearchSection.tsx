import { useState } from "react";
import CustomSelector from "../CustomSelector/CustomSelector";
import "./SearchSection.scss";
import "./img/searchnlike.svg";
import MainButton from "../MainButton/MainButton";

export default function SearchSection({}) {
  //   const b = {
  //     "carAge": "",
  //     "checkboxChevron1": "on",
  //     "radiocar": "BMV",
  //     "radionumber": "Vesta",
  //     "radioyear": "2017",
  //     "radiobodywork": "Кузов",
  //     "radiobox": "Коробка",
  //     "radioengine": "Двигатель",
  //     "radiodrive": "Привод",
  //     "radiovolume": "Объем"
  // }
  const b = {
    radiocar: "BMV",
    radionumber: "Vesta",
    radioyear: "2017",
    radiobodywork: "средний",
    radiobox: "1",
    radioengine: "3",
    radiodrive: "2",
    radiovolume: "4",
  };
  const list = ["Все", "Новые", "С пробегом"];

  const [clickedChevron, setClickedChevron] = useState("");
  return (
    <form className="searchBar">
      <div className="container">
        <FirstSelection list={list} b={b} />
      </div>
      <button className="searchnlike" type="button" onClick={searchnlike}>
        <div className="like"></div>
        <div className="savesearch">Сохранить поиск</div>
      </button>
      <div className="firstSelectingRow">
        <CustomSelector
          options={["LADA (ВАЗ)", "BMV", "Mercedes", "Priora"]}
          subject={"car"}
          defaultValue={b.radiocar}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
        <CustomSelector
          options={["Vesta", "2", "3", "4"]}
          subject={"number"}
          defaultValue={b.radionumber}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
        <CustomSelector
          options={["2015", "2016", "2017", "2018"]}
          subject={"year"}
          defaultValue={b.radioyear}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
      </div>
      <div className="secondSelectingRow">
        <CustomSelector
          options={["нет", "маленький", "средний", "большой"]}
          subject={"bodywork"}
          defaultValue={b.radiobodywork}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
        <CustomSelector
          options={["1", "2", "3", "4"]}
          subject={"box"}
          defaultValue={b.radiobox}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
        <CustomSelector
          options={["1", "2", "3", "4"]}
          subject={"engine"}
          defaultValue={b.radioengine}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
        <CustomSelector
          options={["1", "2", "3", "4"]}
          subject={"drive"}
          defaultValue={b.radiodrive}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
        <CustomSelector
          options={["1", "2", "3", "4"]}
          subject={"volume"}
          defaultValue={b.radiovolume}
          setClickedChevron={setClickedChevron}
          clickedChevron={clickedChevron}
        />
      </div>
      <div className="thirdSelectingRow">
        <div>
          <label htmlFor="pricefrom">Цена от, ₽</label>
        <input placeholder="Цена от, ₽" className="pricefrom" id="pricefrom"/>
        <input placeholder="Цена до, ₽" className="priceto"/>
        </div>
        <div>
        <input placeholder="Пробег от, ₽" className="milagefrom"/>
        <input placeholder="Пробег до, ₽" className="milageto"/>
        </div>
        {/* <input placeholder="Цена от, ₽" className="pricefrom"/>
        <input placeholder="Цена до, ₽" className="priceto"/> */}
         <MainButton onClick={() => console.log("You clicked on the pink circle!")} label='Показать предложения' arrow={false} btnStyle='showsugg' link='any' />
      </div>
    </form>
  );
}
type RadioButtonType = {
  name: string;
  labelV: string;
  selectedValue: string;
  setSelectedValue: (labelV: string) => void;
};
function RadioButton({
  name,
  labelV,
  selectedValue,
  setSelectedValue,
}: RadioButtonType) {
  return (
    <>
      <input
        id={name + labelV}
        type="radio"
        name={name}
        value={labelV}
        key={name + labelV}
        checked={selectedValue === labelV}
        onChange={() => {
          setSelectedValue(labelV);
        }}
      />
      <label htmlFor={name + labelV}>{labelV}</label>
    </>
  );
}

function FirstSelection({ list, b }: { list: string[]; b: any }) {
  const [selectedValue, setSelectedValue] = useState(b.carAge);
  return (
    <>
      {list.map((el, i) => {
        return (
          <div className="item" key={i}>
            <RadioButton
              name={"carAge"}
              labelV={el}
              setSelectedValue={setSelectedValue}
              selectedValue={selectedValue}
            />
          </div>
        );
      })}
    </>
  );
}

function searchnlike() {
  const form: HTMLFormElement | null = document.querySelector("form.searchBar");
  if (form !== null) {
    const a = new FormData(form, null);
    const b = {};
    for (let [key, v] of a) {
      Object.assign(b, { [key]: v });
      console.log(key, v);
    }
    console.log(b);
  }
}
