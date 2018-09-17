import React from 'react'

import { Text, View } from 'react-native';

const defaultEyeWidth = 100;

const containerX = face => face.bounds.origin.x
const containerY = face => face.bounds.origin.y
const eyePositionX = (face, eyePosition, eyeWidth) => eyePosition.x - eyeWidth / 2 - containerX(face)
const eyePositionY = (face, eyePosition, eyeWidth) => eyePosition.y - eyeWidth / 2 - containerY(face)

const eyeStyle = (face, eyePosition, eyeWidth = defaultEyeWidth, eyeBorderWidth = eyeWidth / 10) => ({
  position: 'absolute',
  left: eyePositionX(face, eyePosition, eyeWidth),
  top: eyePositionY(face, eyePosition, eyeWidth),
  borderRadius: eyeWidth,
  width: eyeWidth,
  height: eyeWidth,
  borderWidth: eyeBorderWidth,
  borderColor: 'black',
  backgroundColor:'yellow'
});
const pupilStyle = (face, eyePosition, eyeWidth = defaultEyeWidth, pupilWidth = eyeWidth / 5) => ({
  position: 'absolute',
  left: eyePositionX(face, eyePosition, eyeWidth) + eyeWidth / 2 - pupilWidth / 2,
  top: eyePositionY(face, eyePosition, eyeWidth) + eyeWidth / 2 - pupilWidth / 2,
  borderRadius: pupilWidth,
  width: pupilWidth,
  height: pupilWidth,
  backgroundColor:'black'
});
const noseStyle = (face, noseWidth) => ({
  fontSize: noseWidth,
  position: 'absolute',
  left: face.noseBasePosition.x - noseWidth / 2 - containerX(face),
  top: face.noseBasePosition.y - noseWidth / 2 - containerY(face)
})

const Mask = ({ face }) => {
  const eyeWidth = face.bounds.size.width / 4
  const noseWidth = eyeWidth;
  const faceExpression = smilingProbability => {
    const emoji = smilingProbability > 0.5 ? '😊' : '😐'
    return <Text style={{fontSize: 25}}>{emoji}</Text>
  }
  return (
    <View style={{ position: 'absolute', left: containerX(face), top: containerY(face) }}>
      { /*faceExpression(face.smilingProbability)*/ }
      <View style = {{...eyeStyle(face, face.leftEyePosition, eyeWidth)}} />
      <View style = {{...pupilStyle(face, face.leftEyePosition, eyeWidth)}} />
      <View style = {{...eyeStyle(face, face.rightEyePosition, eyeWidth)}} />
      <View style = {{...pupilStyle(face, face.rightEyePosition, eyeWidth)}} />
      <Text style={{...noseStyle(face, noseWidth)}}>🐽</Text>
    </View>
  );
};

export default Mask