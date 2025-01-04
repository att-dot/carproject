import {  useState } from "react";
import CustomSelector from "../CustomSelector/CustomSelector";
import "./SearchSection.scss";
import "./img/searchnlike.svg";

export default function SearchSection({}) {
  const b = {
    "carAge": "Новые",
    "checkboxChevron1": "on",
    "radiocar": "BMV",
    "radionumber": "Vesta",
    "radioyear": "2017"
}
  const list = ["Все", "Новые", "С пробегом"]
  // const [selectedValue, setSelectedValue] = useState(b.carAge)
  
  return (
    <form className="searchBar">
      <div className="container">
        {/* <div className="item"> */}
          {/* <input id="radio1" type="radio" name="carAge" value={"Все"} />
          <label htmlFor="radio1">Все</label> */}
          {/* <RadioButton name={'carAge'} labelV={"Все"}/>
        </div>
        <div className="item"> */}
          {/* <input id="radio2" type="radio" name="carAge" value={"Новые"} />
          <label htmlFor="radio2">Новые</label> */}
          {/* <RadioButton name={'carAge'} labelV={"Новые"}/>
        </div>
        <div className="item"> */}
          {/* <input id="radio3" type="radio" name="carAge" value={"С пробегом"} />
          <label htmlFor="radio3">С пробегом</label> */}
          {/* <RadioButton name={'carAge'} labelV={"С пробегом"}/>
        </div> */}
        <FirstSelection list={list} b={b} />
         {/* {list.map((el, i) =>{
          return <div className="item" key={i}>
          
          <RadioButton name={'carAge'} labelV={el} setSelectedValue={setSelectedValue} selectedValue={selectedValue}/>
        </div>
         })} */}
      </div>
      <button className="searchnlike" type="button">
        <div className="like"></div>
        <div className="savesearch">Сохранить поиск</div>
      </button>
      <div className="firstSelectingRow">
      <CustomSelector options={["LADA (ВАЗ)", "BMV", "Mercedes", "Priora"]} subject={'car'} defaultValue={b.radiocar}/>
      <CustomSelector options={['Vesta', '2', '3', '4']} subject={'number'} defaultValue={b.radionumber}/>
      <CustomSelector options={['2015', '2016', '2017', '2018']} subject={'year'} defaultValue={b.radioyear}/>
      </div>
      
    </form>
  );
}
type RadioButtonType = {
name: string;
labelV: string;
selectedValue: string;
setSelectedValue: (labelV: string) => void
}
function RadioButton({name, labelV, selectedValue, setSelectedValue }: RadioButtonType) {
  return (
    <>
      <input id={name + labelV} type="radio" name={name} value={labelV} key={name + labelV} checked={selectedValue === labelV} onChange={()=>{setSelectedValue(labelV)}}/>
      <label htmlFor={name + labelV}>{labelV}</label>
    </>
  );
}

function FirstSelection({list, b}: {list: string[]; b: any}){
  const [selectedValue, setSelectedValue] = useState(b.carAge)
  return (
    <>
    {list.map((el, i) =>{
          return <div className="item" key={i}>
          
          <RadioButton name={'carAge'} labelV={el} setSelectedValue={setSelectedValue} selectedValue={selectedValue}/>
        </div>
         })}
    </>
  )
}