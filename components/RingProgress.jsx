import {View, StyleSheet } from 'react-native'
import SVG, { Circle } from 'react-native-svg'
import Text from 'react-svg-text';
import { render } from 'react-dom';

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