import React from "react";

const Input = ({
  onChangeText,
  value,
  placeholder,
  error,
  keyboardType,
  placeholderTextColor,
  secureTextEntry,
  multiline,
}) => {
  return (
    <div>
      <input
        className="w-[100%] text-[14px] p-[8px] bg-transparent bg-custom-gray1 border rounded-[5px] mb-[8px]"
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        multiline={multiline}
      />
      {error && (
        <p
          style={{
            fontSize: 13,
            paddingLeft: 4,
            marginVertical: 5,
            color: "red",
            marginTop: -2,
          }}
          className="font-[regular]"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
