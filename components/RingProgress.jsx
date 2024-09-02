import {View, StyleSheet } from 'react-native'
import SVG, { Circle, Text, Line } from 'react-native-svg'


(parameters) = {
    radius: Number,
    strokeWidth: Number,
}

const color = '#9AE200';

const RingProgress = ({ radius = 150 , strokeWidth = 35, progress }) => {

    const innerRadius = radius - strokeWidth / 2;
    const omkreds = 2 * Math.PI * innerRadius;

  

    
    return (
        <View style= { {width: radius * 2, height: radius * 2, alignSelf: 'center' }}>
            <SVG>
                <Circle
                    r= {innerRadius}
                    cx={radius}
                    cy={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    opacity={0.2}
                    />

                <Circle
                    r= {innerRadius}
                    cx={radius}
                    cy={radius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeDasharray={[omkreds * progress, omkreds ]}
                    strokeLinecap='round'
                    rotation={-90 }
                    originX={radius}
                    originY={radius}
                />
                <Text
                x={radius}
                y={radius - 20}
                fontSize={24}
                 
                ></Text>
            </SVG>
        </View>
    );
};


const styles = StyleSheet.create({
    SVG: {
        paddingBottom: 24,
    }
})



export default RingProgress;