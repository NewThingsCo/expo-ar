import React from 'react'

import { Text, View } from 'react-native';

const Mask = ({
  face: {
    bounds: {
      origin: { x: containerX, y: containerY },
      size: { width: faceWidth }
    },
    leftEyePosition,
    noseBasePosition,
    rightEyePosition
  }
}) => {
  const eyeWidth = faceWidth / 4
  const pupilWidth = eyeWidth / 5
  const noseWidth = eyeWidth;

  const translatedEyePositionX = eyePosition => eyePosition.x - eyeWidth / 2 - containerX
  const translatedEyePositionY = eyePosition => eyePosition.y - eyeWidth / 2 - containerY

  const translatedLeftEyePosition = {
    x: translatedEyePositionX(leftEyePosition),
    y: translatedEyePositionY(leftEyePosition)
  }
  const translatedRightEyePosition = {
    x: translatedEyePositionX(rightEyePosition),
    y: translatedEyePositionY(rightEyePosition)
  }

  const eyeStyle = (eyePosition, eyeBorderWidth = eyeWidth / 10) => ({
    position: 'absolute',
    left: eyePosition.x,
    top: eyePosition.y,
    borderRadius: eyeWidth,
    width: eyeWidth,
    height: eyeWidth,
    borderWidth: eyeBorderWidth,
    borderColor: 'black',
    backgroundColor:'yellow'
  });

  const adjustedPupilPosition = coord => coord + eyeWidth / 2 - pupilWidth / 2
  const pupilStyle = (eyePosition) => ({
    position: 'absolute',
    left: adjustedPupilPosition(eyePosition.x),
    top: adjustedPupilPosition(eyePosition.y),
    borderRadius: pupilWidth,
    width: pupilWidth,
    height: pupilWidth,
    backgroundColor:'black'
  });

  const noseTransformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
      (rightEyePosition.x - leftEyePosition.x)
    )
  ) => angleRad * 180 / Math.PI
  const noseStyle = () => ({
    fontSize: noseWidth,
    position: 'absolute',
    left: noseBasePosition.x - noseWidth / 2 - containerX,
    top: noseBasePosition.y - noseWidth / 2 - containerY,
    transform: [{ rotate: `${noseTransformAngle()}deg`}]
  })
  
  return (
    <View style={{ position: 'absolute', left: containerX, top: containerY }}>
      <View style = {{...eyeStyle(translatedLeftEyePosition)}} />
      <View style = {{...pupilStyle(translatedLeftEyePosition)}} />
      <View style = {{...eyeStyle(translatedRightEyePosition)}} />
      <View style = {{...pupilStyle(translatedRightEyePosition)}} />
      <Text style={{...noseStyle()}}>🐽</Text>
    </View>
  );
};

export default Mask
