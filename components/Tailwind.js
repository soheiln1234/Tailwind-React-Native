import tailwind from 'tailwind-rn';
import React from 'react';
import { SafeAreaView, Text, View,StyleSheet } from 'react-native';

const Tailwind = () => {
    return (
        <SafeAreaView style={{...tailwind('h-full'),...styles.bg}}>
		<View style={tailwind('pt-12 items-center justify-center flex-1')}>
			<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full justify-center items-center')}>
				<Text style={tailwind('text-blue-900 font-bold')}>
					Hello Tailwind
				</Text>
			</View>
		</View>
	</SafeAreaView>
    );
};

export default Tailwind;

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#eee'
    }

});