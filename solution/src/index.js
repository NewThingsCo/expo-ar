import React from 'react'
import { Text, View } from 'react-native'
import { Camera, FaceDetector, Permissions } from 'expo'

import Mask from './Mask/index.js'

const flexStyle = { flex: 1 }
const flexCenterStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }

export default class FaceCamera extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      faces: []
    }
    this.onFacesDetected = this.onFacesDetected.bind(this)
    this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    this.onCameraPermission = this.onCameraPermission.bind(this)
  }

  componentDidMount() {
    Permissions
      .askAsync(Permissions.CAMERA)
      .then(this.onCameraPermission)
  }

  onCameraPermission({ status }) {
    this.setState({ hasCameraPermission: status === 'granted' })
  }

  onFacesDetected({faces}) {
    console.log(faces)
    this.setState({ faces })
  }

  onFaceDetectionError(error) {
    console.log(error)
  }

  render() {
    const { hasCameraPermission, faces } = this.state

    if (hasCameraPermission === null)
      return <View />

    if (hasCameraPermission === false)
      return (
        <View style={flexCenterStyle}>
          <Text>No access to camera</Text>
        </View>
        )

    return (
      <View style={flexStyle}>
        <Camera
          style={flexStyle}
          type={Camera.Constants.Type.front}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.fast,
            detectLandmarks: FaceDetector.Constants.Landmarks.all,
            runClassifications: FaceDetector.Constants.Classifications.all
          }}
          onFacesDetected={this.onFacesDetected}
          onFacesDetectionError={this.onFacesDetectionError}
        />
        { faces.map(face => <Mask key={face.faceID} face={face}></Mask>) }
      </View>
    )
  }
}
