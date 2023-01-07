import React, { useState } from 'react';
import { TextInput, Text, View, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from 'react-native';

import { ResultImc } from './ResultImc';

import { styles } from './style';

export function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o Peso e a Altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular IMC")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        const totalImc = (weight/(heightFormat**2)).toFixed(2)
        setImcList((arr) => [...arr, {id: new Date().getTime(), imc: totalImc}])
        setImc(totalImc)
    }

    function verificationImc() {
        if(imc == null) {
            Vibration.vibrate();
            setErrorMessage("Campo obrigatório")
        }
    }

    function validationImc() {
        if(weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calcular IMC Novamente")
            setErrorMessage(null)
        } else {
            setImc(null)
            setTextButton("Calcular IMC")
            setMessageImc("Preencha o Peso e a Altura")
            verificationImc()
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? 
                <Pressable style={styles.form} onPress={Keyboard.dismiss}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                        placeholder="Ex. 1.75"
                        keyboardType="numeric"
                        onChangeText={setHeight}
                        value={height}
                        style={styles.input}
                    />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
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
                </Pressable>
            : 
                <View style={styles.exibitionResultImc}>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                    <TouchableOpacity
                        onPress={validationImc}
                        style={styles.buttonCalculator}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                style={styles.listImcs}
                data={imcList.reverse()}
                renderItem={({item}) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
  );
}