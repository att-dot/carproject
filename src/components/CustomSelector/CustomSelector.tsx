import { useId, useState } from "react";
import "./CustomSelector.scss";

export default function CustomSelector({options, subject, defaultValue}) {
  const [isSelecting, setIsSelecting]: [boolean, any] = useState(false);
  const [selectedValue, setSelectedValue]: [string, any] =
    useState(defaultValue || "нажмите чтобы выбрать");
console.log(options)
  const [isClicked, setIsClicked]: [boolean | null, any] = useState(null);
  return (
    <div className="selector ">
      {selectedValue}
      <Chevrong
        onClick={() => {
        }}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
      />

      
      <Options
        onClick={setSelectedValue}
        options={options}
        selectedValue={selectedValue}
        optional={() => {
          setIsClicked(false);
          setIsSelecting(false);
        }}
        subject={subject}
        className = {isClicked === null?'': isClicked? 'visibleOptions': 'hiddenOptions'}
      />
      
    </div>
  );
}

type ChevrongType = {
  onClick: () => void;
  isClicked: boolean | null;
  setIsClicked: any;
};
function Chevrong({ onClick, isClicked, setIsClicked }: ChevrongType) {
  const id = "checkboxChevron" + useId()
  return (
    <div className="chevronContainer">
      <input id={id} type="checkbox" name="checkboxChevron1" className="checkboxChevron" title="open the menu to choose"/>
      <label
       
        htmlFor={id}
        className="chevron"
        onClick={() => {
          onClick();
          setIsClicked(!isClicked);
        }}
      ></label>
    </div>
  );
}
type OptionsType = {
  onClick: (newV: string) => void;
  options: string[];
  selectedValue: string;
  optional: any;
};
function Options({ onClick, options, selectedValue, className, subject }: OptionsType) {
  const arr = [];
  for (let i = 0; i < options.length; i++) {
    arr.push(
      <div key={options[i]}>
        <input
          id={options[i]}
          checked={selectedValue === options[i]}
          onChange={() => {
            onClick(options[i]);
          }}
          type="radio"
          name={'radio' + subject}
          // onClick={() => {
          //   onClick(options[i]);
          // }}
          
          value={options[i]}
          key={options[i]}
        />
        <label
          htmlFor={options[i]}
          className={
            "options-item " + (selectedValue === options[i] ? "selected" : "")
          }
        >
          {options[i]}
        </label>
      </div>
    );
  }
  return (
    <>
      <div className={"options " + className} key={'options'}>{...arr}</div>
    </>
  );
}
