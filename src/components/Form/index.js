import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity } from 'react-native';
import { ResultImc } from './ResultImc';

import { styles } from './style';

export function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")

    function imcCalculator() {
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular IMC Novamente")
            return
        } else {
            setImc(null)
            setTextButton("Calcular IMC")
            setMessageImc("Preencha o Peso e a Altura")
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                    onChangeText={setHeight}
                    value={height}
                    style={styles.input}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    placeholder="Ex. 65"
                    keyboardType="numeric"
                    onChangeText={setWeight}
                    value={weight}
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={validationImc}
                    style={styles.buttonCalculator}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>

            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
  );
}