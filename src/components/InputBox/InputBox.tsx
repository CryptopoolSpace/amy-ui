import React from "react";
import clsx from "clsx";
import css from "./InputBox.module.scss";

export type InputBoxProps = {
  onChange: (value: string) => void;
  defaultValue?: number | string;
  label?: string;
  description?: string;
  unit?: string;
  compact?: boolean;
  AddonComponent?: JSX.Element;
  className?: string;
};

const InputBox = ({
  defaultValue,
  onChange,
  label,
  description,
  unit,
  compact,
  AddonComponent,
  className
}: InputBoxProps): JSX.Element => {
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (e) => {
    const _value = e.target.value;
    setValue(_value);
    onChange(_value);
  };

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <>
      {label && <p className={css.InputBoxLabel}>{label}</p>}
      <div className={clsx(css.InputBox, compact && css.compact, className)}>
        {AddonComponent && <div className={css.InputBox__left}>{AddonComponent}</div>}
        <div className={css.InputBox__right}>
          {description && <p className={css.InputBox__description}>{description}</p>}
          <label className={css.InputBox__inputContainer}>
            <input
              className={css.InputBox__input}
              type="text"
              value={value}
              onChange={handleChange}
            />
            {unit && <span className={css.InputBox__unit}>{unit}</span>}
            <span className={css.InputBox__inputContainerBG} />
          </label>
        </div>
      </div>
    </>
  );
};

InputBox.defaultProps = {
  defaultValue: 0
};

export default InputBox;
