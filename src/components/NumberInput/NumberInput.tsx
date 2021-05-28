import React from "react";
import clsx from "clsx";
import Icon from "../Icon";
import css from "./NumberInput.module.scss";

export type NumberInputProps = {
  defaultValue: number;
  minValue: number;
  maxValue: number;
  step: number;
  onChange: (value: number) => void;
  unit?: string;
  outOfScopeMessage?: string;
  className?: string;
};

const NumberInput = ({
  defaultValue,
  minValue,
  maxValue,
  step,
  onChange,
  unit,
  className
}: NumberInputProps): JSX.Element => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (e) => {
    const _value = +e.target.value;
    setValue(_value);
    onChange(_value);
  };

  const handleIncrease = () => {
    const _value = +Math.min(Math.max(value + step, minValue), maxValue).toFixed(1);
    if (_value !== value) {
      setValue(_value);
      onChange(_value);
    }
  };

  const handleDecrease = () => {
    const _value = +Math.max(Math.min(value - step, maxValue), minValue).toFixed(1);
    if (_value !== value) {
      setValue(_value);
      onChange(_value);
    }
  };

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={clsx(css.NumberInput, className)}>
      <button onClick={handleDecrease}>
        <Icon name="minus" />
      </button>
      <label className={css.NumberInput__inputContainer}>
        <input
          className={css.NumberInput__input}
          type="text"
          value={value}
          onChange={handleChange}
        />
        {unit && <span className={css.NumberInput__unit}>{unit}</span>}
      </label>
      <button onClick={handleIncrease}>
        <Icon name="plus" />
      </button>
    </div>
  );
};

export default NumberInput;
