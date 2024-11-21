import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

interface IOtpInputProps {
  onOtpFinish: (otp: string) => void;
  error: boolean;
  onOtpStart: () => void;
}
const OtpInput: React.FC<IOtpInputProps> = ({
  onOtpFinish,
  error,
  onOtpStart,
}) => {
  const [inputValues, setInputValues] = useState<string[]>([]);

  const inputRefs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ];
  const handleKeyPressed = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      onOtpStart();

      setInputValues([]);
      inputRefs[0]?.current?.focus();
    }
  };
  const handleOnChangeText = async (value: string, index: number) => {
    var temp = inputValues;
    if (value === '') return;
    if (value.length === 1) {
      if (index !== 3) {
        inputRefs[index + 1]?.current?.focus();
      }
      temp[index] = value;
      setInputValues([...temp]);
    }
  };
  useEffect(() => {
    if (error === false) {
      setInputValues([]);
      inputRefs[0]?.current?.focus();
    }
  }, [error]);
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 13,
      }}>
      {inputRefs.map((k, index) => (
        <TextInput
          key={index}
          maxLength={1}
          onKeyPress={event => handleKeyPressed(event)}
          value={inputValues[index]}
          selectTextOnFocus={true}
          ref={inputRefs[index]}
          onChangeText={value => {
            handleOnChangeText(value, index);
            if (inputValues.length === 4) {
              onOtpFinish(inputValues.join(''));
            }
          }}
          style={{
            borderColor: error ? '#EF4444' : '#CDD5DF',
            borderWidth: 1,
            borderRadius: 8,
            width: 56,
            height: 56,
            textAlign: 'center',
            fontSize: 24,
            backgroundColor: '#FFF',
          }}
          keyboardType={'number-pad'}
          autoComplete="sms-otp"
          textContentType={'oneTimeCode'}
        />
      ))}
    </View>
  );
};

export default OtpInput;
