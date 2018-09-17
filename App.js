import React from 'react'
import { Text, View } from 'react-native'
import { Camera, Permissions } from 'expo'

import Mask from './Mask/index.js'

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    faces: []
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  onFacesDetected({faces}) {
    this.setState({ faces })
  }

  render() {
    const { hasCameraPermission, faces } = this.state
    if (hasCameraPermission === null) return <View />
    if (hasCameraPermission === false) return <Text>No access to camera</Text>

    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={Camera.Constants.Type.front}
          faceDetectionMode={Camera.Constants.FaceDetection.Mode.fast}
          faceDetectionLandmarks={Camera.Constants.FaceDetection.Landmarks.all}
          faceDetectionClassifications={Camera.Constants.FaceDetection.Classifications.all}
          onFacesDetected={this.onFacesDetected.bind(this)}
        />
        { faces.map(face => <Mask key={face.faceID} face={face}></Mask>) }
      </View>
    )
  }
}
