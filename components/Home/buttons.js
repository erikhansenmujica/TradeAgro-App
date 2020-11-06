import React from "react";
import { Button } from 'react-native';

export default function ({ title, name, navigation }) {
    return (
        <Button
            title={title}
            onPress={() => navigation.navigate(name)}
            key={name}
        />
    )
}
