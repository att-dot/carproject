import { useId, useState } from "react";
import "./CustomSelector.scss";

export default function CustomSelector({
  options,
  subject,
  defaultValue,
  setClickedChevron,
  clickedChevron
}: {
  options: string[];
  subject: string;
  defaultValue: string;
  setClickedChevron: (clickedChevron: string)=> void;
  clickedChevron: string
}) {
  const [selectedValue, setSelectedValue]: [string, any] = useState(
    defaultValue || "нажмите чтобы выбрать"
  );
  const [checked, setChecked] = useState(false);
  const id = "checkboxChevron" + useId();
  const [isClicked, setIsClicked]: [boolean | null, any] = useState(null);
  return (
    <div className="selector ">
      <div className="selected-value">{selectedValue}</div>

      <Chevrong
        onClick={() => {}}
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        checked={checked}
        setChecked={setChecked}
        setClickedChevron={setClickedChevron}
        clickedChevron={clickedChevron}
        id = {id}
      />

      <Options
        onClick={setSelectedValue}
        options={options}
        selectedValue={selectedValue}
        optional={() => {
          setIsClicked(false);
        }}
        setClickedChevron={setClickedChevron}
        subject={subject}
        className={
          isClicked === null
            ? ""
            : clickedChevron === id
            ? "visibleOptions"
            : "hiddenOptions"
        }
      />
    </div>
  );
}

type ChevrongType = {
  onClick: () => void;
  isClicked: boolean | null;
  setIsClicked: any;
  checked: boolean;
  setChecked: (checked: boolean )=>void
  id: string;
  setClickedChevron: (clickedChevron: string) => void;
  clickedChevron: string
};
function Chevrong({ onClick, isClicked, setIsClicked, setClickedChevron, clickedChevron, id  }: ChevrongType) {
  
  return (
    <div className="chevronContainer">
      <input
        id={id}
        type="checkbox"
        name="checkboxChevron1"
        className="checkboxChevron"
        title="open the menu to choose"
        checked={clickedChevron === id}
        onChange={() => {
          if(clickedChevron === id){
            setClickedChevron('')
          }else{
            setClickedChevron(id)
          }
        }}
      />
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
  className: string;
  subject: string;
  optional: () => void;
  setClickedChevron: (clickedChevron: string) => void;
};
function Options({
  onClick,
  options,
  selectedValue,
  className,
  subject,
  optional,
  setClickedChevron,
}: OptionsType) {
  const arr = [];
  for (let i = 0; i < options.length; i++) {
    arr.push(
      <div key={options[i] + subject}>
        <input
          id={options[i] + subject}
          checked={selectedValue === options[i]}
          onChange={() => {
            onClick(options[i]);
            optional();
            setClickedChevron('')
          }}
          
          type="radio"
          name={"radio" + subject}
          // onClick={() => {
          //   onClick(options[i]);
          // }}

          value={options[i]}
          key={options[i] + subject}
        />
        <label
          htmlFor={options[i] + subject}
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
      <div className={"options " + className} key={"options"}>
        {...arr}
      </div>
    </>
  );
}
